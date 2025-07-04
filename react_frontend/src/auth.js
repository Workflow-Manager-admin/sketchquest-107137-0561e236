/**
 * Public utility to sign in anonymously with Firebase Auth and set a username in local storage.
 * This should be used at login flow.
 */
import { signInAnonymously, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

// PUBLIC_INTERFACE
export async function signInWithUsername(username) {
  /**
   * Signs in the user anonymously, then stores the username locally for app-level identification.
   * Returns { user, username }.
   */
  const result = await signInAnonymously(auth);
  // Optionally store username in localStorage/session, as Firebase anonymous user does not store a displayName
  localStorage.setItem("username", username);
  return { user: result.user, username };
}

// PUBLIC_INTERFACE
export function getCurrentUsername() {
  /**
   * Retrieves the locally stored username for the current session.
   */
  return localStorage.getItem("username");
}

// PUBLIC_INTERFACE
export function listenToAuthState(callback) {
  /**
   * Registers a callback for changes to Firebase Auth state.
   * callback(user) is passed the firebase.User or null.
   */
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
