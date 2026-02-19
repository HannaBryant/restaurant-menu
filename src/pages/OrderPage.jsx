import React, { useState } from 'react'

const url = import.meta.env.VITE_SUPABASE_URL + "orders";
const token = import.meta.env.VITE_TOKEN;


export const OrderPage = () => {

    const [customer_name, setCustomer_name] = useState("");
    const [order_details, setOrder_details] = useState("");
    const [result, setResult] = useState("");

    const onChangeCustomer_name = (event) => {
        setCustomer_name(event.target.value);
    }

    const onChangeOrder_details = (event) => {
        setOrder_details(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const orderMessage = {
            customer_name,
            order_details
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'apikey': token
            },
            body: JSON.stringify(orderMessage)
        }
        )

        if (response.ok) {
            setResult("Order Sent!")
        } else {
            setResult("Order not sent, Please try again.")
        };

        setCustomer_name("");
        setOrder_details("");

    };


    return (
        <>
            <main className='container mt-4'>

                <form onSubmit={onSubmitHandler}>
                    
                    <div className='mb-4'>
                        <label className='form-label'>Name</label>
                        <input type='text' className='form-control' value={customer_name} onChange={onChangeCustomer_name} />
                    </div>

                    <div className='mb-4'>
                        <label className='form-label'>Order</label>
                        <input type='text' className='form-control' value={order_details} onChange={onChangeOrder_details} />
                    </div>



                    <button className='btn btn-secondary w-100'>Send Order</button>
                </form>

                <p className='mt-4'>{result}</p>

            </main>

        </>
    )
}
