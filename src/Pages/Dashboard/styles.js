import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%auto;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 600px;
  justify-content: center;
  align-items: center;
`;
export const Card = styled(Link)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 350px;
  border-radius: 15px;
  margin: 0 15px 0px 15px;
  box-shadow: 0px 10px 12px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    width: 330px;
    height: 370px;
    box-shadow: 0px 10px 20px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const CardTitle = styled.p`
  color: #58bb62;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CardContent = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const CardImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 20px 0 20px 0;
`;
export const CardText = styled.p`
  color: #666;
  height: 70px;
  padding: 0 50px 0 50px;
`;
export const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: #58bb62;
`;
