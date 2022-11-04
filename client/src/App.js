import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import SignIn from './SignIn';
import Home from './Home';


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
