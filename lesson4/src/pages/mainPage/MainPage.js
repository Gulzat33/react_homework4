import React, { useEffect, useState } from 'react';
import Buttons from '../../components/buttons/Buttons';
import User from '../user/User';
import Example from '../../components/example/Example';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import TodoList from '../../components/TodoList/TodoList';
import Button from '../../components/button/Button';


const MainPage = () => {
    const navBar = ['Главная', 'Контакты', 'О нас', 'О нас']
    const [show, setShow] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id:1 ,
            title: 'coding',
            completed: false
        },
        {
            id:4,
            title: 'eat',
            completed: false
        },
        {
            id:5,
            title: 'sleep',
            completed: false
        }
    ])
    const handleShow = () => {
        setShow(!show)
    }
    const [inputTask, setInputTask] = useState('')
    const onChangeInputTask = (event) => {
        setInputTask(event.target.value)
    }

    const handleAdd = ()=> {
        setTasks(prev=>[...prev, {
            id: tasks.length===0 ? 1 : tasks[tasks.length-1].id+1,
            title: inputTask,
            completed: false
        }])
    }

    const handleDone = (id) => {
        console.log(id);
        tasks.map(task=>{
            if(task.id===id) {
                return task.completed = !task.completed
            }
        })
        setTasks([...tasks])
    }

    const handleEdit = (editedTodo) => {
        setTasks(tasks.map(task => {
            if (task.id === editedTodo.id) {
                return editedTodo;
            }
            return task;
        }));
    };




    const handleDelete = (id) => {
        setTasks(tasks.filter(task=>task.id!==id))
    }


    useEffect(()=> {
        console.log('useEffect');
    },[tasks])



    return (
        <>
            { show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}
                >
                </Modal>
            }

            <TodoList
                tasks={tasks}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
            />
            <Buttons/>
            <Button title={'Открыть'} action={handleShow}/>
        </>
    );
};

export default MainPage;