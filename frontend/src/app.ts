import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import 'wired-elements';

import './plotInput';
import {PlotInput} from "./plotInput";

import * as backend from '../pkg/';

@customElement('main-app')
export class App extends LitElement {
    model: backend.DynamicNetwork | null = null;

    connectedCallback() {
        super.connectedCallback();
        this.model = backend.DynamicNetwork.new_from_js(new Uint32Array([2, 4, 3]));
        this.model.randomize_from_js();
    }

    render() {
        return html`
            <div>
                <body>
                <p>
                    <wired-button @click=${this.onClick}>Evaluate</wired-button>
                </p>
                <plot-input id="plti"></plot-input>
                </body>
            </div>
        `;
    }

    onClick() {
        let plti = this.shadowRoot!.getElementById('plti') as PlotInput;

        let realCtx = plti.realCanvas!.getContext("2d")!;

        this.model!.randomize_from_js();
        const colors = ['#ff9999', '#9eb9ff', '#a9ffa8'];
        const delta = 4;

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

        for (let i = 0; i < dataX.length; i++) {
            const xs = dataX[i];
            const ys = dataY[i];
            cost += this.model!.mse_from_js(new Float32Array(xs), new Float32Array(ys))
        }

        console.log(cost);
    }

    static styles = css``;
}

declare global {
    interface HTMLElementTagNameMap {
        'main-app': App;
    }
}
