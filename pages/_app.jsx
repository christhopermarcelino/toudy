import axios from 'axios';

import '../styles/globals.css';

import AuthProvider from '@/context/AuthProvider';

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL =
    process.env.NODE_ENV === 'production'
      ? 'https://toudy.herokuapp.com/api'
      : 'http://localhost:3001/api';
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
