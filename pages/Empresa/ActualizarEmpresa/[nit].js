import InputFormulario from "../../../components/InputFormulario";
import LabelFormulario from "../../../components/LabelFormulario";
import { supabase } from "../../../utils/supabaseClient";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Boton from "../../../components/Boton";
import { toast } from "../../../utils/toast";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ActualizarEmpresaForm({ infoEmpresa }) {
  const [empresa, setEmpresa] = useState(infoEmpresa.data[0]);
  const router = useRouter();
  const nit = router.query.nit;

  async function actualizarEmpresa(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("Persona")
        .update({
          documento: empresa.documento,
          nombre: empresa.nombre,
          primerApellido: empresa.primerApellido,
          segundoApellido: empresa.segundoApellido,
          direccion: empresa.direccion,
          telefono: empresa.telefono,
          correo: empresa.correo,
        })
        .eq("documento", empresa.documento);

      if (data) {
        toast({
          title: "Conductor Actualizado",
          description: `La empresa con NIT ${infoEmpresa.data[0].documento} ha sido actualizado`,
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
    setEmpresa(() => ({ ...empresa, [e.target.name]: e.target.value }));
    console.log(empresa);
  }

  return (
    <div className="bg-fondo h-screen">
      <Header text="ACTUALIZAR EMPRESA" href="./"></Header>

      <div className="mx-56 h-96 w-auto place-items-center my-32">
        <form
          onSubmit={actualizarEmpresa}
          className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8"
        >
          <LabelFormulario text="NIT"></LabelFormulario>
          <LabelFormulario text="Nombre"></LabelFormulario>
          <InputFormulario
            type="text"
            id="nit"
            name="nit"
            onChange={onChange}
            value={empresa.documento}
          ></InputFormulario>
          <InputFormulario
            type="text"
            id="nombre"
            name="nombre"
            onChange={onChange}
            value={empresa.nombre}
          ></InputFormulario>
          <LabelFormulario text="Correo Electronico"></LabelFormulario>
          <LabelFormulario text="Dirección"></LabelFormulario>
          <InputFormulario
            type="email"
            id="correo"
            name="correo"
            onChange={onChange}
            value={empresa.correo}
          ></InputFormulario>
          <InputFormulario
            type="text"
            id="direccion"
            name="direccion"
            onChange={onChange}
            value={empresa.direccion}
          ></InputFormulario>
          <LabelFormulario text="Número de telefono"></LabelFormulario>
          <LabelFormulario text="Fecha Ingreso"></LabelFormulario>
          <InputFormulario
            type="text"
            id="telefono"
            name="telefono"
            onChange={onChange}
            value={empresa.telefono}
          ></InputFormulario>
          <InputFormulario
            type="text"
            id="fechaIngreso"
            name="fechaIngreso"
            onChange={onChange}
            value={empresa.fechaNacimiento}
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
  const { nit } = params;

  const empresa = await supabase
    .from("Persona")
    .select("*")
    .eq("documento", nit);

  console.log(empresa);

  return {
    props: {
      infoEmpresa: JSON.parse(JSON.stringify(empresa)),
    },
  };
}
