/**
 * Para crear este componente se llama a this.getMonthNumDays();
 * de la clase serviceDays. Esto devuelve un array con el numero de dias del mes actual
 * 
 * Cuando las flechas 'move' se pulsen, deben llamar al metodo 
 * this.getMonthNumDays(const); pasando la constante 'move.DECREMENT' o 'move.INCREMENT'.
 * Esto devuelve un array con el numero de dias del mes anterior o posterior
 * 
 * Para que se seleccione un dia en el calendario, hay que añadirle al <item> la clase .is-selected 
 */
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
                padding: 0;
                margin: 0;
                list-style: none;
                display: -webkit-box;
                display: -moz-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-flex-flow: row wrap;
                width: 200px;
                height: 200px;
            } 
            .item {

                border: solid 1px #d2d2d2;
                flex-grow: 0;
                width: 100%;
                text-align: center;
                cursor: pointer;
                padding: 5px;
                width: 10%;
                height: 10%;
                line-height: 20px;
                font-weight: bold;
                text-align: center;
            }
            .item:hover{
                background-color: #d2d2d2;
                color: white;
            }
            .item.is-selected{
                background-color: grey;
                color: white;
            }
            
        </style>
        
        <ul class="container">
            ${this.myArraydays.map(i => html`<li data-day=${i} class="item">${i}</li>`)}
        </ul>`;
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