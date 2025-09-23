import { auth } from "@/lib/firebase.ts";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendEmailVerification,
    updateProfile
} from "firebase/auth";
import type { User } from "firebase/auth";
import { FirebaseError } from "firebase/app";

type AuthResult =
    | { user: User; error?: undefined; code?: undefined }
    | { error: string; code?: string; user?: undefined };

export async function register(email: string, password: string, name?: string): Promise<AuthResult> {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if (name) await updateProfile(user, { displayName: name });
        await sendEmailVerification(user);
        return { user };
    } catch (error) {
        if (error instanceof FirebaseError) {
            return { error: error.message, code: error.code };
        }
        return { error: "Error desconocido", code: "unknown" };
    }
}

export async function login(email: string, password: string): Promise<AuthResult> {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { user: userCredential.user };
    } catch (error) {
        if (error instanceof FirebaseError) {
            return { error: error.message, code: error.code };
        }
        return { error: "Error desconocido" , code: "Unknown" };
    }
}

export async function logout() {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        if (error instanceof FirebaseError) {
            return { error: error.message, code: error.code };
        }
        return { error: "Error desconocido", code: "unknown" };
    }
}

export function onAuthStateChange(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}


