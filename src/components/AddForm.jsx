import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice.js";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (evt) => {
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    };

    return (
        <>
            <form onSubmit={submitHandler}>

                <input placeholder="Enter Your task" 
                onChange={(e) => {setTask(e.target.value)}} 
                type="text" /> <br /> <br />

                <button>
                    Add Todo/task
                </button>
            </form>
        </>
    );
};
