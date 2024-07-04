import React from "react";

const Footer = ({ totalTodos, completedTodos }) => {
  return (
    <h3 className="footer">
      Total Todos: <span className="span">{totalTodos}</span> || Completed Todos: <span className="span">{completedTodos}</span>
    </h3>
  );
};

export default Footer;
