import InputFormulario from "../../components/InputFormulario";
import LabelFormulario from "../../components/LabelFormulario";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Boton from "../../components/Boton";

export default function ActualizarEmpresaForm() {
  return (
    <div className="bg-fondo h-screen">
      <Header text="ACTUALIZAR EMPRESA" href="/ActualizarEmpresa"></Header>

      <div className="mx-56 h-96 w-auto place-items-center my-32">
        <form className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8">
          <LabelFormulario text="NIT"></LabelFormulario>
          <LabelFormulario text="Nombre"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Correo Electronico"></LabelFormulario>
          <LabelFormulario text="Número de conductor"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <LabelFormulario text="Número de vehículos"></LabelFormulario>
          <LabelFormulario text="Camara y comercio"></LabelFormulario>
          <InputFormulario></InputFormulario>
          <InputFormulario></InputFormulario>
          <div className="text-center my-6">
            <Boton text="CANCELAR"></Boton>
          </div>
          <div className="text-center my-6">
            <Boton text="ACTUALIZAR"></Boton>
          </div>
        </form>
      </div>

      <div className="py-12">
        <Footer></Footer>
      </div>
    </div>
  );
}
