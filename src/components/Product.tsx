import { useState } from "react"
import { IProduct } from "../models"

interface productProps {
    product: IProduct
}

export const Product = ({product}: productProps) => {

const [details, setDetails] = useState(false)

const productBtnBg = details ? 'bg-yellow-400' : 'bg-blue-400'
const btnClasses = ['py-2 px-4 border', productBtnBg]

return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
        <img className="w-1/5" src={product.image} alt={product.title} />
        <p>{product.title}</p>
        <p className="font-bold">{product.price}</p>
        <button className={btnClasses.join(' ')} type="button" onClick={() => setDetails(prev => !prev)}>
        {details ? ' Hide Details ' : 'Show Details'}
        </button>
        {details && <div>
        <p>{product.description}</p></div>} 
        <p>Rate: <span className="font-bold">{product?.rating?.rate}</span></p>
    </div>
)
}