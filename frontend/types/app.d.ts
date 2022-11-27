import { LitElement } from 'lit';
import 'wired-elements';
import './plotInput';
import * as backend from '../pkg/';
export declare class App extends LitElement {
    static styles: import("lit").CSSResult;
    model: backend.DynamicNetwork | null;
    cost: number;
    trainingProgress: string;
    numCorrect: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    randomize(): void;
    evaluate(): void;
    learn(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'main-app': App;
    }
}
