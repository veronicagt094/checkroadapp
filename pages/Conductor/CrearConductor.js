import InputFormulario from "../../components/InputFormulario";
import LabelFormulario from "../../components/LabelFormulario";
import { supabase } from "../../utils/supabaseClient";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Boton from "../../components/Boton";
import { Icon } from "@iconify/react";

export default function CrearConductor({
  tiposDocumentos,
  categoriasConduccion,
}) {
  const [conductor, setConductor] = useState([]);

  const {
    numDocumento,
    nombre,
    primerApellido,
    segundoApellido,
    direccion,
    celular,
    correo,
    fechaLicencia,
  } = conductor;

  const submitContact = async (event) => {
    event.preventDefault();
  };

  function onChange(e) {
    e.preventDefault();
    setConductor(() => ({ ...conductor, [e.target.name]: e.target.value }));
    console.log(conductor);
  }

  async function crearConductor(e) {
    e.preventDefault();
    console.log(conductor);
    const { data } = await supabase
      .from("Persona")
      .insert([
        {
          documento: conductor.numDocumento,
          nombre: conductor.nombre,
          primerApellido: conductor.primerApellido,
          segundoApellido: conductor.segundoApellido,
          direccion: conductor.direccion,
          telefono: conductor.celular,
          correo: conductor.correo,
          // user_id: user.id,
        },
      ])
      .single();
  }

  return (
    <div className="flex bg-fondo h-screen">
      <div className="w-1/4">
        <Navbar></Navbar>
      </div>

      <div className="h-96 w-3/4 place-items-center mx-36">
        <div className="mb-12 h-10 text-center">
          <h1 className="text-azul text-2xl my-6">CREAR CONDUCTOR</h1>
        </div>

        <form
          onSubmit={submitContact}
          className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-4"
        >
          <LabelFormulario text="Número de documento"></LabelFormulario>
          <LabelFormulario text="Tipo de documento"></LabelFormulario>
          <InputFormulario
            name="numDocumento"
            onChange={onChange}
            value={conductor.numDocumento}
          ></InputFormulario>
          <Dropdown items={tiposDocumentos.data}></Dropdown>
          <LabelFormulario text="Nombre"></LabelFormulario>
          <LabelFormulario text="Primer Apellido"></LabelFormulario>
          <InputFormulario
            type="text"
            name="nombre"
            onChange={onChange}
            value={conductor.nombre}
          ></InputFormulario>
          <InputFormulario
            type="text"
            name="primerApellido"
            onChange={onChange}
            value={conductor.primerApellido}
          ></InputFormulario>
          <LabelFormulario text="Segundo Apellido"></LabelFormulario>
          <LabelFormulario text="Fecha de Nacimiento"></LabelFormulario>
          <InputFormulario
            type="text"
            name="segundoApellido"
            onChange={onChange}
            value={conductor.segundoApellido}
          ></InputFormulario>
          <InputFormulario
            type="date"
            name="fechaNacimiento"
            onChange={onChange}
            value={conductor.segundoApellido}
          ></InputFormulario>
          <LabelFormulario text="Correo Electronico"></LabelFormulario>
          <LabelFormulario text="Telefono Celular"></LabelFormulario>
          <InputFormulario
            type="email"
            name="correo"
            onChange={onChange}
            value={conductor.correo}
          ></InputFormulario>
          <InputFormulario
            type="number"
            name="celular"
            onChange={onChange}
            value={conductor.celular}
          ></InputFormulario>
          <LabelFormulario text="Categoria de licencia de conducción"></LabelFormulario>
          <LabelFormulario text="Fecha de vencimiento de licencia"></LabelFormulario>
          <Dropdown items={categoriasConduccion.data}></Dropdown>
          <InputFormulario
            type="date"
            name="fechaLicencia"
            onChange={onChange}
            value={conductor.fechaLicencia}
          ></InputFormulario>
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
            <Boton onClick={crearConductor} text="Crear"></Boton>
          </div>
        </form>
      </div>
      {/* <div className="mt-60">
        <Footer></Footer>
      </div> */}
    </div>
  );
}

export async function getServerSideProps() {
  const responseTiposDocumento = await supabase
    .from("TipoDocumento")
    .select("*");
  const responseCategoriaConduccion = await supabase
    .from("CategoriaConduccion")
    .select("*");

  return {
    props: {
      tiposDocumentos: responseTiposDocumento,
      categoriasConduccion: responseCategoriaConduccion,
    },
  };
}
