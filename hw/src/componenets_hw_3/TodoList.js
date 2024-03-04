
import { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './todoList.css'


function ToDoList() {
    const [arrTask, setArrTask] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const valueInput = (e) => {
        setInputValue(e.target.value);
    }

    const addTask = () => {
        if (!inputValue.trim()) {
            return;
        }

        setArrTask([...arrTask, inputValue])
        setInputValue('')
    }

    const deleteTask = (index) => {
        const newArrTask = [...arrTask];
        newArrTask.splice(index, 1);
        setArrTask(newArrTask);
    };


    return (
        <>
            <h1 className='title'>Список задач </h1>
            <div className='todoList'>
                <TextField value={inputValue} id="outlined-basic" label='input task' variant="outlined" onChange={valueInput} />
                <Button className='btnAddTask' variant="contained" onClick={addTask}>add task</Button>
            </div>
            <div className='list'>
                {arrTask.length === 0 ? (
                    <p>Добавьте Вашу первую задачу . . .</p>
                ) : (
                    arrTask.map((task, index) => (
                        <ListItemButton key={index} onClick={() => deleteTask(index)}>
                            <ListItemText primary={task} />
                            <ListItemIcon>
                                <DeleteIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    ))
                )}

            </div>
        </>
    );
}

export default ToDoList;


