import React from 'react'

const DeleteTodoBtn = ({dltTodo, idx}) => {
    return (
        <button onClick={() => dltTodo(idx)} className='border w-10 p-1 flex justify-center items-center  right-0 shrink-0 rounded cursor-pointer text-xl'>
            X
        </button>
    )
}

export default DeleteTodoBtn
