const cliente_sb = document.querySelector('#pesquisar_cliente');
const cliente_b = document.querySelector('#button_cliente');
const ordem_sb = document.querySelector('#pesquisar_ordem');
const ordem_b = document.querySelector('#button_ordem');

p();

function placeClients(data) {
    data.forEach(c => {
        console.log(c.nome);
    });
}

async function getClients() {
    if (cliente_sb.value === '') {
        const {data, error} = await database.from('cliente').select('*');

        if (error) {
            console.log(error);
            return;
        }

        placeClients(data);
    } else {
        const {data, error} = await database.from('cliente').select('*').ilike('nome', '%' + cliente_sb.value + '%');

        if (error) {
            console.log(error);
            return;
        }

        placeClients(data);
    }
}

cliente_b.addEventListener('click', getClients);