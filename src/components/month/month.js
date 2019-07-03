/**
 * Para crear este componente se calcula el mes y año actual y se pinta en el DOM
 * 
 * Cuando las flechas 'move' se pulsen, deben llamar al metodo 
 * 'this.getMonthYear(const);' pasando la constante 'move.DECREMENT' o 'move.INCREMENT'.
 * Esto devuelve un array con el mes anterior o posterior, y su año correspondiente
 * 
 */

let now = Date.now;

import { LitElement, html, css } from 'lit-element';
import { serviceDays } from "../days/service";

export const move = {
    INCREMENT: '1',
    DECREMENT: '0'
}

export class cjsMonth extends LitElement{
    static get properties() {
        return {
            month: { type: String },
            year: { type: String },
            myArraydays: { type: Array }
        };
    }

    constructor() {
        super();
        this._serviceDays = new serviceDays();

        this._date = new Date(now()); // dia actual

        this._year = this._date.getFullYear(); // año actual
        this._month = this._date.getMonth(); // mes actual
        this._months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];  

        
    }

    render(){
        return html
        `
        <div class="container">
           <p>${this._months[this._month]} de ${this._year}</p>
        </div>`;
    }

    connectedCallback() {
        super.connectedCallback();
        // metodo para comprobar que funcionaria el metodo que se tiene que suscribir a redux,
        // BORRAR CUANDO SE LLAME A REDUX
        //this.getMonthYear(move.DECREMENT);
    }

    //metodo que se tiene que suscribir a redux, para pasarle el parametro move
    getMonthYear(move){
        this._serviceDays.monthYear((myArraydays) => { 
            this.myArraydays = myArraydays;
            this._month = this.myArraydays[0];
            this._year = this.myArraydays[1];
        },move);
    }
    disconnectedCallback() {
        this._serviceDate.dispose();
        super.disconnectedCallback();
    }

}
customElements.define('cjs-month', cjsMonth);