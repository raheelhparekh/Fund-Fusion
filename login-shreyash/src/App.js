import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/UserContext';


function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Navbar />
      <Login />
    </div>
    </AuthProvider>
  );
}

export default App;
