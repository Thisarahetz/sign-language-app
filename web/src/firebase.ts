import { initializeApp } from 'firebase/app';
import { getToken, getMessaging, onMessage } from 'firebase/messaging';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAzp7Rf-3eiuikIzAKa9WyFXBUUofK9c0o",
    authDomain: "sign-app-1f522.firebaseapp.com",
    projectId: "sign-app-1f522",
    storageBucket: "sign-app-1f522.appspot.com",
    messagingSenderId: "578529233560",
    appId: "1:578529233560:web:b38faacfff5a0f72781eed",
    measurementId: "G-DHZ2WDQR5E"
  };



const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
const storage = getStorage(firebaseApp);

// export const getOrRegisterServiceWorker = () => {
//   if ('serviceWorker' in navigator) {
//     return window.navigator.serviceWorker
//       .getRegistration('/firebase-push-notification-scope')
//       .then((serviceWorker) => {
//         if (serviceWorker) return serviceWorker;
//         return window.navigator.serviceWorker.register('/firebase-messaging-sw.js', {
//           scope: '/firebase-push-notification-scope',
//         });
//       });
//   }
//   throw new Error('The browser doesn`t support service worker.');
// };

// export const getFirebaseToken = () =>
//   getOrRegisterServiceWorker()
//     .then((serviceWorkerRegistration) =>
//       getToken(messaging, { vapidKey: 'BK_L26hBgyHhNaHojN_B3HpHkP5DBau9ZuYXuGAInGct4RjBGS946RGbNymVdQtcGAwfK7rlzB_EMdyauxOsh1U', serviceWorkerRegistration }));

// export const onForegroundMessage = () =>
//   new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));

export const uploadFile = async (file: Blob, fileName: string): Promise<string> => {
  const storage = getStorage();  // Initialize Firebase Storage instance
  const storageRef = ref(storage, `video/${fileName}`);
  
  try {
    // Upload the file to Firebase Storage
    await uploadBytes(storageRef, file);
    
    // Get and return the download URL
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("File upload failed.");
  }
};