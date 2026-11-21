const form = document.querySelector('#form');
const email = document.querySelector('#input_email');
const password = document.querySelector('#input_password');
let data;

async function entrar() {
    const { data, error } = await database.auth.signInWithPassword({email: config.email, password: config.password});

    if (error) {
        console.error(error.message);
        return;
    } else {
        console.log('login_feedback');
        return data;
    }
}

async function efetuar(e) {
    e.preventDefault();

    config.email = email.value;
    config.password = password.value;

    data = await entrar();
}

form.addEventListener('submit', efetuar);