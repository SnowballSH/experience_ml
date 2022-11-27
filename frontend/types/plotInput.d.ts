import { LitElement, PropertyValues } from 'lit';
import 'wired-elements';
import { RoughCanvas } from "roughjs/bin/canvas";
export declare class PlotInput extends LitElement {
    static styles: import("lit").CSSResult;
    id: string;
    width: number;
    height: number;
    pen: number;
    inputs: number[][];
    outputs: number[][];
    canvas: HTMLCanvasElement | null;
    roughCanvas: RoughCanvas | null;
    realCanvas: HTMLCanvasElement | null;
    getMousePos(e: MouseEvent): {
        x: number;
        y: number;
    };
    onMouseDown(e: MouseEvent): void;
    updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    choosePen(pen: number): void;
    clearCanvas(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'plot-input': PlotInput;
    }
}
