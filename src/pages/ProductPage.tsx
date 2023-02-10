import React, { useContext } from 'react'
import { useProducts } from '../hook/products'
import { Product } from '../components/Product'
import { Loader } from '../components/loader'
import { Modal } from '../components/modal'
import { CreateProduct } from '../components/createProduct'
import { Error } from '../components/error'
import { Iproduct } from '../models'
import { ModalContext } from '../context/ModalContext'
import { HeaderTitle } from '../components/headerTitle'

export function ProductsPage() {
  const { products, error, loading, addProduct } = useProducts()
  const { modal, openModal, closeModal } = useContext(ModalContext)
  const createHandler = (product: Iproduct) => {
    closeModal()
    addProduct(product)
  }
  return (
    <main className="container w-full mx-auto my-16 flex items-center gap-8 flex-col">
      <HeaderTitle />
      {loading && <Loader />}
      {error && <Error error={error} />}
      <div className="card w-auto max-w-full p-8 mx-auto flex flex-row flex-wrap justify-center gap-12 ">
        {products.map((elem) => (
          <Product product={elem} key={elem.id} />
        ))}
      </div>
      {modal && (
        <Modal title="Создать новый продукт" onClose={closeModal}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <div>
        <button
          className="fixed right-4 bottom-4 rounded-full w-12 h-12 bg-red-700   text-white text-center text-5xl"
          onClick={openModal}
        >
          <span className="absolute -top-[4px] right-0 left-0 bottom-0 ">
            +
          </span>
        </button>
      </div>
    </main>
  )
}
