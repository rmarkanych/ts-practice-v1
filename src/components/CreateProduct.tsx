import axios from "axios"
import React, { useState } from "react"
import { Error } from "./Error"
import { IProduct } from "../models"

const productData: IProduct = {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 42, 
            count: 10
        }
}

interface CreateProductProps {
   onCreate: (product: IProduct) => void 
}

export const CreateProduct = ({onCreate}: CreateProductProps) => {

const [value, setValue] = useState("")
const [error, setError] = useState("")

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if(value.trim().length === 0 ) {
            setError('Please enter valid title')
            return
        }

        productData.title = value
        const r = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(r.data)
    }

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
 
    return (
        <form onSubmit={submitHandler} className="flex flex-col items-center">
        <input onChange={changeInput} type="text" className="border py-2 px-4 mb-2 w-full outline-0" placeholder="Enter product title" />
        {error && <Error error={error}/>}
        <button type="submit" className=" py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    )
}