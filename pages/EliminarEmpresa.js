import Boton from "../components/Boton";
import InputFormulario from "../components/InputFormulario";
import LabelFormulario from "../components/LabelFormulario";
import ListBox from "../components/ListBox";
import Header from "../components/Header";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function EliminarEmpresa() {
  return (
    <div className="bg-fondo h-screen">
      <Header text="Eliminar Empresa"></Header>
      <div className="mx-56 h-96 w-auto place-items-center my-16">
        <form className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8">
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
            <Boton text="Eliminar"></Boton>
          </div>
        </form>
      </div>
      <div className="mt-56">
        <Footer></Footer>
      </div>
    </div>
  );
}
