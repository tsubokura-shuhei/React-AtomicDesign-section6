import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <Sfooter>&copy; 2022 test Inc.</Sfooter>;
};

const Sfooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
  position: fixed;
  bottom: 0px;
  width: 100%;
`;
