import { LitElement, html } from "lit-element";
export const move = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}
export class cjsMove extends LitElement {

    render() {
        return html`<div>${this._action}</div>`;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    setAttribute(action) {
        this._action = action;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'action':
                switch (newValue) {
                    case move.INCREMENT:
                        this._action = '+';
                        break
                    case move.DECREMENT:
                        this._action = '-';
                        break
                }
                break;
        }
    }

    static get observedAttributes() {
        return ['action'];
    }
}
customElements.define('cjs-move', cjsMove);