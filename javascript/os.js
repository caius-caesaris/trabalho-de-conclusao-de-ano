const client_select = document.querySelector('#client_selection');
const tech_select = document.querySelector('#tech_selection');
const trade_select = document.querySelector('#trade_selection');
const dev_select = document.querySelector('#dev_selection');
const modelo_input = document.querySelector('#modelo');
const sintoma_input = document.querySelector('#sintoma');
const retirada_input = document.querySelector('#retirada');

const edit_client_select = document.querySelector('#edit_client_selection');
const edit_tech_select = document.querySelector('#edit_tech_selection');
const edit_trade_select = document.querySelector('#edit_trade_selection');
const edit_dev_select = document.querySelector('#edit_dev_selection');
const edit_modelo_input = document.querySelector('#edit_modelo');
const edit_sintoma_input = document.querySelector('#edit_sintoma');
const edit_defeito_input = document.querySelector('#edit_defeito');
const edit_orcamento_input = document.querySelector('#edit_orcamento');
const edit_retirada_input = document.querySelector('#edit_retirada');
const edit_entrega_input = document.querySelector('#edit_entrega');

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

    const {error} = await database.from('ordem').insert({cliente: client_select.value, tecnico: tech_select.value, marca: trade_select.value, aparelho: dev_select.value, modelo: modelo_input.value, sintoma: sintoma_input.value}).select();

    if (error) {
        console.log(error);
        document.querySelector('#submit_create').textContent = 'Ocorreu um erro';
        return;
    }

    const { data, error_select } = await database.from('ordem').select('*');

    if (error_select) {
        console.log(error_select);
        return;
    }

    modelo_input.value = '';
    sintoma_input.value = '';

    document.querySelector('#submit_create').textContent = 'Criado! Nº' + data.length ;
}

form_criar.addEventListener('submit', createOS);

function setTextContent() {
    document.querySelector('#submit_create').textContent = 'Criar';
}

document.querySelector('#submit_create').addEventListener('blur', setTextContent);

async function loadOS() {
    const {data: ordem, error} = await database.from('ordem').select('*').eq('numero', document.querySelector('#numero_da_ordem').value).single();
    
    if (error) {
        console.log(error);
        return;
    }

    const {data: cliente} = await database.from('cliente').select('*').eq('id', ordem.cliente).single();
    const {data: tecnico} = await database.from('tecnico').select('*').eq('cpf', ordem.tecnico).single();
    const {data: marca} = await database.from('marca').select('*').eq('id', ordem.marca).single();
    const {data: aparelho} = await database.from('aparelho').select('*').eq('id', ordem.aparelho).single();

    edit_client_select.innerHTML = `<option>${cliente.nome}</option>`
    edit_tech_select.innerHTML = `<option>${tecnico.nome}</option>`
    edit_trade_select.innerHTML = `<option>${marca.nome}</option>`
    edit_dev_select.innerHTML = `<option>${aparelho.nome}</option>`
    edit_modelo_input.value = ordem.modelo;
    edit_sintoma_input.value = ordem.sintoma;
    edit_defeito_input.value = ordem.defeito;
    edit_orcamento_input.value = ordem.orcamento;
    edit_retirada_input.valueAsDate = new Date(ordem.data_retirada);
    if (ordem.data_entrega) {
        edit_entrega_input.valueAsDate = new Date(ordem.data_entrega);
    }
}

document.querySelector('#numero_da_ordem').addEventListener('blur', loadOS);