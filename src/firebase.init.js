import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.envREACT_APP_apiKey,
  authDomain: process.envREACT_APP_authDomain,
  projectId: process.envREACT_APP_projectId,
  storageBucket: process.envREACT_APP_storageBucket,
  messagingSenderId: process.envREACT_APP_messagingSenderId,
  appId: process.envREACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
export default app;
