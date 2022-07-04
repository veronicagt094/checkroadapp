import Boton from "../components/Boton";
import InputFormulario from "../components/InputFormulario";
import LabelFormulario from "../components/LabelFormulario";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function CrearConductor() {
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
        <h1 className="text-azul text-center text-2xl my-6">CREAR CONDUCTOR</h1>
        {/* <div className="flex flex-row-reverse">
            <button className="flex-row-reverse bg-azul rounded-sm">
              Cerrar sesión
            </button>
          </div> */}
      </div>

      <div className="mx-56 h-96 w-auto place-items-center my-16">
        <form className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8">
          <LabelFormulario text="Número de documento"></LabelFormulario>
          <LabelFormulario text="Tipo de documento"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Nombre"></LabelFormulario>
          <LabelFormulario text="Primer Apellido"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Segundo Apellido"></LabelFormulario>
          <LabelFormulario text="Fecha de Nacimiento"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Correo Electronico"></LabelFormulario>
          <LabelFormulario text="Telefono Celular"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Categoria de licencia de conducción"></LabelFormulario>
          <LabelFormulario text="Fecha de vencimiento de licencia"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <div className="mx-52 my-4">
            <Icon icon="entypo:upload" width="60" height="50" color="#4380CC" />
          </div>
          <div className="mx-52 my-4">
            <Icon icon="entypo:upload" width="60" height="50" color="#4380CC" />
          </div>
          <div className="text-center my-2">
            <LabelFormulario text="Subir imagen del conductor"></LabelFormulario>
          </div>
          <div className="text-center my-2">
            <LabelFormulario text="Subir imagen de la licencia de conducción"></LabelFormulario>
          </div>
          <div className="text-center">
            <Boton text="Cancelar"></Boton>
          </div>
          <div className="text-center">
            <Boton text="Crear"></Boton>
          </div>
        </form>
      </div>
      <div className="mb-4">
        <Footer></Footer>
      </div>
    </div>
  );
}
