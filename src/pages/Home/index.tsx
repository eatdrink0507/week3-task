/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useRef } from 'react';
import getIssues from '../../getIssues';
import useInfinite from '../../useInfinite';
import List from '../../components/List';
import Loading from '../Loading';

export default function Home() {
  const [data, setData] = useState([]);
  const [pagenum, setPagenum] = useState(1);
  const [loading, setLoading] = useState(true);
  const target = useRef(null);

  const [observe, unobserve] = useInfinite(() => {
    setPagenum(prev => prev + 1);
  });

  useEffect(() => {
    if (pagenum === 1) observe(target.current);
    if (pagenum > 100) unobserve(target.current);
  }, [data]);

  useEffect(() => {
    getIssues(pagenum, data, setData, setLoading);
  }, [pagenum]);

  return (
    <div css={style}>
      {data.map((e, i: number) => {
        return <List key={i} index={i} data={e} />;
      })}
      {loading && <Loading />}
      <div ref={target} />
    </div>
  );
}

const style = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
