let now = Date.now;
const INVALID_CALLBACK_EXCEPTION = "Callback is not a function";

export class serviceDate{
    constructor(){
        this._date = new Date();
        this.initDate();
    }

    initDate() {
        this._date = null;
    }

    actualDate(callback) {
        if (typeof callback !== "function") {
            throw INVALID_CALLBACK_EXCEPTION;
        }
        this._date = callback(this._getActualDate(new Date(now())));
    }

    _getActualDate(date){
        let day = date.getDay(),
        days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'],
        month = date.getMonth(),
        months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"],  
        actualDate = `${days[day]}, ${date.getDate()} de ${months[month]} de ${date.getFullYear()}`;
        
        return actualDate;
    }

    dispose() {
        if (this._date) {
            this.initDate();
        }
    }
}