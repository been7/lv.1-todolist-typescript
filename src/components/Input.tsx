import { styled } from "styled-components";

interface InputProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  addTodoHandler: () => void;
  enterKeyHandler: (event: any) => void;
}

const Input = (props: InputProps) => {
  return (
    <InputBox>
      <InputTitle>제목</InputTitle>
      <InputContent
        type="text"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      />
      <span>내용</span>
      <InputContent
        type="text"
        value={props.content}
        onChange={(e) => props.setContent(e.target.value)}
      />
      <AddBtn onClick={props.addTodoHandler} onKeyUp={props.enterKeyHandler}>
        추가하기
      </AddBtn>
    </InputBox>
  );
};

export default Input;

const InputBox = styled.div`
  background-color: rgba(160, 187, 148, 0.919);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const InputContent = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: none;
`;
const InputTitle = styled.span`
  font-size: 20px;
`;

const AddBtn = styled.button`
  width: 80px;
  height: 50px;
  background-color: rgb(235, 224, 203);
  border-radius: 10px;
  border: none;
  font-size: 17px;

  &:hover {
    background-color: rgb(232, 207, 162);
    cursor: pointer;
  }
`;
