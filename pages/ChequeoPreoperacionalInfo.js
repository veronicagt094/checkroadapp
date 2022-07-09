import InputFormulario from "../components/InputFormulario";
import LabelFormulario from "../components/LabelFormulario";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Boton from "../components/Boton";
import Router from "next/router";

export default function ChequeoPreoperacionalInfo() {
  async function diligenciarChequeoForm1(e) {
    e.preventDefault();
    Router.push("/ChequeoPreoperacionalForm1");
    console.log("Next");
  }

  return (
    <div className="bg-fondo h-screen">
      <Header
        text="DILIGENCIAR CHEQUEO PREOPERACIONAL"
        href="/ChequeoPreoperacional"
      ></Header>
      <div className="mx-56 h-96 w-auto place-items-center my-16">
        <form className="shadow-md rounded-lg bg-blanco py-8">
          <div className="flex">
            <input
              className="bg-blanco2 shadow rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-2 mx-4 w-2/3 text-center"
              type="text"
              placeholder="VEHÍCULO"
            />

            <input
              className="bg-blanco2 shadow rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-2 mx-4 w-1/3 text-center"
              type="text"
              placeholder="CONDUCTOR ASIGNADO"
            />
          </div>
          <div className="grid grid-cols-3">
            <LabelFormulario text="Número de placa"></LabelFormulario>
            <LabelFormulario text="Modelo"></LabelFormulario>
            <LabelFormulario text="Nombres"></LabelFormulario>
            <InputFormulario></InputFormulario>
            <InputFormulario></InputFormulario>
            <InputFormulario></InputFormulario>
            <LabelFormulario text="Fecha último chequeo"></LabelFormulario>
            <LabelFormulario text="Color"></LabelFormulario>
            <LabelFormulario text="Categoría de licencia"></LabelFormulario>
            <InputFormulario placeholder="dd-mm-yyyy"></InputFormulario>
            <InputFormulario></InputFormulario>
            <InputFormulario></InputFormulario>
            <LabelFormulario text="Nombre de último conductor"></LabelFormulario>
            <LabelFormulario text="Fecha de diligenciamiento"></LabelFormulario>
            <LabelFormulario text="Fecha de vencimiento de la licencía"></LabelFormulario>
            <InputFormulario></InputFormulario>
            <InputFormulario placeholder="dd-mm-yyyy"></InputFormulario>
            <InputFormulario placeholder="dd-mm-yyyy"></InputFormulario>
          </div>
          <div className="grid grid-rows-2">
            <LabelFormulario text="Marca"></LabelFormulario>
            <input
              className="bg-fondo shadow rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mx-4 w-64"
              type="text"
            />
          </div>

          <div className="text-center mt-4">
            <Boton onClick={diligenciarChequeoForm1} text="SIGUIENTE"></Boton>
          </div>
        </form>
      </div>
      <div className="mt-56">
        <Footer></Footer>
      </div>
    </div>
  );
}
