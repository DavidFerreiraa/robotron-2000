function sumskills(classe_ajuste, classe_contador){
    let valor = document.querySelector(classe_contador);
    const pressedbutton = document.querySelector(classe_ajuste).innerHTML;
    if (valor.value = 10){
        //pass
    }else{
        valor.value = parseInt(valor.value) + 1;
    }
}
function subskills(classe_ajuste, classe_contador){
    let valor = document.querySelector(classe_contador);
    const pressedbutton = document.querySelector(classe_ajuste).innerHTML;
    if (valor.value = 0){
        //pass
    } else {
        valor.value = parseInt(valor.value) - 1;
    }
    
}
var elem1 = document.querySelector('.controle-ajuste-1').addEventListener('click', () => {
    classe_ajuste = '.controle-ajuste-1'
    classe_contador = '.controle-contador-1'
    subskills(classe_ajuste, classe_contador);
})
var elem1 = document.querySelector('.controle-ajuste-2').addEventListener('click', () => {
    classe_ajuste = '.controle-ajuste-2'
    classe_contador = '.controle-contador-1'
    sumskills(classe_ajuste, classe_contador);
})
var elem1 = document.querySelector('.controle-ajuste-3').addEventListener('click', () => {
    classe_ajuste = '.controle-ajuste-3'
    classe_contador = '.controle-contador-2'
    subskills(classe_ajuste, classe_contador);
})
var elem1 = document.querySelector('.controle-ajuste-4').addEventListener('click', () => {
    classe_ajuste = '.controle-ajuste-4'
    classe_contador = '.controle-contador-2'
    sumskills(classe_ajuste, classe_contador);
})
var elem1 = document.querySelector('.controle-ajuste-5').addEventListener('click', () => {
    classe_ajuste = '.controle-ajuste-5'
    classe_contador = '.controle-contador-3'
    subskills(classe_ajuste, classe_contador);
})
var elem1 = document.querySelector('.controle-ajuste-6').addEventListener('click', () => {
    classe_ajuste = '.controle-ajuste-6'
    classe_contador = '.controle-contador-3'
    sumskills(classe_ajuste, classe_contador);
})
var elem1 = document.querySelector('.controle-ajuste-7').addEventListener('click', () => {
    classe_ajuste = '.controle-ajuste-7'
    classe_contador = '.controle-contador-4'
    subskills(classe_ajuste, classe_contador);
})
var elem1 = document.querySelector('.controle-ajuste-8').addEventListener('click', () => {
    classe_ajuste = '.controle-ajuste-8'
    classe_contador = '.controle-contador-4'
    sumskills(classe_ajuste, classe_contador);
})
var elem1 = document.querySelector('.controle-ajuste-9').addEventListener('click', () => {
    classe_ajuste = '.controle-ajuste-9'
    classe_contador = '.controle-contador-5'
    subskills(classe_ajuste, classe_contador);
})
var elem1 = document.querySelector('.controle-ajuste-10').addEventListener('click', () => {
    classe_ajuste = '.controle-ajuste-10'
    classe_contador = '.controle-contador-5'
    sumskills(classe_ajuste, classe_contador);
})

/* function catchclass(element){
    classe = element.getAttribute("class");
    return classe;
} */
