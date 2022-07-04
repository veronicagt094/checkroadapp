/* eslint-disable react/jsx-no-comment-textnodes */
import Boton from "../components/Boton";
import InputFormulario from "../components/InputFormulario";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Header from "../components/Header";

export default function ActualizarVehiculo() {
  return (
    <div className="bg-fondo h-screen">
      <Header text="Actualizar Vehículo"></Header>
      <div className="flex justify-center">
        <div className="h-96 w-2/5 place-items-center my-40 px-24">
          <form className="shadow-md rounded-xl bg-blanco grid grid-col-1 py-20">
            <div className="flex w-96 mx-20">
              <InputFormulario placeholder="Número de placa"></InputFormulario>
            </div>

            <div className="flex py-12 mx-20">
              <div className="text-center mr-4">
                <Boton text="CANCELAR"></Boton>
              </div>

              <div className="text-center">
                <Boton text="BUSCAR"></Boton>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
