const cliente_sb = document.querySelector('#pesquisar_cliente');
const ordem_sb = document.querySelector('#pesquisar_ordem');

p();

async function getClients() {
    const {data, error} = await database.from('cliente').select('*');

    if (error) {
        console.log(error);
        return;
    }

    console.log(data);
}

getClients();