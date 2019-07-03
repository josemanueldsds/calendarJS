import { LitElement, html, css } from 'lit-element';
import { serviceDate } from "../service/service";

export class cjsDate extends LitElement {
    static get properties() {
      return { date: { type: Date } };
    }
    static get styles() {
        const mainColor = css`red`,

              fontSmall = css`200`,
              fontNormal = css`400`,
              fontBold = css`700`;

        return css`
            :host { 
                display: block;
                color: ${mainColor}; 
                font-weight: ${fontBold};
            }
            :host([hidden]) {
                display: none;
            }
        `;
      } 
  
    constructor() {
        super();
        this._serviceDate = new serviceDate();
    }

    render() {
        return html`${this.dateTemplate}`;
    }

    get dateTemplate() {
        return html`<p>${this.date}</p>`;
    }

    connectedCallback() {
        super.connectedCallback();
        this._serviceDate.actualDate((date) => { 
            this.date = date;
        });
    }

    disconnectedCallback() {
        this._serviceDate.dispose();
        super.disconnectedCallback();
    }

    
  }
  
  customElements.define('cjs-date', cjsDate);