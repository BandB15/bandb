import { supabase } from './lib/supabase.js';

export const authState = {
  user: null,
  profile: null,
  session: null
};

export async function initAuth() {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (session) {
    authState.session = session;
    authState.user = session.user;
    await fetchProfile(session.user.id);
  }

  supabase.auth.onAuthStateChange(async (event, session) => {
    authState.session = session;
    authState.user = session?.user || null;
    
    if (session?.user) {
      await fetchProfile(session.user.id);
    } else {
      authState.profile = null;
    }
    
    // Dispatch custom event to trigger UI updates
    window.dispatchEvent(new CustomEvent('authStateChange', { detail: { event, session } }));
  });
}

async function fetchProfile(userId) {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
    
  if (data) {
    authState.profile = data;
  }
}

export async function signIn(email, password) {
  return await supabase.auth.signInWithPassword({ email, password });
}

export async function signUp(email, password, fullName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName
      }
    }
  });
  
  if (data?.user && !error) {
    // Attempt to create profile (should normally be handled by a Supabase trigger, but we'll do it manually here for simplicity if needed, 
    // or assume the trigger exists. Since we didn't write a trigger in 001_initial_schema.sql, we insert it manually here)
    await supabase.from('profiles').insert({
      id: data.user.id,
      full_name: fullName,
      email: email,
      role: 'customer'
    });
  }
  
  return { data, error };
}

export async function signOut() {
  return await supabase.auth.signOut();
}
