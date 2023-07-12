/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { usePageContext } from '../../pagecontext';

export default function Detail() {
  const { detailData }: any = usePageContext();
  const data = detailData.data;
  return (
    <div css={front}>
      <div>
        <div>
          <img width={70} src={data.user.avatar_url} alt="icons" />
          작성자 {data.user.login}
        </div>
        <h3>
          #{data.number} {data.title}
        </h3>
        <span>
          작성일 {data.created_at} 코멘트수 {data.comments}
        </span>
        <div css={main}>
          <h3>본문</h3>
          {data.body}
        </div>
      </div>
    </div>
  );
}

const front = css`
  display: flex;
  flex-direction: column;

  padding: 50px;
  justify-content: center;
  overflow: scroll;
  padding: 50px;
`;

const main = css`
  height: 400px;
  overflow: scroll;
`;
