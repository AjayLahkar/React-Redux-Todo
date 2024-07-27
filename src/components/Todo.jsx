import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm.jsx";
import {deleteTodo, markAsDone } from "../features/todo/todoSlice.js";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        console.log("MarkAsDone", id);
        dispatch(markAsDone(id));
    };

    return (
        <>
            <AddForm />
            <h2> Todos List App </h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span 
                            style={todo.isDone ? {textDecorationLine : "line-through"} : {}}>
                            {todo.task}
                        </span> 
                           &nbsp; &nbsp; IsDone : {todo.isDone.toString()}
                           &nbsp; &nbsp; ID : {todo.id}

                        &nbsp; &nbsp; 

                        <button 
                            onClick={() => {dispatch(deleteTodo(todo.id))}}>
                            Delete
                        </button>
                        
                        &nbsp; &nbsp;

                        <button 
                            onClick={() => clickHandler(todo.id)}>
                            Marks As Done
                        </button>

                        <br /> <br />
                        
                    </li>
                ))}
            </ul>
        </>
    );
};
