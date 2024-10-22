import React from 'react'

const TodoList = () => {

    const todos = [
        {
            task: 'Go to gym',
            inCompleted: true
        },{
            task: 'Go to University',
            inCompleted: false
        },{
            task: 'Buy Snacks',
            inCompleted: true
        },{
            task: 'Learn React',
            inCompleted: true
        },
    ]

  return (
    <ul>
        {todos.map((todo)=>{
            return <li>
                {todo.task}
                <input type='checkbox' 
                defaultChecked={todo.inCompleted}/>
            </li>
        })}
    </ul>
  )
}

export default TodoList