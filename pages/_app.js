import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}> 
      
    <div className="wrapper">
      <Navbar />
      <Component {...pageProps} /> 
      <Footer />
    </div>
    </Provider>
  );
}

export default MyApp