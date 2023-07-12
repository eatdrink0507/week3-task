/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import getIssues from '../../getIssues';
import List from '../../components/List';
import Loading from '../Loading';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getIssues(10, 1, setData);
  }, []);
  return (
    <div css={style}>
      {data.length > 0 || <Loading />}
      {data.map((e, i: number) => {
        return <List key={i} index={i} data={e} />;
      })}
    </div>
  );
}

const style = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
