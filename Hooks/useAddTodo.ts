import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';

export const useAddTodo = () => {
    const [todo, setTodo] = useState<Object>();
    console.log("useAddTodo: " + todo)

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        const data : any = await supabase.from('todos').select('*');
        console.log("useAddTodo data: " + data.data)
        setTodo(data.data)
    }

    return {todo, fetchTodos}
}