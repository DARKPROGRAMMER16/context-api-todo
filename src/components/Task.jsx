import React, { useState } from 'react'
import { useTasks } from './DataProvider'

const Task = ({id,task,complete}) => {

    const {isCompleted, deleteTask, updateTask} = useTasks();

    const checkTask = (e) => isCompleted(id,e.target.checked);

    const [editToggle, setEditToggle] = useState(false);

    const [editval, setEditValue] = useState(task);

    const edTask = () => {
        updateTask(id,editval);
        setEditToggle(!editToggle);
    };

  return (
    <>

    <div className={!editToggle ? 'show-edit' :''}>
        <input type="text" value={editval} onChange={(e) => setEditValue(e.target.value)}/>
        <button onClick={edTask}>Update</button>
    </div>

    <tr>
        <td>
            <input type='checkbox' onChange={checkTask}/>
        </td>
        <td>
            <span className={complete ? 'task-complete' :''}>{task}</span>
        </td>
        <td>
            <button onClick={() => setEditToggle(!editToggle)}>Edit</button>
        </td>
        <td>
            <button onClick={() => deleteTask(id)}>Delete</button>
        </td>
    </tr>

    </>
  )
}

export default Task