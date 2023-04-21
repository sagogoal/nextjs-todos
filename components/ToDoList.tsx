import React, { useState, useEffect } from 'react';
import { useAddTodo } from '../Hooks/useAddTodo';

export const TodoList : React.FC= () => {
    const {todo} = useAddTodo()
    console.log('%o', todo);

    return (
    <>
        <div>todoリスト</div>
        {todo?.map((aTodo) => (
            <li key={aTodo.id}>{aTodo.title}</li>
        ))}
    </>
    )
}