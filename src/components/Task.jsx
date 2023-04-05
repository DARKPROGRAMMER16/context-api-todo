import React from 'react'
import { useTasks } from './DataProvider'

const Task = ({id,task,complete}) => {

    const {isCompleted, deleteTask} = useTasks();

    const checkTask = (e) => isCompleted(id,e.target.checked);

  return (
    <>

    <tr>
        <td>
            <input type='checkbox' onChange={checkTask}/>
        </td>
        <td>
            <span className={complete ? 'task-complete' :''}>{task}</span>
        </td>
        <td>
            <button onClick={() => deleteTask(id)}>Delete</button>
        </td>
    </tr>

    </>
  )
}

export default Task