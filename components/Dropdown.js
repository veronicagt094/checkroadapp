import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";

export default function Dropdown(props) {
  const [selected, setSelected] = useState(props.items[0]);
  console.log(props.items);

  return (
    <div className="bg-fondo rounded-2xl mx-4">
      <Listbox value={selected} onChange={setSelected}>
        <div className="mt-1 text-azulOscuro">
          <Listbox.Button className="w-full cursor-default rounded-full py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="truncate grid grid-cols-2">
              {selected.descripcion}
              <Icon
                icon="heroicons-outline:selector"
                className="ml-36 h-5 w-5"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-60 overflow-auto rounded-md bg-blanco py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {props.items.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.descripcion}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <Icon
                            icon="ant-design:check-outlined"
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
