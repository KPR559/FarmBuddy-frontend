import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import app from './firebase';

const auth = getAuth(app);

export const registerUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const sendVerificationEmail = async () => {
  if (auth.currentUser) {
    return sendEmailVerification(auth.currentUser);
  }
};

export const sendResetPasswordEmail = async (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const isEmailVerified = () => {
  return auth.currentUser ? auth.currentUser.emailVerified : false;
};

export const loginUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => signOut(auth);
