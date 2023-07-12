/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { usePageContext } from '../../pagecontext';
import optimize from '../../optimize.png';

export default function List({ data, index }: Props) {
  const navigate = useNavigate();
  const { setDetailData } = usePageContext();

  return (
    <>
      <div className="div" css={listStyle}>
        <h3
          onClick={() => {
            setDetailData({ data });
            localStorage.setItem('data', JSON.stringify(data));
            navigate('/detail');
          }}
        >
          #{data.number} {data.title}
        </h3>
        <span>
          작성자: {data.user.login}, 작성일: {data.created_at}
        </span>
        <span>코멘트: {data.comments}</span>
      </div>
      {index % 5 === 4 && (
        <a href="https://www.wanted.co.kr/">
          <img src={optimize} alt="Add" />
        </a>
      )}
    </>
  );
}

type Props = {
  index: number;
  data: {
    number: number;
    title: string;
    user: {
      login: string;
    };
    created_at: string;
    comments: number;
  };
};
const listStyle = css`
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  width: 500px;
`;
