const { createClient } = supabase;
const database = createClient(config.url, config.publishableKey);