function sumskills(id_contador){
    let valor = document.querySelector(id_contador);
    if (valor.value == '10'){
        //pass
    }else{
        valor.value = parseInt(valor.value) + 1;
    }
}
function subskills(id_contador){
    let valor = document.querySelector(id_contador);
    if (valor.value == '0'){
        //pass
    } else {
        valor.value = parseInt(valor.value) - 1;
    }
    
}
function sub(id, id_contador){
    var elem1 = document.querySelector(id).addEventListener('click', () => {
        subskills(id_contador);
    })
}
function sum(id, id_contador){
    var elem1 = document.querySelector(id).addEventListener('click', () => {
        sumskills(id_contador);
    })
}

sub('#ajuste1', '#contador1')
sum('#ajuste2', '#contador1')
sub('#ajuste3', '#contador2')
sum('#ajuste4', '#contador2')
sub('#ajuste5', '#contador3')
sum('#ajuste6', '#contador3')
sub('#ajuste7', '#contador4')
sum('#ajuste8', '#contador4')
sub('#ajuste9', '#contador5')
sum('#ajuste10', '#contador5')
