/* eslint-disable react/jsx-no-comment-textnodes */
import Boton from "../components/Boton";
import InputFormulario from "../components/InputFormulario";
import LabelFormulario from "../components/LabelFormulario";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ConsultaVehiCond() {
  return (
    <div className="bg-fondo h-screen">
      <div className="mx-4 grid grid-cols-3 h-10">
        <div className="flex flex-row">
          <button className="flex-row rounded-sm">
            <Link href="/InicioEmpresa">
              <a>
                <Icon
                  icon="eva:arrow-ios-back-fill"
                  width="50"
                  height="50"
                  color="#4380CC"
                />
              </a>
            </Link>
          </button>
        </div>
        <h1 className="text-azul text-center text-2xl my-6">
          CONSULTA DE VEHÍCULOS O CONDUCTORES
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="h-96 w-auto place-items-center my-40 px-24">
          <form className="shadow-md rounded-xl bg-blanco grid grid-cols-2 py-20 px-4">
            <LabelFormulario text="Consulta por placa"></LabelFormulario>
            <LabelFormulario text="Consulta por documento de identidad"></LabelFormulario>
            <InputFormulario></InputFormulario>
            <InputFormulario></InputFormulario>
            <div className="text-center mt-6">
              <Boton text="BUSCAR VEHICULO"></Boton>
            </div>
            <div className="text-center mt-6">
              <Boton text="BUSCAR CONDUCTOR"></Boton>
            </div>
            <div className="flex py-12 mx-20"></div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
