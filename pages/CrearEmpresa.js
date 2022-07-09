import InputFormulario from "../components/InputFormulario";
import LabelFormulario from "../components/LabelFormulario";
import ListBox from "../components/ListBox";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Boton from "../components/Boton";
import { Icon } from "@iconify/react";

export default function CrearEmpresa() {
  return (
    <div className="flex bg-fondo h-screen">
      <div className="w-1/4">
        <Navbar></Navbar>
      </div>
      <div className="h-96 w-3/4 place-items-center mx-36">
        <div className="mb-12 h-10 text-center">
          <h1 className="text-azul text-2xl my-6">CREAR EMPRESA</h1>
        </div>

        <form className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-4 my-20">
          <LabelFormulario text="NIT"></LabelFormulario>
          <LabelFormulario text="Nombre"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Correo Electrónico"></LabelFormulario>
          <LabelFormulario text="Número de conductores"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Número de vehículos"></LabelFormulario>
          <div className="mx-52 my-4">
            <Icon icon="entypo:upload" width="60" height="50" color="#4380CC" />
          </div>
          <InputFormulario></InputFormulario>
          <div className="text-center my-2">
            <LabelFormulario text="Cámara y comercio"></LabelFormulario>
          </div>

          <div className="text-center mt-4">
            <Boton text="Cancelar"></Boton>
          </div>
          <div className="text-center mt-4">
            <Boton text="Crear"></Boton>
          </div>
        </form>
        <div className="mt-36">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
