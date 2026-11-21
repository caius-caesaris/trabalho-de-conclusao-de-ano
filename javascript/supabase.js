const config = {
        url: 'https://vtivntidbooxppfeqvfv.supabase.co',
        publishableKey: 'sb_publishable_ppZtNMuqQXHu786n86d6Lg_p2aRnmsC',
        email: '',
        password: ''
};

const { createClient } = supabase;
const database = createClient(config.url, config.publishableKey);