import React from 'react'
import { ChatbotForm } from '../components/ChatbotForm'

export const Chatbot = () => {

    return (
        <>
            <div className='container mt-5'>
                <h2>Meet Sam, Our Ai Waiter!</h2>
                <p>Ask Sam anything you'd like regarding our menu.</p>
                <ChatbotForm />
            </div>
        </>
    )
}

