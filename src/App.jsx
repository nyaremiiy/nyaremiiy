import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { useState } from 'react';
import { MainPage } from './pages';

function App() {
  const [heightHeader, setHeaightHeader] = useState(0);

  return (
    <div className='App'>
      <Header setHeaightHeader={setHeaightHeader} />
      <main style={{ paddingTop: `${heightHeader - 1}px` }}>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
