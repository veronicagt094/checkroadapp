import InputFormulario from "../../components/InputFormulario";
import LabelFormulario from "../../components/LabelFormulario";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Boton from "../../components/Boton";
import { Icon } from "@iconify/react";

export default function CrearVehiculo() {
  return (
    <div className="flex bg-fondo h-screen">
      <div className="w-1/4">
        <Navbar></Navbar>
      </div>

      <div className="mx-56 h-96 w-3/4  place-items-center">
        <div className="mb-12 h-10 text-center">
          <h1 className="text-azul text-2xl my-6">CREAR VEHÍCULO</h1>
        </div>
        <form className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8">
          <LabelFormulario text="Placa"></LabelFormulario>
          <LabelFormulario text="Modelo"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Marca"></LabelFormulario>
          <LabelFormulario text="Color"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Tipo de vehículo"></LabelFormulario>
          <LabelFormulario text="Tipo de placa"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>

          <LabelFormulario text="Municipio de matrícula"></LabelFormulario>
          <div className="mx-52 my-4">
            <Icon icon="entypo:upload" width="60" height="50" color="#4380CC" />
          </div>
          <InputFormulario></InputFormulario>
          <div className="text-center my-2">
            <LabelFormulario text="Subir imagen de vehiculo"></LabelFormulario>
          </div>

          <div className="text-center mt-4">
            <Boton text="Cancelar"></Boton>
          </div>
          <div className="text-center mt-4">
            <Boton text="Crear"></Boton>
          </div>
        </form>
        <div className="mt-16">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
