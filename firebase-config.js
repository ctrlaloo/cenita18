// Pega aquí la configuración de tu app web (Firebase Console > Configuración del proyecto > Tus apps).
// Estas claves SON públicas por diseño; la seguridad la dan las reglas de firestore.rules.
export const firebaseConfig = {
  apiKey: "AIzaSyCnwVLJiUCnYXNXURaeZ9SeFu8d6IOB4x0",
  authDomain: "cenita-nucita.firebaseapp.com",
  projectId: "cenita-nucita",
  storageBucket: "cenita-nucita.firebasestorage.app",
  messagingSenderId: "142790664042",
  appId: "1:142790664042:web:1420b8c04e735c6fde4f13"
};
export const configurado = !firebaseConfig.apiKey.startsWith("REEMPLAZA");
