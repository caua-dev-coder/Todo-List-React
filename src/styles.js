import styled from "styled-components";

import { FcOk, FcCancel } from "react-icons/fc";

export const Container = styled.div`
  background-image: url(https://source.unsplash.com/1600x900/?landscape);
  background-size: 100vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoList = styled.div`
  background: rgba(0, 0, 0, 0.31);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.3px);
  -webkit-backdrop-filter: blur(7.3px);
  border: 1px solid rgba(255, 255, 255, 0.59);
  padding: 30px 20px;
  border-radius: 5px;

  ul {
    padding: 0;
    margin-top: 30px;
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  margin-right: 40px;
  width: 342px;
  padding-left: 10px;
`;

export const Button = styled.button`
  background: rgba(128, 82, 236, 1);
  color: #ffff;
  width: 130px;
  height: 40px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }

  &:active {
    opacity: 0.8;
    width: 140px;
    height: 50px;
    transition: 0.2s;
  }
`;

export const ListItem = styled.div`
  background: ${(props) =>
    props.isfinished ? "rgba(150, 216, 164, 0.40);" : "rgba(255, 255, 255, 0.47)"};

  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.3px);
  -webkit-backdrop-filter: blur(7.3px);
  border: 1px solid rgba(255, 255, 255, 0.59);

  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 20px;
  width: 500px;

  li {
    list-style: none;
  }
`;

export const ButtonOk = styled(FcOk)`
  cursor: pointer;
`

export const ButtonDelete = styled(FcCancel)`
  cursor: pointer;
`

export const Aviso = styled.h3`
  text-align: center;
  color: rgba(255, 255, 255, 0.59);
`

