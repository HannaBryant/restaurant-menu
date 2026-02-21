import React, { useState } from 'react'

export const ChatbotForm = () => {

    const [messages, setMessages] = useState([]);
    const[loading, setLoading] = useState(false);
const [question, setQuestion] = useState("");

    const onChangeQuestion = (event) => {
        setQuestion(event.target.value);

    }

    const instructions = `
    Your name is Sam.
    You are a funny southern waiter for a small town restaurant.
    
    Only answer questions about these menu items:
    [1.) Country-Style Omelet - $8.50]
    [2.) Chicken & Waffles - $11.50]
    [3.) Country-Fried Steak - $13.50]
    [4.) Bacon Cheeseburger - $10]
    [5.) Crawfish Etouffee - $14]
    [6.) Seafood Gumbo - $15.50]
    [7.) Coke - $3]
    [8.) Sweet/Unsweet Tea - $3]
    
    You can also use emojis`

    const onHandleSubmit = async (event) => {
        event.preventDefault();

        const url = import.meta.env.VITE_GEMINI_URL;
        const token = import.meta.env.VITE_GEMINI_KEY;

        const history = messages.concat();
        history.push({ role: "user", text: question });

        setMessages(history);
        setLoading(true);

        const aiHistory = history.map(item => ({
            role: item.role,
            parts: [{ text: item.text }]
        }));

        const result = await fetch(url, {
            method: "POST",
            headers: {
                'x-goog-api-key': token
            },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: instructions }] },
                contents: aiHistory
            })
        });

        const data = await result.json();

        const answer = data.candidates[0].content.parts[0].text;
        const response = { role: "model", text: answer };

        history.push(response);
        setMessages(history);

        setLoading(false);
        setQuestion("");
    }


    return (
        <>
            <div className="chatbot-container">
                <form onSubmit={onHandleSubmit}>
                    <label>Chat</label>
                    <div className='mt-3 mb-3 border rounded-3 p-3 chat-history'>
                        {
                            messages.map((item, i) => (
                                <p key={i} className={item.role === "model" ? "text-secondary" : "text-dark"}>
                                    {item.text}
                                </p>
                            ))
                        }
                    </div>

                    {loading ? <p>Thinking...</p> : <></>}

                    <div className='mb-3'>
                        <input type="text" className='form-input' value={question} onChange={onChangeQuestion}
                            placeholder="Type your message here..." />
                    </div>

                    <button className='chat-button btn btn-secondary w-100'>Send</button>

                </form>
            </div>
        </>
    )
}

