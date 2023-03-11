import { useContext } from "react"
import { CreateProduct } from "./components/CreateProduct"
import { Error } from "./components/Error"
import { Loader } from "./components/Loader"
import { Modal } from "./components/Modal"
import { Product } from "./components/Product"
import { ModalContext } from "./context/ModalContext"
import { useProducts } from "./hooks/products"
import { IProduct } from "./models"

export const App = () => {

const { products, error, loading, addProduct}  = useProducts()
const {modal, close, open} = useContext(ModalContext)

const createHandler = (product: IProduct) => {
  close()
  addProduct(product)
}

  return (
<div className='container mx-auto max-w-2xl pt-5'>
  { loading && <Loader/> }
  { error && <Error error={error}/> }
  { products.map(product => <Product product={product} key={product.id}/>) }
  {modal &&  <Modal title="Create new product" onClose={close}>
  <CreateProduct onCreate={createHandler}/>
  </Modal>}
  <button onClick={open} className="fixed bottom-5 right-5 rounded-full bg-red-900 text-white text-2 px-4 py-2 cursor-pointer">+</button>
</div>
  )
}


