import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import 'wired-elements';

import './plotInput';
import {PlotInput} from "./plotInput";

import * as backend from './pkg';

@customElement('main-app')
export class App extends LitElement {
    static styles = css``;
    model: backend.DynamicNetwork | null = null;
    @property({type: String})
    cost: number = NaN;
    @property({type: String})
    trainingProgress: string = "N/A";
    @property({type: String})
    numCorrect: string = "N/A";

    learning: boolean = false;

    @property({type: Number})
    weight1: number = 8;
    @property({type: Number})
    weight2: number = 4;
    @property({type: Number})
    weight3: number = 0;

    connectedCallback() {
        super.connectedCallback();
        backend.init();
        this.model = backend.DynamicNetwork.new_from_js(this.topology());
        this.model.randomize_from_js();
    }

    topology() {
        if (this.weight3 !== 0) {
            return new Uint32Array([2, this.weight1, this.weight2, this.weight3, 3]);
        }
        return new Uint32Array([2, this.weight1, this.weight2, 3]);
    }

    render() {
        return html`
            <div>
                <body>
                <div style="display: flex; flex-wrap: wrap;">
                    <div style="flex: 1;">
                        <p>
                            <wired-button @click=${this.evaluate}>Evaluate</wired-button>
                            <wired-button @click=${this.learn}>Learn</wired-button>
                            <wired-button @click=${this.randomize}>Randomize</wired-button>
                        </p>
                        <p>

                            <wired-slider value="8" min="1" max="32" id="weight-1" @change=${(x: CustomEvent) => {
                                this.weight1 = x.detail.value;
                                this.model!.free();
                                this.model = backend.DynamicNetwork.new_from_js(this.topology());
                                this.model.randomize_from_js();
                            }}></wired-slider>

                            Hidden Layer 1: ${this.weight1} neurons
                        </p>
                        <p>
                            <wired-slider value="4" min="1" max="64" id="weight-2" @change=${(x: CustomEvent) => {
                                this.weight2 = x.detail.value;
                                this.model!.free();
                                this.model = backend.DynamicNetwork.new_from_js(this.topology());
                                this.model.randomize_from_js();
                            }}></wired-slider>
                            Hidden Layer 2: ${this.weight2} neurons
                        </p>
                        <p>
                            <wired-slider value="0" min="0" max="16" id="weight-3" @change=${(x: CustomEvent) => {
                                this.weight3 = x.detail.value;
                                this.model!.free();
                                this.model = backend.DynamicNetwork.new_from_js(this.topology());
                                this.model.randomize_from_js();
                            }}></wired-slider>
                            Hidden Layer 3: ${this.weight3 === 0 ? "0 (Disabled)" : this.weight3} neurons
                        </p>
                        <p>
                        <h3>Network Architecture: 2 -> ${this.weight1} ->
                            ${this.weight2}${this.weight3 !== 0 ? ` -> ${this.weight3}` : ''} -> 3</h3>
                        <h3>Current Cost: ${this.cost}</h3>
                        <h3>Training Progress: ${this.trainingProgress}</h3>
                        <h3>Number Correct: ${this.numCorrect}</h3>
                        </p>

                        <br/>

                        <p>
                            Usage:
                        <ul>
                            <li>Plot tri-labelled data on the canvas.</li>
                            <li>Click "Learn" to train the network.</li>
                            <li>Try out different number of neurons! Larger neural networks can solve more complicated
                                data, but learns slower.
                            </li>
                        </ul>
                        </p>

                        <br/>
                    </div>

                    <div style="flex: 1; margin-left: 20px">
                        <plot-input id="plti"></plot-input>
                    </div>
                </div>
                </body>
            </div>
        `;
    }

    randomize() {
        if (this.learning) {
            return;
        }

        this.model!.randomize_from_js();
        this.cost = NaN;
        this.trainingProgress = "N/A";
    }

    evaluate() {
        let plti = this.shadowRoot!.getElementById('plti') as PlotInput;

        let realCtx = plti.realCanvas!.getContext("2d")!;

        const colors = ['#ff9999', '#9eb9ff', '#a9ffa8'];
        const delta = 3;

        realCtx.clearRect(0, 0, plti.width, plti.height);

        for (let x = 0; x < plti.width; x += delta) {
            for (let y = 0; y < plti.height; y += delta) {
                let output = this.model!.forward_from_js(new Float32Array([x / plti.width, y / plti.height]));
                let i = output.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
                realCtx.fillStyle = colors[i];
                realCtx.fillRect(x, y, delta, delta);
            }
        }

        realCtx.drawImage(plti.canvas!, 0, 0);

        let dataX = plti.inputs;
        let dataY = plti.outputs;

        let cost = 0;
        let correct = 0;

        for (let i = 0; i < dataX.length; i++) {
            const xs = dataX[i];
            const ys = dataY[i];
            cost += this.model!.mse_from_js(new Float32Array(xs), new Float32Array(ys));

            let output = this.model!.forward_from_js(new Float32Array(xs));
            let k = output.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
            if (k === ys.indexOf(1)) {
                correct++;
            }
        }

        this.cost = cost;
        this.numCorrect = `${correct}/${dataX.length}`;
    }

    async learn() {
        if (this.learning) {
            return;
        }

        this.learning = true;

        let plti = this.shadowRoot!.getElementById('plti') as PlotInput;

        let inputs = plti.inputs;
        let outputs = plti.outputs;

        let input_builder = backend.ArrayOfArrayBuilder.new();
        let output_builder = backend.ArrayOfArrayBuilder.new();

        for (let i = 0; i < inputs.length; i++) {
            input_builder.push(new Float32Array(inputs[i]));
        }

        for (let i = 0; i < outputs.length; i++) {
            output_builder.push(new Float32Array(outputs[i]));
        }

        for (let j = 0; j < 100; j++) {
            for (let i = 0; i < 200; i++) {
                this.model!.learn_from_js(input_builder, output_builder, 0.035 - j * 0.0001);
            }
            this.evaluate();
            this.trainingProgress = `${j + 1}/100`;
            await new Promise(r => setTimeout(r, 20));
        }

        input_builder.free();
        output_builder.free();

        this.learning = false;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'main-app': App;
    }
}
