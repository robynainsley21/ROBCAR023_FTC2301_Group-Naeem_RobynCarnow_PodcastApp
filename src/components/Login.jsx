import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../supabaseClient";
import Home from "./Home";

export default function Login() {
  const [session, setSession] = useState(null);

  const [showLoginForm, setShowLoginForm] = useState(false); // Track whether to show the login form or not

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    //subscribe to authentication state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Function to handle successful login
  const handleLoginSuccess = (session) => {
    setSession(session);
    setShowLoginForm(false);
  };

  // Function to handle login errors
  const handleLoginError = (error) => {
    console.error("Login Error:", error);
    setShowLoginForm(false);
  };

  // Function to initiate the login process
  const initiateLogin = () => {
    setShowLoginForm(true);
  };

  // Function to cancel the login process
  const cancelLogin = () => {
    setShowLoginForm(false);
  };

  // If user is not logged in and not attempting to log in, show the login form
  if (!session && !showLoginForm) {
    return (
      <>
        <button onClick={initiateLogin}>Log in</button>{" "}
        {/* Add a button to initiate login */}
      </>
    );
  }

  // If the user is attempting to log in, show the Auth component
  if (showLoginForm) {
    return (
      <>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          view="sign_in"
          onlyThirdPartyProviders={false}
          onAuthSuccess={handleLoginSuccess} // Handle successful login
          onAuthError={handleLoginError} // Handle login errors
        />
        <button onClick={cancelLogin}>Cancel</button>{" "}
        {/* Add a button to cancel login */}
      </>
    );
  } else {
    return <Home />;

  }

  // If the user is logged in, redirect to the Home page

}
