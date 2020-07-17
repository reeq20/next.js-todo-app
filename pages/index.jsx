import { useState } from "react";

const App = () => {
  const initialState = ["a", "b", "c"];
  //　作成したtodo を入れておくためのstate
  const [todos, setTodos] = useState([]);

  // フォームに入力された値をtodoに登録するまでに入れておくためのstate
  const [tmpTodo, setTmpTodo] = useState("");

  const addTodo = () => {
    // formの内容が空白の場合はalertを出す
    if (tmpTodo === "") {
      alert("文字を入力してください");
      return;
    }

    // setTodosに既存のtodosにtmpTodoを追加配列をdispatchする処理
    setTodos([...todos, tmpTodo]);

    // setTmpTodoに空文字を入れてinputを初期化
    setTmpTodo("");
  };

  // todoを削除する処理
  const deleteTodo = index => {
    const newTodos = todos.filter((todo, todoIndex) => {
      // 引数で受け取ったindexに該当しないものだけで新たな配列を生成
      return index !== todoIndex;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <div className="form">
        Add Todo
        <input
          type="text"
          name="todo"
          placeholder={"AddNewTodo"}
          onChange={e => setTmpTodo(e.target.value)}
          value={tmpTodo}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>delete</button>
            </li>
          );
        })}
      </ul>
      <style>
        {`
         h1 {
          text-align: center;
        }
        .form {
          display: flex;
          justify-content: center;
        }
        ul {
          width: 200px;
          margin: 10px auto;
        }
        `}
      </style>
    </>
  );
};

export default App;
