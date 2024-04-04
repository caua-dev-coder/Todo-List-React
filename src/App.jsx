import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Container, ToDoList, Input, Button, ListItem, ButtonDelete, ButtonOk, Aviso } from "./styles.js";

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  function newTaskOnInput(event) {
    setInputTask(event.target.value);
  }

  function newTaskAddButton() {
    if(inputTask){
    setList([...list, { id: uuid(), task: inputTask, finished: false }]);
    }
  }

  function CheckTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  }

  function DeleteTask(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <Input
          onChange={newTaskOnInput}
          type="text"
          placeholder="O que temos para fazer..."
        />
        <Button onClick={newTaskAddButton}>Adicionar</Button>

        <ul>
          {
          list.length > 0 ? (
          
          list.map((item) => (
            <ListItem isfinished={item.finished} key={item.id}>
              <ButtonOk onClick={() => CheckTask(item.id)} />
              <li>{item.task} </li>
              <ButtonDelete onClick={() => DeleteTask(item.id)} />
            </ListItem>
          ))
        ) : (
          <Aviso>Nao ha itens na Lista</Aviso>
        )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
