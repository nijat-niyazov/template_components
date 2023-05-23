import { Dialog, Transition } from '@headlessui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Fragment, useState } from 'react';
import { updateProductOnServer } from '../api/mainApi';

export default function Modal({ isOpen, closeModal, product }) {
  const [title, setTitle] = useState(product.title);
  const [brand, setBrand] = useState(product.brand);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateProductOnServer,
    onMutate: async data => {
      await queryClient.cancelQueries(['allProducts']);

      const prevAllData = queryClient.getQueryData(['allProducts']);

      queryClient.setQueryData(['allProducts'], oldDataFromDevTools => {
        // console.log(oldDataFromDevTools);
        const index = oldDataFromDevTools.findIndex(
          product => product.id === data.id
        );
        // console.log(data);
        oldDataFromDevTools.splice(index, 1, data);
        return oldDataFromDevTools;
      });

      return {
        prevAllData,
      };
    },
    onError: (_error, _sec, context) => {
      console.log('executed');
      queryClient.setQueryData(['allProducts'], context.prevAllData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['allProducts']);
      closeModal();
    },
  });

  // console.log(mutation);

  const handleUpdate = () => {
    const newPost = {
      title,
      brand,
      price,
      stock,
      id: product.id,
    };

    mutation.mutate(newPost);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 bg-green-600 p-2 text-white rounded-xl text-center"
                >
                  Update Your Product
                </Dialog.Title>
                <form className="mt-2">
                  <label htmlFor="title">Product Title </label>
                  <input
                    id="name"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    className="border-[2px] rounded-xl p-2 block mt-2 mb-6"
                  />

                  <label htmlFor="brand">Brand</label>
                  <input
                    id="brand"
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                    type="text"
                    className="border-[2px] rounded-xl p-2 block mt-2 mb-6"
                  />

                  <label htmlFor="price">Price</label>
                  <input
                    id="price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    type="text"
                    className="border-[2px] rounded-xl p-2 block mt-2"
                  />
                  <label htmlFor="stock">Stock</label>

                  <input
                    id="stock"
                    value={stock}
                    onChange={e => setStock(e.target.value)}
                    type="text"
                    className="border-[2px] rounded-xl p-2 block mt-2 mb-6"
                  />
                </form>

                <div className="mt-4">
                  <button
                    disabled={mutation.isLoading}
                    type="button"
                    className="inline-flex disabled:opacity-20 justify-center rounded-md border border-transparent bg-green-300 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
