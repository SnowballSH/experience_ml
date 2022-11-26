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
        this.model = backend.DynamicNetwork.new_from_js(new Uint32Array([2, 4, 8, 3]));
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
        this.model!.randomize_from_js();
        let plti = this.shadowRoot!.getElementById('plti') as PlotInput;
        let ctx = plti.canvas!.getContext("2d")!;
        const colors = ['#ff9999', '#9eb9ff', '#a9ffa8'];
        const delta = 3;

        for (let x = 0; x < plti.width; x += delta) {
            for (let y = 0; y < plti.height; y += delta) {
                let output = this.model!.forward_from_js(new Float32Array([x, y]));
                let i = output.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
                ctx.fillStyle = colors[i];
                ctx.fillRect(x, y, delta, delta);
            }
        }
    }

    static styles = css``;
}

declare global {
    interface HTMLElementTagNameMap {
        'main-app': App;
    }
}
