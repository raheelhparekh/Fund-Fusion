import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/UserContext';
import Footer from './components/Footer.js/Footer';


function App() {
  return (
    <AuthProvider>

    <div className="App">
      <Navbar />
      <Login />
      <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
