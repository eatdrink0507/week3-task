/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function List({ data, open }: Props) {
  return (
    <div className="div" css={listStyle}>
      <h3 onClick={() => open(true)}>
        #{data.number} {data.title}
      </h3>
      <span>
        작성자: {data.user.login}, 작성일: {data.created_at}
      </span>
      <span>코멘트: {data.comments}</span>
    </div>
  );
}

type Props = {
  open: Function;
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
