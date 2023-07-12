import { useState, useEffect } from 'react';
import Header from './components/Header';
import List from './components/List';
import optimize from './optimize.png';
import Detail from './components/Detail';
import getIssues from './getIssues';

function App() {
  const [opendetail, setOpendetail] = useState(false);
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState(2);

  useEffect(() => {
    getIssues(7, 1, setData);
    console.log(data[detailData]);
  }, []);

  return (
    <>
      <Header />
      <div>Hello World!</div>
      <div>
        {data.map((e, i: number) => {
          if (i && i % 5 === 4) {
            return (
              <div key={i}>
                <List open={setOpendetail} data={e} />
                <a href="https://www.wanted.co.kr/">
                  <img src={optimize} alt="Add" />
                </a>
              </div>
            );
          }
          return <List open={setOpendetail} key={i} data={e} />;
        })}
      </div>
      {opendetail && <Detail data={data[detailData]} open={setOpendetail} />}
    </>
  );
}

export default App;
