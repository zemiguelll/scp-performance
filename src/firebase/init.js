import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyBdCR4UOCoFyQunGiFdaOV5Yk7xY0XbFpY',
  authDomain: 'scp-performance.firebaseapp.com',
  databaseURL: 'https://scp-performance.firebaseio.com',
  projectId: 'scp-performance',
  storageBucket: 'scp-performance.appspot.com',
  messagingSenderId: '285332299451',
  appId: '1:285332299451:web:102b2c9c832caf63'
}

firebase.initializeApp(config)
