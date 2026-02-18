import React, { useState, useEffect } from 'react'
import { Card } from '../components/Card'


export const Menu = () => {

    const [food, setFood] = useState([]);

    const getFood = async () => {

        const url = import.meta.env.VITE_SUPABASE_URL + 'menu_items'
        const token = import.meta.env.VITE_TOKEN;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                'apikey': token
            }
        })

        const data = await response.json();

        setFood(data)
        console.log(data)

    }

    useEffect(() => {

        getFood()

    }, []);

    const breakfast = food.filter(item => item.category === "breakfast")
    const lunch = food.filter(item => item.category === "lunch")
    const dinner = food.filter(item => item.category === "dinner")
    const drinks = food.filter(item => item.category === "drink")


    return (
        <>

       
            <h2 className='text-center my-4'>Breakfast</h2>
            <div className='row justify-content-center'>
            {breakfast.map(item => (
                <div className='col-sm-6 col-md-4 col-lg-3' key={item.id}>
                <Card key={item.id} name={item.name} price={item.price} image={item.image_url} />
                </div>
            ))}
            </div>

            <h2 className='text-center my-4'>Lunch</h2>
            <div className='row justify-content-center'>
            {lunch.map(item => (
                 <div className='col-sm-6 col-md-4 col-lg-3' key={item.id}>
                <Card key={item.id} name={item.name} price={item.price} image={item.image_url} />
                </div>
            ))}
            </div>


            <h2 className='text-center my-4'>Dinner</h2>
            <div className='row justify-content-center'>
            {dinner.map(item => (
                 <div className='col-sm-6 col-md-4 col-lg-3' key={item.id}>
                <Card key={item.id} name={item.name} price={item.price} image={item.image_url} />
                </div>
            ))}
            </div>



            <h2 className='text-center my-4'>Drinks</h2>
            <div className='row justify-content-center'>
            {drinks.map(item => (
                <div className='col-sm-6 col-md-4 col-lg-3' key={item.id}>
                <Card key={item.id} name={item.name} price= {item.price} image={item.image_url} />
                </div>
            ))}
            </div>

        </>
    )
}
