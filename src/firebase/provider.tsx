'use client';

import { createContext, useContext } from 'react';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage } from 'firebase/storage';

type Firebase = {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
  storage: FirebaseStorage | null;
};

const FirebaseContext = createContext<Firebase>({
  firebaseApp: null,
  auth: null,
  firestore: null,
  storage: null,
});

export const useFirebase = () => useContext(FirebaseContext);
export const useFirebaseApp = () => useContext(FirebaseContext)?.firebaseApp;
export const useAuth = () => useContext(FirebaseContext)?.auth;
export const useFirestore = () => useContext(FirebaseContext)?.firestore;
export const useStorage = () => useContext(FirebaseContext)?.storage;

export function FirebaseProvider({
  children,
  firebaseApp,
  auth,
  firestore,
  storage,
}: {
  children: React.ReactNode;
  firebaseApp?: FirebaseApp | null;
  auth?: Auth | null;
  firestore?: Firestore | null;
  storage?: FirebaseStorage | null;
}) {
  return (
    <FirebaseContext.Provider value={{ 
      firebaseApp: firebaseApp || null, 
      auth: auth || null, 
      firestore: firestore || null, 
      storage: storage || null 
    }}>
      {children}
    </FirebaseContext.Provider>
  );
}
