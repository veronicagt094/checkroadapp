import Boton from "../components/Boton";
import InputFormulario from "../components/InputFormulario";
import LabelFormulario from "../components/LabelFormulario";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function ActualizarConductorForm() {
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
          ACTUALIZAR CONDUCTOR
        </h1>
      </div>

      <div className="mx-56 h-96 w-auto place-items-center my-32">
        <form className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8">
          <LabelFormulario text="Nombre"></LabelFormulario>
          <LabelFormulario text="Apellido"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Fecha de Nacimiento"></LabelFormulario>
          <LabelFormulario text="Correo Electronico"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Telefono Celular"></LabelFormulario>
          <LabelFormulario text="Número de documento - Tipo"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <div className="text-center my-6">
            <Boton text="CANCELAR"></Boton>
          </div>
          <div className="text-center my-6">
            <Boton text="ELIMINAR"></Boton>
          </div>
        </form>
      </div>

      <div className="py-12">
        <Footer></Footer>
      </div>
    </div>
  );
}
