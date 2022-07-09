/* eslint-disable react/jsx-no-comment-textnodes */
import Boton from "../components/Boton";
import InputFormulario from "../components/InputFormulario";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Router from "next/router";
import Navbar from "../components/Navbar";

export default function EliminarConductor() {
  async function eliminarConductor(e) {
    e.preventDefault();
    Router.push("/EliminarConductorForm");
    console.log("Next");
  }
  return (
    <div className="flex bg-fondo h-screen">
      <div className="w-1/4">
        <Navbar></Navbar>
      </div>

      <div className="h-96 w-3/4 place-items-center px-24">
        <div className="mb-12 h-10 text-center">
          <h1 className="text-azul text-center text-2xl my-6">
            ELIMINAR CONDUCTOR
          </h1>
        </div>
        <form className="shadow-md rounded-xl bg-blanco grid grid-col-1 py-20 mx-48">
          <div className="text-center">
            <InputFormulario placeholder="Número de documento"></InputFormulario>
          </div>

          <div className="flex py-12 mx-32">
            <div className="text-center mr-4">
              <Boton text="CANCELAR"></Boton>
            </div>

            <div className="text-center">
              <Boton onClick={eliminarConductor} text="BUSCAR"></Boton>
            </div>
          </div>
        </form>
        <div className="mt-48">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
