import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 93vh;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  height: 800px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Especialist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Professional = styled.div``;

export const Month = styled.div``;

export const Day = styled.div``;

export const Hour = styled.div``;

export const Select = styled.select`
  width: 250px;
  height: 30px;
  border-radius: 6px;
  border: none;
  color: #555;
  font-size: 1.2rem;
  outline: none;
  padding: 0 10px 0 10px;
  margin: 10px 0 10px 0;

  &:focus {
    border: 2px solid #58bb62;
  }
`;
export const Option = styled.option`
  font-size: 1rem;
`;

export const ConfirmButton = styled(Link)`
  border: none;
  width: 200px;
  padding: 10px 0 10px 0;
  border-radius: 10px;
  background-color: #58bb62;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  :active{
    background-color: darkgreen;
  }
`;

export const Title = styled.h1`
  color: #58bb62;
`;
