import React, { useState, useEffect } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love easy frontend! 😍" },
    { id: 2, title: "We love easy frontend! 😊" },
    { id: 3, title: "They love easy frontend! 🎉" },
  ]);

  const [posts, setPosts] = useState([]);

  function handleTodoClick(todo) {
    const newTodoList = [...todoList];
    const todoListRemoveIndex = newTodoList.findIndex((x) => x.id === todo.id);
    newTodoList.splice(todoListRemoveIndex, 1);
    setTodoList(newTodoList);
  }

  function handleOnSubmitForm(newValue) {
    const newTodoList = [...todoList];
    newTodoList.push({
      ...newValue,
      id: todoList.length + 1,
    });

    setTodoList(newTodoList);
  }

  useEffect(() => {
    async function fetchData() {
      const requestUrl =
        "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";

      const response = await fetch(requestUrl);
      const responseJson = await response.json();

      setPosts(responseJson.data);
    }

    fetchData();
  }, []);

  return (
    <div className="app">
      {/* <ColorBox />

      <TodoForm onSubmit={handleOnSubmitForm} />

      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

      <PostList posts={posts} />
    </div>
  );
}

export default App;
