import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, Timestamp, serverTimestamp } from "firebase/firestore";

import { useEffect } from "react";
import Login from "./login";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  //before showing the entire app tell the user to log in
  const [user, loading] = useAuthState(auth); //listening if there is a user already logIn or no user logIn
  useEffect(() => {
    if (user) {
      // Add a new single document in collection "users"
      const userRef = doc(db, `users/${user.uid}`);
      setDoc(
        userRef,
        {
          name: user.displayName,
          lastSeen: serverTimestamp(),
          photoURl: user.photoURL,
          email: user.email,
        },
        { merge: true }
      );
    }
  }, [user]);
  if (loading) return <Loading />;
  if (!user) {
    return <Login />;
  }

  //entire app

  return <Component {...pageProps} />;
}

export default MyApp;
