/* eslint-disable react/jsx-no-comment-textnodes */
import Boton from "../components/Boton";
import InputFormulario from "../components/InputFormulario";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ChequeoPreoperacional() {
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
          DILIGENCIAR CHEQUEO PREOPERACIONAL
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="h-96 w-2/5 place-items-center my-40 px-24">
          <form className="shadow-md rounded-xl bg-blanco grid grid-col-1 py-20">
            <div className="flex w-96 mx-20">
              <InputFormulario placeholder="Número de documento"></InputFormulario>
            </div>
            <div className="flex w-96 mx-20 mt-6">
              <InputFormulario placeholder="Número de placa"></InputFormulario>
            </div>

            <div className="flex py-12 mx-16">
              <div className="text-center mr-4">
                <Boton text="CANCELAR"></Boton>
              </div>

              <div className="text-center">
                <Boton text="DILIGENCIAR"></Boton>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
