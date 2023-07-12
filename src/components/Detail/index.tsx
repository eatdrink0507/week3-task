/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Detail({ data, open }: Props) {
  return (
    <div css={back}>
      <div css={front}>
        <button onClick={() => open(false)}>Close</button>
        <div>
          <img width={70} src={data.user.avatar_url} alt="icons" />
          <h3>
            #{data.number} {data.title}
          </h3>
          <div>{data.body}</div>
        </div>
      </div>
    </div>
  );
}

type Props = {
  data: {
    number: number;
    title: string;
    user: {
      login: string;
      avatar_url: string;
    };
    created_at: string;
    comments: number;
    body: string;
  };
  open: Function;
};

const back = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;
const front = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 300px;
  height: 600px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 50px;
  justify-content: center;
  border: solid 2px black;
  background-color: white;
  overflow: scroll;
`;
