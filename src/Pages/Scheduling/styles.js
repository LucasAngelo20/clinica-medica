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

export const Option = styled.div`
  width: 100px;
  padding: 5px;
  margin: 0 10px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  color: #5b5b5b;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  &:checked {
    border: 2px solid #58bb62;
  }
`;
