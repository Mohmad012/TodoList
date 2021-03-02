import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const todos = useSelector((state) => state.todosState.todos);
  return (
    <header>
      <h1>
        قائمة المهام <span>( {todos && todos.length} )</span>
      </h1>
    </header>
  );
};

export default Header;
