import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { Header, Footer } from './components';
import { useState } from 'react';
import { DevPage } from './pages';

function App() {
  // const [heightHeader, setHeaightHeader] = useState(0);

  return (
    <div className='App'>
      {/* <Header setHeaightHeader={setHeaightHeader} /> */}
      {/* style={{ paddingTop: `${heightHeader - 1}px` }} */}
      <main >
        <Routes>
          <Route path='/' element={<DevPage />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
