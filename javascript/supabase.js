const config = {
        url: 'https://vtivntidbooxppfeqvfv.supabase.co',
        publishableKey: 'sb_publishable_ppZtNMuqQXHu786n86d6Lg_p2aRnmsC',
        email: '',
        password: ''
};

async function p() {
    const { data: { session }, error } = await database.auth.getSession();

    if (error || !session) {
        window.location.href = '../index.html';
        return;
    }

    return;
}

const { createClient } = supabase;
const database = createClient(config.url, config.publishableKey);