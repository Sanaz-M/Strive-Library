import 'bootstrap/dist/css/bootstrap.min.css';
import FirstNavbar from './components/FirstNavbar';
import './App.css';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
// import LatestRelease from './components/LatestRelease';
import './components/Components.css';
import BookList from './components/BookList';
import books from './data/scifi.json'
import Registration from './components/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <FirstNavbar />
        <Welcome />
        <Routes>
        <Route path="/register" element={<Registration/>} />
        <Route path="/" element={<BookList books={books} />} />
        </Routes>
        {/* <LatestRelease /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
