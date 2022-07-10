import { Disclosure } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";
import React from "react";

function SideNavbar() {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const Menus = [
    {
      title: "Conductor",
      spacing: true,
      icon: "fa:drivers-license",
      submenu: true,
      submenusItems: [
        {
          title: "Crear Conductor",
          link: `/Conductor/CrearConductor`,
        },
        { title: "Eliminar Conductor", link: "EliminarConductor" },
        { title: "Actualizar Conductor", link: "ActualizarConductor" },
      ],
    },
    {
      title: "Administrador",
      icon: "carbon:enterprise",
      submenu: true,
      submenusItems: [
        { title: "Crear Empresa", link: "CrearEmpresa" },
        { title: "Eliminar Empresa", link: "EliminarEmpresa" },
        { title: "Actualizar Empresa", link: "ActualizarEmpresa" },
      ],
    },
    {
      title: "Vehiculo",
      icon: "bxs:car",
      submenu: true,
      submenusItems: [
        { title: "Crear Vehículo", link: "CrearVehiculo" },
        { title: "Eliminar Vehículo", link: "EliminarVehiculo" },
        { title: "Actualizar Vehículo", link: "ActualizarVehiculo" },
      ],
    },
    { title: "Consultas", icon: "ant-design:search-outlined" },
    {
      title: "Chequeo Preoperacional",
      icon: "carbon:analytics",
      link: "ChequeoPreoperacional",
    },
    {
      title: "Cerrar sesión",
      spacing: true,
      icon: "fe:logout",
      link: "Auth",
    },
  ];
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-fondo hover:text-azulOscuro focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <Icon
            icon="ci:hamburger"
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div
          className={`bg-blanco text-azulOscuro h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          <Icon
            icon="akar-icons:arrow-left"
            className={`text-3xl bg-fondo rounded-full absolute -right-3 top-9 border border-azulOscuro cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className=" mt-2">
            <div className="inline-flex mb-2  items-center gap-4 pl-2 rounded-md group cursor-pointer  m-auto">
              <Icon
                icon="bi:menu-button"
                className="text-2xl block float-left cursor-pointer"
              />
              <h1 className={`origin-left font-medium ${!open && "scale-0"}`}>
                Menú
              </h1>
            </div>
          </div>

          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`hover:bg-fondo text-sm flex items-center gap-x-24 cursor-pointer rounded-md ${
                    menu.spacing ? "mt-9" : "mt-2"
                  }`}
                ></li>
                <span>
                  <Icon
                    icon={menu.icon}
                    className="text-2xl block float-left cursor-pointer mr-2"
                  />
                </span>
                <Link
                  // href={`/${encodeURIComponent(menu.link)}`}
                  href={`${encodeURIComponent(JSON.stringify(menu.link))}`}
                >
                  <a
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </a>
                </Link>
                {menu.submenu && (
                  <Icon
                    icon="gridicons:dropdown"
                    className={`${subMenuOpen && "rotate-180"}`}
                    onClick={() => {
                      setSubMenuOpen(!subMenuOpen);
                    }}
                  />
                )}
                {menu.submenu && subMenuOpen && open && (
                  <ul>
                    {menu.submenusItems.map((submenusItem, index) => (
                      <li
                        key={index}
                        className="hover:bg-fondo text-sm flex items-center gap-x-24 p-2 px-5 cursor-pointer rounded-md"
                      >
                        <Link
                          href={`/${encodeURIComponent(submenusItem.link)}`}
                        >
                          <a className="">{submenusItem.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
