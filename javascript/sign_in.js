const form = document.querySelector('#form');
const email = document.querySelector('#input_email');
const password = document.querySelector('#input_password');

async function entrar() {
    const { error } = await database.auth.signInWithPassword({email: config.email, password: config.password});

    if (error) {
        console.error(error.message);
        return;
    }
    
    console.log('login_feedback');
}

async function efetuar(e) {
    e.preventDefault();

    config.email = email.value;
    config.password = password.value;

    await entrar();
}

form.addEventListener('submit', efetuar);