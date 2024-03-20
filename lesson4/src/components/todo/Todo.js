import React, { useState } from 'react';
import classes from './Todo.module.css';
import Button from '../button/Button';

const Todo = ({ todo, handleDelete, handleDone, handleEdit, handleCurrentEdit, isEdit }) => {
    const [input, setInput] = useState(todo.title);

    const onSave = () => {
        handleEdit({ ...todo, title: input });
        setInput(''); // Очищаем поле ввода после сохранения изменений
        handleCurrentEdit(null); // Закрываем режим редактирования после сохранения изменений
    };

    const onCancel = () => {
        setInput(todo.title);
        handleCurrentEdit(null);
    };

    return (
        <>
            {
                isEdit &&
                <div>
                    <input
                        type="text"
                        value={input}
                        onChange={event => setInput(event.target.value)}
                    />
                    <Button title={'Save'} action={onSave} />
                    <Button title={'Cancel'} action={onCancel} />
                </div>
            }

            <li className={`${classes.todo} ${todo.completed ? classes.completed : ''}`}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
                <button onClick={() => handleCurrentEdit(todo.id)}>
                    Edit
                </button>
                <button onClick={() => handleDone(todo.id)}>
                    Done
                </button>
                <button onClick={() => handleDelete(todo.id)}>
                    Delete
                </button>
            </li>
        </>
    );
};

export default Todo;
