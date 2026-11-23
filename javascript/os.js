const client_select = document.querySelector('#client_selection');
const tech_select = document.querySelector('#tech_selection');
const trade_select = document.querySelector('#trade_selection');
const dev_select = document.querySelector('#dev_selection');
const modelo_input = document.querySelector('#modelo');
const sintoma_input = document.querySelector('#sintoma');
const retirada_input = document.querySelector('#retirada');

const form_criar = document.querySelector('#criar_ordem');
const form_editar = document.querySelector('#editar_ordem');

p();

async function getClients() {
    const {data, error} = await database.from('cliente').select('*');

    if (error) {
        console.log(error);
        return;
    }

    data.forEach(element => {
        client_select.innerHTML = client_select.innerHTML + `<option value='${element.id}'>${element.nome}</option>`
    });
}

getClients();

async function getTechs() {
    const {data, error} = await database.from('tecnico').select('*');

    if (error) {
        console.log(error);
        return;
    }

    data.forEach(element => {
        tech_select.innerHTML = tech_select.innerHTML + `<option value='${element.cpf}'>${element.nome}</option>`
    });
}

getTechs();

async function getTrades() {
    const {data, error} = await database.from('marca').select('*');

    if (error) {
        console.log(error);
        return;
    }

    data.forEach(element => {
        trade_select.innerHTML = trade_select.innerHTML + `<option value='${element.id}'>${element.nome}</option>`
    });
}

getTrades();

async function getDevs() {
    const {data, error} = await database.from('aparelho').select('*');

    if (error) {
        console.log(error);
        return;
    }

    data.forEach(element => {
        dev_select.innerHTML = dev_select.innerHTML + `<option value='${element.id}'>${element.nome}</option>`
    });
}

getDevs();

retirada_input.valueAsDate = new Date();

async function createOS(e) {
    e.preventDefault();

    const {error} = await database.from('ordem').insert({cliente: 1, tecnico: 12345678901, marca: 1, aparelho: 1, modelo: '5392B', sintoma: 'sem'}).select();

    if (error) {
        console.log(error);
        document.querySelector('#submit_create').textContent = 'Ocorreu um erro';
        return;
    }

    document.querySelector('#submit_create').textContent = 'Criado!';
}

form_criar.addEventListener('submit', createOS);

function setTextContent() {
    document.querySelector('#submit_create').textContent = 'Criar';
}

document.querySelector('#submit_create').addEventListener('blur', setTextContent);

async function getOS() {
    
}