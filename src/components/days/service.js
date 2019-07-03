let now = Date.now,
    myArray = Array;

const INVALID_CALLBACK_EXCEPTION = "Callback is not a function";


export class serviceDays{
    constructor(){
        this.initDays();
    }

    initDays() {
        this._numMonthDays = null;
    }
    
    // callback que devuelve un array con el num de dias de items
    monthDays(callback) {
        if (typeof callback !== "function") {
            throw INVALID_CALLBACK_EXCEPTION;
        }
        
        // return el array
        this.myArraydays = callback(myArray.from(new myArray(this._getnumMonthDays()),(val,index)=>index+1));
    }
    // callback que devuelve un array con el num de dias de items
    monthDays(callback,move) {
        if (typeof callback !== "function") {
            throw INVALID_CALLBACK_EXCEPTION;
        }
        
        // return el array
        this.myArraydays = callback(myArray.from(new myArray(this.getnumMonthDays(move)),(val,index)=>index+1));
    }

    // callback que devuelve un array con el mes y año 
    monthYear(callback,move){
        if (typeof callback !== "function") {
            throw INVALID_CALLBACK_EXCEPTION;
        }

        // return el array
        this.myArraydays = callback(this.getMonthDays(move));

    } 

    getMonthDays(value){
        this._date = new Date(now()); // dia actual

        if(value){
            // todo
            switch (value) {
                case '1':
                    // incremento el num de mes [0-12]
                    this._month = this._date.getMonth() + 1; 
                    // si el mes es 12, reseteo a 0
                    this._month = this._month === 12 ? 0 : this._month;
                    
                    this._year = this._month === 12 ? this._date.getFullYear() + 1 : this._year; 
                    break
                case '0':
                    // decremento el num de mes [0-12]
                    this._month = this._date.getMonth() - 1;
                    // si el mes es 0, reseteo a 12
                    this._month = this._month === 0 ? 12 : this._month;

                    this._year = this._month === 0 ? this._date.getFullYear() - 1: this._year; 
                    break
            };
            

        }else{
            
            this._year = this._date.getFullYear(); // año actual
            this._month = this._date.getMonth(); // mes actual
        }

        return [this._month, this._year];

    }

    // calculo el mes y el año que se quiere dibujar, teniendo en cuenta si es el actual, el anterior o el siguiente
    getnumMonthDays(value){
        let monthYearArray = this.getMonthDays(value); // calculo el mes y el año solicitado

        // calculo el num de dias del mes que se quiere
        return this._numMonthDays = this._getDaysInMonth(monthYearArray[0],monthYearArray[1]);
        

    }


    // calcula el numero de dias de un mes de un año determinado
    _getDaysInMonth(month,year) {
        // Here January is 1 based
        //Day 0 is the last day in the previous month
        //return new Date(year, month, 0).getDate();
        // Here January is 0 based
        return new Date(year, month+1, 0).getDate();
    };

    dispose() {
        if (this._numMonthDays) {
            this.initDays();
        }
    }
}