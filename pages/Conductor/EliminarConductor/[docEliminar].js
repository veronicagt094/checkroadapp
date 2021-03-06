import InputFormulario from "../../../components/InputFormulario";
import LabelFormulario from "../../../components/LabelFormulario";
import { supabase } from "../../../utils/supabaseClient";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Boton from "../../../components/Boton";
import { toast } from "../../../utils/toast";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EliminarConductorForm({ infoConductor }) {
  const router = useRouter();
  const docEliminar = router.query.docEliminar;
  const [conductor, setConductor] = useState([]);

  async function getConductor() {
    let { data: Conductor, error } = await supabase
      .from("Persona")
      .select("*")
      .eq("documento", docEliminar);
    if (error) console.log("error", error);
    else setConductor(Conductor);
    console.log(conductor);
  }

  async function eliminarConductor(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("Persona")
        .delete()
        .eq("documento", infoConductor.data[0].documento);

      if (data) {
        toast({
          title: "Conductor Eliminado",
          description: `El conductor con cedula ${infoConductor.data[0].documento} ha sido eliminado`,
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

  return (
    <div className="bg-fondo h-screen">
      <Header text="ELIMINAR CONDUCTOR" href="./"></Header>

      <div className="mx-56 h-96 w-auto place-items-center my-32">
        <form
          className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8"
          onSubmit={eliminarConductor}
        >
          <LabelFormulario text="Nombre"></LabelFormulario>
          <LabelFormulario text="Primer Apellido"></LabelFormulario>
          <InputFormulario
            type="text"
            id="nombre"
            name="nombre"
            value={infoConductor.data[0].nombre}
            readonly="readonly"
          ></InputFormulario>
          <InputFormulario
            type="text"
            id="primerApellido"
            name="primerApellido"
            value={infoConductor.data[0].primerApellido}
            readonly="readonly"
          ></InputFormulario>
          <LabelFormulario text="Fecha de Nacimiento"></LabelFormulario>
          <LabelFormulario text="Correo Electronico"></LabelFormulario>
          <InputFormulario
            type="text"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={infoConductor.data[0].fechaNacimiento}
            readonly="readonly"
          ></InputFormulario>
          <InputFormulario
            type="email"
            id="correo"
            name="correo"
            value={infoConductor.data[0].correo}
            readonly="readonly"
          ></InputFormulario>
          <LabelFormulario text="Telefono Celular"></LabelFormulario>
          <LabelFormulario text="N??mero de documento - Tipo"></LabelFormulario>
          <InputFormulario
            type="text"
            id="telefono"
            name="telefono"
            value={infoConductor.data[0].telefono}
            readonly="readonly"
          ></InputFormulario>
          <InputFormulario
            type="text"
            id="documento"
            name="documento"
            value={infoConductor.data[0].documento}
            readonly="readonly"
          ></InputFormulario>
          <div className="text-center my-6">
            <Boton text="CANCELAR"></Boton>
          </div>
          <div className="text-center my-6">
            <Boton type="submit" text="ELIMINAR"></Boton>
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
  const { docEliminar } = params;

  const conductor = await supabase
    .from("Persona")
    .select("*")
    .eq("documento", docEliminar);

  return {
    props: {
      infoConductor: JSON.parse(JSON.stringify(conductor)),
    },
  };
}
