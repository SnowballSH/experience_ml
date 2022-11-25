import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import 'wired-elements';

import './plotInput';

import * as backend from '../pkg/';

@customElement('main-app')
export class App extends LitElement {
    @property({type: Number})
    num: number = 12345;

    render() {
        return html`
            <div>
                <body>
                <p>
                    <wired-button @click=${this.onClick}>Next</wired-button>
                </p>
                <p>
                    Number is ${this.num}
                </p>
                <plot-input></plot-input>
                </body>
            </div>
        `;
    }

    public onClick() {
        this.num = backend.next(this.num);
    }

    static styles = css``;
}

declare global {
    interface HTMLElementTagNameMap {
        'main-app': App;
    }
}
