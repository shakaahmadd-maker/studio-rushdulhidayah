'use client';

import { initializeFirebase } from '.';
import { FirebaseProvider } from './provider';

let app: any = null;
if (typeof window !== 'undefined') {
  app = initializeFirebase();
}

export default function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FirebaseProvider {...app}>{children}</FirebaseProvider>;
}
