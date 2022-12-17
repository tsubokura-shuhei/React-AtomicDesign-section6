import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <Sheader>
      <Slink to="/">HOME</Slink>
      <Slink to="/users">URSERS</Slink>
    </Sheader>
  );
};

const Sheader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
`;

const Slink = styled(Link)`
  margin: 0px 8px;
`;
