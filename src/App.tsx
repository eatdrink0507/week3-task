import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { PageContext } from './pagecontext';

function App() {
  const [detailData, setDetailData] = useState({});

  return (
    <PageContext.Provider value={{ detailData, setDetailData }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </PageContext.Provider>
  );
}

export default App;
