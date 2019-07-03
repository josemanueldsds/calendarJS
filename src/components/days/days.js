import { LitElement, html, css } from 'lit-element';
import { serviceDays } from "./service";

export const move = {
    INCREMENT: '1',
    DECREMENT: '0'
}

export class cjsDays extends LitElement{
    static get properties() {
        return {
            myArraydays: { type: Array }
        };
    }

    constructor() {
        super();
            this._serviceDays = new serviceDays();
        }

    render() {
        return html
        `
        <style>
            .container {
                display: flex; 
                border: solid 1px grey;
                /*-webkit-flex-wrap: wrap;
                flex-wrap: wrap;*/
            } 
            .item {
                border: solid 1px grey;
                flex-grow: 1;
                width: 100%;
                text-align: center;
                cursor: pointer;
            }
            .item:hover{
                background-color: grey;
                color: white;
            }
            
        </style>
        
        <div class="container">
            ${this.myArraydays.map(i => html`<div class="item">${i}</div>`)}
        </div>`;
    }
    
    connectedCallback() {
        super.connectedCallback();
        // metodo que se llama al principio
        this._serviceDays.monthDays((myArraydays) => { 
            this.myArraydays = myArraydays;
        });

        // metodo para comprobar que funcionaria el metodo que se tiene que suscribir a redux,
        // BORRAR CUANDO SE LLAME A REDUX
        //this.getMonthNumDays(move.DECREMENT);
    }

    //metodo que se tiene que suscribir a redux, para pasarle el parametro move
    getMonthNumDays(move){
        this._serviceDays.monthDays((myArraydays) => { 
            this.myArraydays = myArraydays;
        },move);
    }

    disconnectedCallback() {
        this._serviceDate.dispose();
        super.disconnectedCallback();
    }


}
customElements.define('cjs-days', cjsDays);