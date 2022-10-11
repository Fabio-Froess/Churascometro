// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + de 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
//Aimpim - 150 gm por pessoa + de 6h 300gm
//Frango - 200 gm por pessoa + de 6h 400gm
//Calabresa - 250 gm por pessoa + de 6h 500gm

//Crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnepp(duracao) * adultos + (carnepp(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejapp(duracao) * adultos;
    let qdtTotalBebidas = bebidaspp(duracao) * adultos + (bebidaspp(duracao) / 2 * criancas);
    let qtTotalAimpim = aimpipp (duracao) * adultos + (aimpipp(duracao) / 2 * criancas);
    let qdtTotalFrango = frangopp (duracao) * adultos + (frangopp(duracao) / 2 * criancas);
    let qdtTotalCalabresa = calabresapp (duracao) * adultos + (calabresapp(duracao) / 2 * criancas);

    resultado.innerHTML = `<h2> TOTAL DE COISAS NECESSÁRIAS:</H2>`
    resultado.innerHTML += `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2l de Refrigerante</p>`
    resultado.innerHTML += `<p>${qtTotalAimpim / 1000} Kg de Aimpim</p>`
    resultado.innerHTML += `<p>${qdtTotalFrango / 1000} Kg de Frango</p>`
    resultado.innerHTML += `<p>${qdtTotalCalabresa / 1000} Kg de Calabresa</p>`
}

function carnepp(duracao){
    if(duracao >= 6){
        return 650;
    } else{
        return 400;
    }
}

function cervejapp(duracao){
    if(duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidaspp(duracao){
    if(duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}

function aimpipp (duracao){
    if(duracao >= 6){
        return 300;
    }else{
        return 150;
    }
}

function frangopp (duracao){
    if(duracao >= 6){
        return 400;
    }else{
        return 200;
    }
}

function calabresapp (duracao){
    if(duracao >= 6){
        return 500;
    }else{
        return 250;
    }
}