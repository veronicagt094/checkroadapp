import InputFormulario from "../../components/InputFormulario";
import LabelFormulario from "../../components/LabelFormulario";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Boton from "../../components/Boton";

export default function ActualizarConductorForm() {
  return (
    <div className="bg-fondo h-screen">
      <Header text="ACTUALIZAR CONDUCTOR" href="/ActualizarConductor"></Header>

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
