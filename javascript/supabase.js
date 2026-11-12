const { createClient } = supabase;
const database = createClient(config.url, config.publishableKey);

async function entrar() {
    const { data, error } =
        await database.auth.signInWithPassword({
            email: config.email,
            password: config.senha
        });

    if (error) {
        console.log(error.message);
        return;
    } else {
        return data;
    }
    // console.log(data.user.email);
}

entrar();