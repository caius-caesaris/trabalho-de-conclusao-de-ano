const form = document.querySelector('form');
const email = document.querySelector('#input_email');
const password = document.querySelector('#input_password');
const errlabel = document.querySelector('p');

async function signIn(e) {
    e.preventDefault();

    const { error } = await database.auth.signInWithPassword({email: email.value, password: password.value});

    if (error) {
    errlabel.style.display = 'block';
        console.error(error.message);
        return;
    }
    
    console.log('login_feedback');
    window.location.href = 'html/main.html';
}

form.addEventListener('submit', signIn);