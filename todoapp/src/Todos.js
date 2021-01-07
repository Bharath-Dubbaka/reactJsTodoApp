import React from 'react';

const Todos = ({todoState, deleteTodo}) => {
        const todoList = todoState.length ? (
            todoState.map(eachMapedTodo => {
                return (
                    <div className='collection-item' key={eachMapedTodo.id}>
                    <span onClick={() => {deleteTodo(eachMapedTodo.id)}}>{eachMapedTodo.content}</span>
                    </div>
                )
            })
        ) : (
        <p className='center'>No tasks pending</p>
        )
        return (
        <div className='todoClass collection'>
            {todoList}
        </div>   
    )
}



export default Todos;