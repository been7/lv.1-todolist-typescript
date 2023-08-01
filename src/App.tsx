import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import { Todo as TodoType } from "./types/todo";
import Input from "./components/Input";
import { styled } from "styled-components";

function App() {
  const [todo, setTodo] = useState<TodoType[]>([
    { id: 1, title: "물마시기", content: "하루에 세번 물마시기" },
  ]);

  const [doneTodo, setDoneTodo] = useState<TodoType[]>([
    { id: 2, title: "운동하기", content: "공복유산소" },
  ]);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  //할일 추가 기능
  const addTodoHandler = () => {
    const newTodo = {
      id: todo.length + doneTodo.length + 1,
      title: title,
      content: content,
    };

    if (title === "" && content === "") alert("형식을 채워주세요");
    else setTodo([...todo, newTodo]);
    setTitle("");
    setContent("");
  };

  //todo 삭제
  const deleteTodoHandler = (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  //done 삭제
  const deleteDoneHandler = (id: number) => {
    setDoneTodo(doneTodo.filter((item) => item.id !== id));
  };

  //todo -> done
  const doneTodoHandler = (item: TodoType) => {
    const newDoneTodo = {
      id: item.id,
      title: item.title,
      content: item.content,
    };
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodo(todo.filter((i) => i.id !== item.id));
  };

  // done -> todo
  const doneResetHandler = (item: TodoType) => {
    const newTodo = {
      id: item.id,
      title: item.title,
      content: item.content,
    };
    setTodo([...todo, newTodo]);
    setDoneTodo(doneTodo.filter((i) => i.id !== item.id));
  };

  const enterKeyHandler = (event: any) => {
    if (event.key === "13") {
      console.log("왜안되는지요");
      addTodoHandler();
    }
  };

  return (
    <Container>
      <Input
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        addTodoHandler={addTodoHandler}
        enterKeyHandler={enterKeyHandler}
      />
      <div className="todo-container">
        <h1> 📝 Todo</h1>
        <TodoBox>
          {todo.map((todoItem) => {
            return (
              <Todo
                todo={todoItem}
                key={todoItem.id}
                firstBtnHandler={deleteTodoHandler}
                secondBtnHandler={doneTodoHandler}
                firstBtn="삭제하기"
                secondBtn="완료하기"
              />
            );
          })}
        </TodoBox>
        <h1> 💯 Done</h1>
        <div>
          <TodoBox>
            {/* 입력된 todo들이 들어옴 */}
            {doneTodo.map((doneTodoItem) => {
              return (
                <Todo
                  todo={doneTodoItem}
                  key={doneTodoItem.id}
                  firstBtnHandler={deleteDoneHandler}
                  secondBtnHandler={doneResetHandler}
                  firstBtn="삭제하기"
                  secondBtn="취소하기"
                />
              );
            })}
          </TodoBox>
        </div>
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
  border: 3px solid rgba(160, 187, 148, 0.919);
  padding: 30px;
`;

const TodoBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
