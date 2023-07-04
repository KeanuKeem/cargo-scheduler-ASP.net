import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  defaultOption: string;
  options: string[];
  name: string;
  width: string;
}

export default function DropdownField({ defaultOption, options, name, width }: Props) {
  const [option, setOption] = useState(defaultOption);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".6rem",
        width: width,
        marginTop: "2rem"
      }}
    >
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {name}
      </label>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="reletive inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {option}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400 absolute right-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items style={{width: "100%"}} className="absolute ba right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {options.map((opt) => (
                <Menu.Item key={opt}>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={(e) => setOption(e.currentTarget.innerHTML)}
                    >
                      {opt}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
