// var
const form = document.querySelector('#form');

const config = {
        url: 'https://vtivntidbooxppfeqvfv.supabase.co',
        publishableKey: 'sb_publishable_ppZtNMuqQXHu786n86d6Lg_p2aRnmsC',
        email: '',
        senha: ''
};

// functions
async function entrar() {
    const { createClient } = supabase;
    const database = createClient(config.url, config.publishableKey);

    const { data, error } =
        await database.auth.signInWithPassword({
            email: config.email,
            password: config.password
        });

    if (error) {
        console.log(error.message);
        return;
    } else {
        console.log('login efetuado');
        return data;
    }
    // resolver isso porque tá dando bad request e blah blah blah e dá invalid credentials
}

async function efetuar(e) {
    e.preventDefault();

    config.email = document.querySelector('#input_email').value;
    config.password = document.querySelector('#input_password').value;

    await entrar();
    // usar o local storage para entrar na outra página o token, sla, blah, blah, blah

}

// events
form.addEventListener('submit', efetuar);