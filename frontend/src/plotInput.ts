import {css, html, LitElement, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import 'wired-elements';
import rough from 'roughjs';
import {RoughCanvas} from "roughjs/bin/canvas";

const radius = 8;

@customElement('plot-input')
export class PlotInput extends LitElement {
    @property({type: String})
    id: string = "1";

    @property({type: Number})
    width: number = 800;

    @property({type: Number})
    height: number = 600;

    @property({type: Number})
    pen: number = 0;

    inputs: number[][] = [];
    outputs: number[] = [];

    canvas: HTMLCanvasElement | null = null;
    roughCanvas: RoughCanvas | null = null;

    getMousePos(e: MouseEvent) {
        const rect = this.canvas!.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }

    onMouseDown(e: MouseEvent) {
        const pos = this.getMousePos(e);
        if (pos.x > 0 && pos.y > 0) {
            switch (this.pen) {
                case 0:
                    this.roughCanvas!.circle(pos.x, pos.y, radius * 2, {fill: '#fc3636', roughness: 1.3});
                    break;
                case 1:
                    this.roughCanvas!.rectangle(pos.x - radius, pos.y - radius, radius * 2, radius * 2, {
                        fill: '#4579fb',
                        roughness: 1.5,
                        fillStyle: 'cross-hatch'
                    });
                    break;
                case 2:
                    this.roughCanvas!.circle(pos.x, pos.y, radius * 2, {
                        fill: '#48fb45',
                        roughness: 3.0,
                        fillStyle: 'zigzag',
                    });
                    break;
            }

            this.inputs.push([pos.x, pos.y]);
            this.outputs.push(this.pen);
        }
    }

    updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);

        if (this.canvas === null) {
            this.canvas = this.shadowRoot!.getElementById(`plot-input-canvas-${this.id}`) as HTMLCanvasElement;
            this.roughCanvas = rough.canvas(this.canvas);
        }
    }

    connectedCallback() {
        super.connectedCallback();

        window.addEventListener('mousedown', this.onMouseDown.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        window.removeEventListener('mousedown', this.onMouseDown.bind(this));
    }

    choosePen(pen: number) {
        this.pen = pen;
    }

    clearCanvas() {
        this.canvas!.getContext("2d")!.clearRect(0, 0, this.width, this.height);
        this.choosePen(0);

        this.inputs = [];
        this.outputs = [];
    }

    render() {
        return html`
            <div>
                <wired-button @click=${() => this.choosePen(0)} class="plot-input-button-red" style=${this.pen === 0 ? "transform: translateY(4px)" : ""}>Red</wired-button>
                <wired-button @click=${() => this.choosePen(1)} class="plot-input-button-blue" style=${this.pen === 1 ? "transform: translateY(4px)" : ""}>Blue</wired-button>
                <wired-button @click=${() => this.choosePen(2)} class="plot-input-button-green" style=${this.pen === 2 ? "transform: translateY(4px)" : ""}>Green</wired-button>
                <wired-button @click=${this.clearCanvas} class="plot-input-button-clear">Clear</wired-button>
                <br/>
                <br/>
                <canvas class="plot-input-canvas" id="plot-input-canvas-${this.id}" width="${this.width}"
                        height="${this.height}"></canvas>
            </div>
        `;
    }

    static styles = css`
        .plot-input-canvas {
            border: 1px solid black;
            background-color: #fafafa;
        }
        
        .plot-input-button-red {
            background-color: #ff5959;
        }
        
        .plot-input-button-blue {
            background-color: #59d8ff;
        }
        
        .plot-input-button-green {
            background-color: #59ff7d;
        }
        
        .plot-input-button-clear {
            background-color: whitesmoke;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'plot-input': PlotInput;
    }
}