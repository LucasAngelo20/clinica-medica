import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoutButton = styled(Link)`
  background-color: #ff3729;
  border: none;
  padding: 7px;
  position: absolute;
  right: 30px;
  top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b0241a;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 100px;
`;
