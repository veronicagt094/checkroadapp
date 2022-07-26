import InputFormulario from "../../../components/InputFormulario";
import Boton from "../../../components/Boton";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Router from "next/router";
import { useState } from "react";

export default function EliminarEmpresa() {
  const [numDoc, setNumDoc] = useState([]);
  const { nit } = numDoc;

  async function eliminarEmpresa(e) {
    e.preventDefault();
    Router.push({
      pathname: "./EliminarEmpresa/[nit]",
      query: { nit: numDoc.nit },
    });
  }

  function onChange(e) {
    e.preventDefault();
    setNumDoc(() => ({ ...numDoc, [e.target.name]: e.target.value }));
  }

  return (
    <div className="flex bg-fondo h-screen">
      <div className="w-1/4">
        <Navbar></Navbar>
      </div>

      <div className="h-96 w-3/4 place-items-center px-24">
        <div className="mb-12 h-10 text-center">
          <h1 className="text-azul text-center text-2xl my-6">
            ELIMINAR EMPRESA
          </h1>
        </div>

        <form className="shadow-md rounded-xl bg-blanco grid grid-col-1 py-20 mx-48 my-24">
          <div className="text-center">
            <InputFormulario
              id="nit"
              type="text"
              name="nit"
              onChange={onChange}
              value={numDoc.nit}
              placeholder="NIT"
            ></InputFormulario>
          </div>

          <div className="flex py-12 mx-32">
            <div className="text-center mr-4">
              <Boton text="CANCELAR"></Boton>
            </div>

            <div className="text-center">
              <Boton onClick={eliminarEmpresa} text="BUSCAR"></Boton>
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
