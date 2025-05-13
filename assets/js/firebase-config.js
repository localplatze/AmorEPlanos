// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-fGHONY5gpVbMQcuBxhypTjAXvFw3CbI",
  authDomain: "wedding-4b057.firebaseapp.com",
  databaseURL: "https://wedding-4b057-default-rtdb.firebaseio.com",
  projectId: "wedding-4b057",
  storageBucket: "wedding-4b057.firebasestorage.app",
  messagingSenderId: "939272571017",
  appId: "1:939272571017:web:3164fa28358b3c33a79e58",
  measurementId: "G-YCLTSX2CT0"
};

// Verificar se o Firebase já foi carregado antes de inicializar
document.addEventListener('DOMContentLoaded', function() {
  // Verificar se o Firebase já está disponível
  if (typeof firebase !== 'undefined') {
    // Inicializar Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    
    // Exportar referências aos serviços do Firebase
    window.auth = firebase.auth();
    window.db = firebase.database();
  } else {
    console.error("Firebase SDK não carregado corretamente. Verifique a ordem dos scripts.");
  }
});