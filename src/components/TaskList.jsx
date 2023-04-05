import React from "react";
import { useTasks } from "./DataProvider";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <>
        <table>
            <tbody>
                {
                    tasks.map((task, i) => <Task {...task}/>)
                }
            </tbody>
        </table>
    </>
  );
};

export default TaskList;
