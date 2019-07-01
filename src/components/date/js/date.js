import { LitElement, html, css } from 'lit-element';

export class cjsDate extends LitElement {
    static get properties() {
      return { date: { type: Date } };
    }
    static get styles() {
        const mainColor = css`red`,
              mainPadding = css`20px`,

              fontSmall = css`200`,
              fontNormal = css`400`,
              fontBold = css`700`;

        return css`
            :host { 
                display: block;
                color: ${mainColor}; 
                padding: ${mainPadding};
                font-weight: ${fontBold};
            }
            :host([hidden]) {
                display: none;
            }
        `;
      } 
  
    constructor() {
        super();
        this.date = new Date();
    }

    render() {
      return html `<p>${this.getActualDate(this.date)}</p>`;
    }

    getActualDate(date){
        let day = date.getDay(),
        days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'],
        month = date.getMonth(),
        months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"],  
        actualDate = `${days[day]}, ${date.getDate()} de ${months[month]} de ${date.getFullYear()}`;
        
        return actualDate;
    }
  }
  
  customElements.define('cjs-date', cjsDate);