import { supabase } from "../utils/supabaseClient";
import { Disclosure } from "@headlessui/react";
import { toast } from "../utils/toast";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import React from "react";

// const Menus = [
//   {
//     title: "Conductor",
//     spacing: true,
//     icon: "fa:drivers-license",
//     submenu: true,
//     submenusItems: [
//       {
//         title: "Crear Conductor",
//         link: `/Conductor/CrearConductor`,
//       },
//       { title: "Eliminar Conductor", link: "/Conductor/EliminarConductor" },
//       { title: "Actualizar Conductor", link: "/Conductor/ActualizarConductor" },
//     ],
//   },
//   {
//     title: "Administrador",
//     icon: "carbon:enterprise",
//     submenu: true,
//     submenusItems: [
//       { title: "Crear Empresa", link: "/Empresa/CrearEmpresa" },
//       { title: "Eliminar Empresa", link: "/Empresa/EliminarEmpresa" },
//       { title: "Actualizar Empresa", link: "/Empresa/ActualizarEmpresa" },
//     ],
//   },
//   {
//     title: "Vehiculo",
//     icon: "bxs:car",
//     submenu: true,
//     submenusItems: [
//       { title: "Crear Vehículo", link: "/Vehiculo/CrearVehiculo" },
//       { title: "Eliminar Vehículo", link: "/Vehiculo/EliminarVehiculo" },
//       { title: "Actualizar Vehículo", link: "/Vehiculo/ActualizarVehiculo" },
//     ],
//   },
//   {
//     title: "Consultas",
//     icon: "ant-design:search-outlined",
//     submenu: true,
//     submenusItems: [
//       { title: "Consultar Conductor", link: "/Consultas/Conductor" },
//       { title: "Consultar Vehículo", link: "/Vehiculo/EliminarVehiculo" },
//       { title: "Consultar Empresa", link: "/Vehiculo/ActualizarVehiculo" },
//     ],
//   },
//   {
//     title: "Chequeo Preoperacional",
//     icon: "carbon:analytics",
//     link: "/Chequeo",
//   },
// ];
const administrador = [
  {
    title: "Administrador",
    spacing: false,
    icon: "carbon:enterprise",
    submenu: true,
    submenusItems: [
      { title: "Crear Empresa", link: "/Empresa/CrearEmpresa" },
      { title: "Eliminar Empresa", link: "/Empresa/EliminarEmpresa" },
      { title: "Actualizar Empresa", link: "/Empresa/ActualizarEmpresa" },
    ],
  },
];

const empresa = [
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
      { title: "Eliminar Conductor", link: "/Conductor/EliminarConductor" },
      { title: "Actualizar Conductor", link: "/Conductor/ActualizarConductor" },
    ],
  },
  {
    title: "Vehiculo",
    spacing: false,
    icon: "bxs:car",
    submenu: true,
    submenusItems: [
      { title: "Crear Vehículo", link: "/Vehiculo/CrearVehiculo" },
      { title: "Eliminar Vehículo", link: "/Vehiculo/EliminarVehiculo" },
      { title: "Actualizar Vehículo", link: "/Vehiculo/ActualizarVehiculo" },
    ],
  },
  {
    title: "Consultas",
    spacing: false,
    icon: "ant-design:search-outlined",
    submenu: true,
    submenusItems: [
      { title: "Consultar Conductor", link: "/Consultas/Conductor" },
      { title: "Consultar Vehículo", link: "/Vehiculo/EliminarVehiculo" },
      { title: "Consultar Empresa", link: "/Vehiculo/ActualizarVehiculo" },
    ],
  },
];
const conductor = [
  {
    title: "Chequeo Preoperacional",
    spacing: false,
    icon: "carbon:analytics",
    link: "/Chequeo",
  },
];

function SideNavbar() {
  const [open, setOpen] = useState(true);
  const [Menus, setMenu] = useState([]);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  // console.log(Menus);
  useEffect(() => {
    getInfomenu();
  }, []);

  async function getInfomenu() {
    try {
      const user = supabase.auth.user({});
      const conductores = await supabase
        .from("Persona")
        .select("*")
        .eq("correo", user.email);

      const idTipoUsuario = conductores.data[0].idTipoUsuario;

      if (idTipoUsuario == 1) {
        setMenu([empresa]);
      } else if (idTipoUsuario == 2) {
        console.log(conductor);
        setMenu([...conductor]);
      } else if (idTipoUsuario == 3) {
        setMenu([administrador]);
      }
      console.log(Menus);
    } catch (error) {
      alert(error.error_description || error.message);
    }
  }
  const handleSignOut = async () => {
    try {
      // const { error } = await supabase.auth.signOut();
      getInfomenu();
      toast({
        title: "Sesión cerrada",
        description: `La sesión se ha cerrado`,
        status: "error",
        position: "bottom-right",
        duration: 9000,
        isClosable: true,
      });

      Router.push({
        pathname: "/",
      });
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

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
                  className={`hover:bg-fondo text-sm flex items-center gap-x-24 cursor-pointer rounded-md 
                  ${menu.spacing ? "mt-9" : "mt-2"}`}
                ></li>
                <span>
                  <Icon
                    icon={menu.icon}
                    className="text-2xl block float-left cursor-pointer mr-2"
                  />
                </span>
                {menu.link ? (
                  <Link href={menu.link}>
                    <a
                      className={`text-base font-medium flex-1 ${
                        !open && "hidden"
                      }`}
                    >
                      {menu.title}
                    </a>
                  </Link>
                ) : (
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                )}
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
                        <Link href={submenusItem.link}>
                          <a>{submenusItem.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>

          <div className=" mt-10">
            <div className="inline-flex mb-2  items-center gap-4 pl-2 rounded-md group cursor-pointer  m-auto">
              <Icon
                icon="fe:logout"
                className="text-2xl block float-left cursor-pointer"
              />
              <h1 className={`origin-left font-medium ${!open && "scale-0"}`}>
                <a onClick={handleSignOut}>Cerrar sesión</a>
              </h1>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
