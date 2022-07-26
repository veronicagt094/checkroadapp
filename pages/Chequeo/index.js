/* eslint-disable react/jsx-no-comment-textnodes */
import InputFormulario from "../../components/InputFormulario";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Boton from "../../components/Boton";
import Router from "next/router";
import { useState } from "react";

export default function ChequeoPreoperacional() {
  const [chequeo, setChequeo] = useState([]);
  const { documento, placa } = chequeo;

  async function diligenciarChequeo(e) {
    e.preventDefault();

    Router.push({
      pathname: "/Chequeo/infoChequeo",
      query: { documento: chequeo.documento, placa: chequeo.placa },
    });
  }

  function onChange(e) {
    e.preventDefault();
    setChequeo(() => ({ ...chequeo, [e.target.name]: e.target.value }));
  }
  return (
    <div className="flex bg-fondo h-screen">
      <div className="w-1/4">
        <Navbar></Navbar>
      </div>

      <div className="h-96 w-3/4 place-items-center px-24">
        <div className="mb-12 h-10 text-center">
          <h1 className="text-azul text-2xl my-6">
            DILIGENCIAR CHEQUEO PREOPERACIONAL
          </h1>
        </div>

        <form className="shadow-md rounded-xl bg-blanco grid grid-col-1 py-20 mx-48 my-24">
          <div className="text-center">
            <InputFormulario
              id="documento"
              type="text"
              name="documento"
              onChange={onChange}
              value={chequeo.documento}
              placeholder="Número de documento"
            ></InputFormulario>
          </div>
          <div className="text-center">
            <InputFormulario
              id="placa"
              type="text"
              name="placa"
              onChange={onChange}
              value={chequeo.placa}
              placeholder="Número de placa"
            ></InputFormulario>
          </div>

          <div className="flex py-12 mx-32">
            <div className="text-center mr-4">
              <Boton text="CANCELAR"></Boton>
            </div>

            <div className="text-center">
              <Boton onClick={diligenciarChequeo} text="DILIGENCIAR"></Boton>
            </div>
          </div>
        </form>

        <div className="mt-40">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
