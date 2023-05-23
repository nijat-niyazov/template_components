import { Dialog, Transition } from '@headlessui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Fragment, useState } from 'react';
import { updateCity } from './api';

export default function Modal({ isOpen, closeModal, item }) {
  const [name, setName] = useState(item.name);
  const [capital, setCapital] = useState(item.capital);

  console.log(item);

  const queryClient = useQueryClient();

  const updateCityQuery = useMutation({
    mutationFn: updateCity,

    onMutate: async data => {
      await queryClient.cancelQueries(['cities']);

      const prevData = queryClient.getQueryData(['cities']);

      queryClient.setQueryData(['cities'], oldDataValuesOnDevTools => {
        const updatedIndex = oldDataValuesOnDevTools.findIndex(
          city => city.id === data.id
        );

        oldDataValuesOnDevTools.splice(updatedIndex, 1, data);
      });

      return {
        prevData,
      };
    },
    onError: (_error, _data, context) => {
      queryClient.setQueryData(['cities'], context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['cities']);
      closeModal();
    },
  });

  const handleUpdate = () => {
    const city = { name, capital, id: item.id };
    updateCityQuery.mutate(city);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  Update City
                </Dialog.Title>
                <form className="mt-2">
                  <label htmlFor="title">Name </label>
                  <input
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    className="border-[2px] rounded-xl p-2 block mt-2 mb-6"
                  />

                  <label htmlFor="brand">Brand</label>
                  <input
                    id="brand"
                    value={capital}
                    onChange={e => setCapital(e.target.value)}
                    type="text"
                    className="border-[2px] rounded-xl p-2 block mt-2 mb-6"
                  />
                </form>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
