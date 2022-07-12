import InputFormulario from "../../../components/InputFormulario";
import LabelFormulario from "../../../components/LabelFormulario";
import { supabase } from "../../../utils/supabaseClient";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Boton from "../../../components/Boton";
import { toast } from "../../../utils/toast";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ActualizarConductorForm({ infoConductor }) {
  const [conductor, setConductor] = useState(infoConductor.data[0]);
  const router = useRouter();
  const numDoc = router.query.numDoc;

  async function actualizarConductor(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("Persona")
        .update({
          documento: conductor.documento,
          nombre: conductor.nombre,
          primerApellido: conductor.primerApellido,
          segundoApellido: conductor.segundoApellido,
          direccion: conductor.direccion,
          telefono: conductor.celular,
          correo: conductor.correo,
        })
        .eq("documento", conductor.documento);

      if (data) {
        toast({
          title: "Conductor Actualizado",
          description: `El conductor con cedula ${infoConductor.data[0].documento} ha sido actualizado`,
          status: "success",
          position: "bottom-right",
          duration: 9000,
          isClosable: true,
        });
        e.target.reset();
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  function onChange(e) {
    e.preventDefault();
    setConductor(() => ({ ...conductor, [e.target.name]: e.target.value }));
    console.log(conductor);
  }
  return (
    <div className="bg-fondo h-screen">
      <Header text="ACTUALIZAR CONDUCTOR" href="./"></Header>

      <div className="mx-56 h-96 w-auto place-items-center my-32">
        <form
          className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8"
          onSubmit={actualizarConductor}
        >
          <LabelFormulario text="Nombre"></LabelFormulario>
          <LabelFormulario text="Primer Apellido"></LabelFormulario>
          <InputFormulario
            type="text"
            id="nombre"
            name="nombre"
            onChange={onChange}
            value={conductor.nombre}
          ></InputFormulario>
          <InputFormulario
            type="text"
            id="primerApellido"
            name="primerApellido"
            onChange={onChange}
            value={conductor.primerApellido}
          ></InputFormulario>
          <LabelFormulario text="Fecha de Nacimiento"></LabelFormulario>
          <LabelFormulario text="Correo Electronico"></LabelFormulario>
          <InputFormulario
            type="text"
            id="fechaNacimiento"
            name="fechaNacimiento"
            onChange={onChange}
            value={conductor.fechaNacimiento}
          ></InputFormulario>
          <InputFormulario
            type="email"
            id="correo"
            name="correo"
            onChange={onChange}
            value={conductor.correo}
          ></InputFormulario>
          <LabelFormulario text="Telefono Celular"></LabelFormulario>
          <LabelFormulario text="Número de documento - Tipo"></LabelFormulario>
          <InputFormulario
            type="text"
            id="telefono"
            name="telefono"
            onChange={onChange}
            value={conductor.telefono}
          ></InputFormulario>
          <InputFormulario
            type="text"
            id="documento"
            name="documento"
            onChange={onChange}
            value={conductor.documento}
          ></InputFormulario>
          <div className="text-center my-6">
            <Boton text="CANCELAR"></Boton>
          </div>
          <div className="text-center my-6">
            <Boton type="submit" text="ACTUALIZAR"></Boton>
          </div>
        </form>
      </div>

      <div className="py-12">
        <Footer></Footer>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { numDoc } = params;

  const conductor = await supabase
    .from("Persona")
    .select("*")
    .eq("documento", numDoc);

  console.log(conductor);

  return {
    props: {
      infoConductor: JSON.parse(JSON.stringify(conductor)),
    },
  };
}
