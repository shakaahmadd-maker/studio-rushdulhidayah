import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { firebaseConfig } from './config';
import { FirebaseProvider, useFirebase, useFirebaseApp, useAuth, useFirestore, useStorage } from './provider';
import FirebaseClientProvider from './client-provider';
import { useUser } from './auth/use-user';
import { useCollection } from './firestore/use-collection';
import { useDoc } from './firestore/use-doc';

export function initializeFirebase(): {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
  storage: FirebaseStorage | null;
} {
  try {
    if (!firebaseConfig.apiKey && !firebaseConfig.projectId) {
      return { firebaseApp: null, auth: null, firestore: null, storage: null };
    }
    const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    const storage = getStorage(firebaseApp);
    return { firebaseApp, auth, firestore, storage };
  } catch (err) {
    console.warn('[AI Studio] Firebase init warning:', err);
    return { firebaseApp: null, auth: null, firestore: null, storage: null };
  }
}

export {
  FirebaseProvider,
  FirebaseClientProvider,
  useFirebase,
  useFirebaseApp,
  useAuth,
  useFirestore,
  useStorage,
  useUser,
  useCollection,
  useDoc,
};
