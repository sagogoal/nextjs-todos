import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';

export const useAddTodo = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        const data : any = await supabase.from('todos').select('*');
        setTodo(data.body)
    }

    return {todo, fetchTodos}
}