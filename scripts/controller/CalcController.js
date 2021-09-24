class CalcController {
    constructor() {
        this._displayCalc = "0";
        this._dataAtual = Date.now();
    };

    get displayCalc() {
        return this._displayCalc;
    };

    set displayCalc(valor) {
        this._displayCalc = valor;
    };

    get dataAtual() {
        return this._dataAtual.toLocaleString();
    };

    set dataAtual(valor) {
        this._dataAtual = valor;
    };
};