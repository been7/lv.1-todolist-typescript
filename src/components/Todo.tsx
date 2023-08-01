import React from "react";
import { styled } from "styled-components";
import { Todo as TodoType } from "../types/todo";

interface TodoProps {
  todo: TodoType;
  firstBtn: string;
  secondBtn: string;
  firstBtnHandler: (id: number) => void;
  secondBtnHandler: (item: TodoType) => void;
}

// React.FC 안쓰는게 좋다.
// const Todo = (props: TodoProps) => {}

const Todo = ({
  todo,
  firstBtnHandler,
  secondBtnHandler,
  firstBtn,
  secondBtn,
} : TodoProps) => {
  const { id, title, content } = todo;
  return (
    <TodoBox>
      <Title>{title}</Title>
      <p className="content">{content}</p>
      <DelBtn onClick={() => firstBtnHandler(id)}>{firstBtn}</DelBtn>
      <ToggleBtn onClick={() => secondBtnHandler(todo)}>{secondBtn}</ToggleBtn>
    </TodoBox>
  );
};

export default Todo;

const TodoBox = styled.div`
  border: 1px solid rgba(160, 187, 148, 0.919);
  border-radius: 10px;
  width: 200px;
  height: 200px;
  padding: 10px;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

const DelBtn = styled.button`
  background-color: rgb(236, 236, 203);
  width: 70px;
  height: 30px;
  border: none;
  margin-left: 20px;
  margin-top: 25px;

  &:hover {
    background-color: rgb(241, 208, 145);
    cursor: pointer;
  }
`;

const ToggleBtn = styled.button`
  background-color: rgb(241, 208, 145);
  width: 70px;
  height: 30px;
  border: none;
  margin-left: 7px;

  &:hover {
    background-color: rgb(236, 236, 203);
    cursor: pointer;
  }
`;
