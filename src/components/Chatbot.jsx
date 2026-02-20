import React, { useState, useEffect } from 'react'

export const Chatbot = () => {
    const [question, setQuestion] = useState("");
    const [menu, setMenu] = useState([]);
    const [messages, setMessages] = useState([]);

    const apiToken = import.meta.env.VITE_GEMINI_API_KEY;

    const getFood = async () => {

        const url = import.meta.env.VITE_SUPABASE_URL + 'menu_items'
        const token = import.meta.env.VITE_TOKEN;

        const response = await fetch(url, {
            method: "GET",
            headers: { 'apikey': token }
        })

        const data = await response.json();
        setMenu(data)
    }

    useEffect(() => {
        getFood()
    },

        []);


    const onChangeQuestion = (event) => {
        setQuestion(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const systemPrompt = ` Your name is Sam, you are a funny southern waiter for a restaurant. ONLY answer questions about these menu items:
        ${JSON.stringify(menu)}

        `;
    }
        


    return (
        <>

        </>
    )
}
