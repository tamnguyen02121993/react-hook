import React, { useState, useEffect } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import PostFilterForm from "./components/PostFilterForm";
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love easy frontend! 😍" },
    { id: 2, title: "We love easy frontend! 😊" },
    { id: 3, title: "They love easy frontend! 🎉" },
  ]);

  const [posts, setPosts] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
  });

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

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  function handleFilterChange(filter) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: filter.searchTerm,
    });
  }

  useEffect(() => {
    async function fetchData() {
      const querParams = queryString.stringify(filter);
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${querParams}`;

      const response = await fetch(requestUrl);
      const responseJson = await response.json();

      setPosts(responseJson.data);
      setPagination(responseJson.pagination);
    }

    fetchData();
  }, [filter]);

  return (
    <div className="app">
      {/* <ColorBox />

      <TodoForm onSubmit={handleOnSubmitForm} />

      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

      <PostFilterForm onSubmit={handleFilterChange} />

      <PostList posts={posts} />
      <Pagination onPageChange={handlePageChange} pagination={pagination} />
    </div>
  );
}

export default App;
