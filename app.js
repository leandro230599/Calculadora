const botonNumero = document.getElementsByName('dato-numero');
const botonOperador = document.getElementsByName('dato-operador');
const botonBorrado = document.getElementsByName("dato-borrado");
const botonIgual = document.getElementsByName('dato-igual')[0];
var resultado = document.getElementById('resultado');
var opeant = ' ';
var opeact = ' ';
var operacion = undefined;
document

botonNumero.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
})

botonOperador.forEach(function(boton){
    boton.addEventListener('click',function(){
        seleccionaOperacion (boton.innerText);
    })
})

botonIgual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
})

botonBorrado.forEach(function(boton){
    boton.addEventListener('click',function(){
        operacionBorrado(boton.innerText);
    })
})

function operacionBorrado(bo){
    switch(bo){
        case 'C':
            clear();
            actualizarDisplay();
            break;
        case 'CE':
            opeact = Math.trunc(opeact/10);
            actualizarDisplay();
            break;
        default:
            return;
    }
}

function seleccionaOperacion (op){
    if (opeact == ' ' ) return;
    if (opeant != ' ') {
        calcular()
    }
    operacion = op.toString();
    opeant = opeact;
    opeact =  ' ';
}

function calcular (){
    var calculo;
    const anterior = parseFloat(opeant);
    const actual = parseFloat(opeact);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        case '^':
            calculo = Math.pow(anterior, actual);
            break;
        case '√':
            calculo = Math.round(Math.pow(anterior, (1/actual)));
            break;
        case 'IPM':
            calculo = anterior + Math.trunc(anterior * ((actual/100)*(30/365)));
            break;
        default:
            return;
    }
    opeact=calculo;
    console.log(calculo);
    operacion=undefined;
    opeant= ' ';
}

function agregarNumero(numero){
    opeact = opeact.toString() +  numero.toString();
    actualizarDisplay();
}

function actualizarDisplay (){
    resultado.value = opeact;
}

function clear(){
    opeact = ' ';
    opeant = ' ';
    operacion = undefined;
}

clear(); 