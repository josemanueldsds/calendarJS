import { LitElement, html } from "lit-element";
import { ServiceTimer } from "../service/service";

const INTERVAL_TIME = 1000;

export class Timer extends LitElement {

    static get properties() {
        return {
            timestamp: { type: String }
        }
    }

    constructor() {
        super();
        this._serviceTimer = new ServiceTimer(INTERVAL_TIME);
    }

    render() {
        return html`${this.timerTemplate}`;
    }

    get timerTemplate() {
        return html`<div>${this.timestamp}</div>`;
    }

    connectedCallback() {
        super.connectedCallback();
        this._serviceTimer.startTimer((time) => { 
            this.timestamp = time;
        });
    }

    disconnectedCallback() {
        this._serviceTimer.dispose();
        super.disconnectedCallback();
    }
}

customElements.define('cjs-timer', Timer)