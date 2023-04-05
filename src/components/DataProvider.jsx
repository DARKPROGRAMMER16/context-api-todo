import React, { createContext, useContext, useState } from "react";
import { v4 as idGen } from "uuid";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

const DataProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTasks = (ts) => {
    setTasks([
      ...tasks,
      {
        id: idGen(),
        task: ts,
        complete: false,
      },
    ]);
  };

  const isCompleted = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, complete: status } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((ts) => ts.id !== id));
  }

  return (
    <TaskContext.Provider value={{tasks,addTasks,isCompleted,deleteTask}}>
        {children}
    </TaskContext.Provider>
  );
};

export default DataProvider;
