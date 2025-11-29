// Scripts de Firebase Service Worker
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging-compat.js');

// Configuración (La misma que en tu HTML)
const firebaseConfig = {
    apiKey: "AIzaSyAgDcx6L0kwAmdJbFEWT4-DStnmW5gT-yM",
    authDomain: "artix-9cc45.firebaseapp.com",
    databaseURL: "https://artix-9cc45-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "artix-9cc45",
    storageBucket: "artix-9cc45.firebasestorage.app",
    messagingSenderId: "756561772828",
    appId: "1:756561772828:web:13bfd0aca8879219823ad9"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Manejador de notificaciones en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje recibido en background ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || 'http://logise1.github.io/artix/logo.png', // Icono por defecto
    badge: 'http://logise1.github.io/artix/logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
