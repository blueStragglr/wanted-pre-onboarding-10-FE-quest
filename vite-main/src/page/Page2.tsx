import React, { useState } from 'react';

const Page2 = () => {
    const [todolist,setTodolist] =useState("");
 function handleTodo (){
    fetch("/todos")
    .then((response) => response.json())
    .then((data) => {console.log(data)
        setTodolist(data);
});
 }
   

    return (
        <div>
            <h1>오늘은 뭐해야 하지?</h1>
            <button onClick={handleTodo}> 찾아보기 </button>
            <section>
                <h2>{todolist[1]}</h2>
            </section>
        </div>
    );
};

export default Page2;