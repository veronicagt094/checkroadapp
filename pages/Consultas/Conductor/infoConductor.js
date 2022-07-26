import InputFormulario from "../../../components/InputFormulario";
import LabelFormulario from "../../../components/LabelFormulario";
import { supabase } from "../../../utils/supabaseClient";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EliminarConductorForm({ infoConductor }) {
  const router = useRouter();
  const [conductor, setConductor] = useState([infoConductor.data[0]]);
  console.log(conductor);
  return (
    <div className="bg-fondo h-screen">
      <Header text="CONDUCTOR" href="./"></Header>

      <div className="mx-56 h-96 w-auto place-items-center my-32">
        <form className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8">
          <LabelFormulario text="Nombre"></LabelFormulario>
          <LabelFormulario text="Primer Apellido"></LabelFormulario>
          <InputFormulario
            type="text"
            id="nombre"
            name="nombre"
            value={conductor[0].nombre}
            readonly="readonly"
          ></InputFormulario>
          <InputFormulario
            type="text"
            id="primerApellido"
            name="primerApellido"
            value={conductor[0].primerApellido}
            readonly="readonly"
          ></InputFormulario>
          <LabelFormulario text="Fecha de Nacimiento"></LabelFormulario>
          <LabelFormulario text="Correo Electronico"></LabelFormulario>
          <InputFormulario
            type="text"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={conductor[0].fechaNacimiento}
            readonly="readonly"
          ></InputFormulario>
          <InputFormulario
            type="email"
            id="correo"
            name="correo"
            value={conductor[0].correo}
            readonly="readonly"
          ></InputFormulario>
          <LabelFormulario text="Telefono Celular"></LabelFormulario>
          <LabelFormulario text="Número de documento - Tipo"></LabelFormulario>
          <InputFormulario
            type="text"
            id="telefono"
            name="telefono"
            value={conductor[0].telefono}
            readonly="readonly"
          ></InputFormulario>
          <InputFormulario
            type="text"
            id="documento"
            name="documento"
            value={conductor[0].documento}
            readonly="readonly"
          ></InputFormulario>
        </form>
      </div>

      <div className="py-12">
        <Footer></Footer>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { documento } = context.query;

  const conductor = await supabase
    .from("Persona")
    .select("*")
    .eq("documento", documento);

  return {
    props: {
      infoConductor: conductor,
    },
  };
}
