class CalcController {
    constructor() {
        this._displayCalc = "0";
        this._currentDate = Date.now();
        this.initialize();
    };

    initialize() {
        let displayCalEl= document.querySelector("#display");
        let dateEl= document.querySelector("#data");
        let timeEl= document.querySelector("#hora");

        displayCalEl.innerHTML = "4567"
        dateEl.innerHTML = "26/09/2021"
        timeEl.innerHTML = "16:06"
    };

    get displayCalc() {
        return this._displayCalc;
    };

    set displayCalc(value) {
        this._displayCalc = value;
    };

    get dataAtual() {
        return this._currentDate.toLocaleString();
    };

    set dataAtual(value) {
        this._currentDate = value;
    };
};