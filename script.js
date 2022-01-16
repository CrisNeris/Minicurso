const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

const imagem1 = document.querySelector('#img1');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#status1');

const imagem2 = document.querySelector('#img2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#status2');

pegarTodos = () => {

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
        let numeroAleatorio = gerarValorAletorio();
        return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
            method:'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json'
            }
        }).then((response) => response.json()).then((data) => {
            imagem.src = data.image;
            imagem.alt = data.name;
            nomeDoPersonagem.innerHTML = data.name;
            especie.innerHTML = data.species;
            condicao.innerHTML = traduzirCondicao(data);
        });
    }


pegarPersonagem1 = () => {
    let numeroAleatorio1 = gerarValorAletorio1();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio1}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response1) => response1.json()).then((data1) => {
        imagem1.src = data1.image;
        imagem1.alt = data1.name;
        nomeDoPersonagem1.innerHTML = data1.name;
        especie1.innerHTML = data1.species;
        condicao1.innerHTML = traduzirCondicao1(data1);
    });
}

traduzirCondicao1 = (data1) => {
    if(data1.status1 == 'unknown'){
        return 'Não sabemos';
    }else if(data1.status1 == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio1 = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem2 = () => {
    let numeroAleatorio2 = gerarValorAletorio2();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio2}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response2) => response2.json()).then((data2) => {
        imagem2.src = data2.image;
        imagem2.alt = data2.name;
        nomeDoPersonagem2.innerHTML = data2.name;
        especie2.innerHTML = data2.species;
        condicao2.innerHTML = traduzirCondicao2(data2);
    });
}

traduzirCondicao2 = (data2) => {
    if(data2.status2 == 'unknown'){
        return 'Não sabemos';
    }else if(data2.status2 == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio2 = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem();
pegarPersonagem1();
pegarPersonagem2();
}

botao.onclick = pegarTodos;








