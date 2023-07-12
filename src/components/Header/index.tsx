/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header css={HeaderStyle}>
      <h1 onClick={() => navigate('/')}>facebook / react</h1>
    </header>
  );
};

export default Header;

const HeaderStyle = css`
  height: 50px;
  border-bottom: dotted 1px black;
  margin-bottom: 20px;
  text-align: center;
`;
