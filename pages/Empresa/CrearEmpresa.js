import InputFormulario from "../../components/InputFormulario";
import LabelFormulario from "../../components/LabelFormulario";
import { createStandaloneToast } from "@chakra-ui/toast";
import { supabase } from "../../utils/supabaseClient";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Boton from "../../components/Boton";
import { useState } from "react";

export default function CrearEmpresa() {
  const [empresa, setEmpresa] = useState([]);
  const { nit, nombre, direccion, telefono, correo } = empresa;
  const { ToastContainer, toast } = createStandaloneToast();

  function onChange(e) {
    e.preventDefault();
    setEmpresa(() => ({ ...empresa, [e.target.name]: e.target.value }));
    console.log(empresa);
  }

  async function crearEmpresa(e) {
    e.preventDefault();
    console.log(empresa);
    const { data } = await supabase
      .from("Persona")
      .insert([
        {
          documento: empresa.nit,
          nombre: empresa.nombre,
          direccion: empresa.direccion,
          telefono: empresa.telefono,
          correo: empresa.correo,
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
          <h1 className="text-azul text-2xl my-6">CREAR EMPRESA</h1>
        </div>

        <form className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-4 my-20">
          <LabelFormulario text="NIT"></LabelFormulario>
          <LabelFormulario text="Nombre"></LabelFormulario>
          <InputFormulario
            type="text"
            name="nit"
            onChange={onChange}
            value={empresa.nit}
          ></InputFormulario>
          <InputFormulario
            type="text"
            name="nombre"
            onChange={onChange}
            value={empresa.nombre}
          ></InputFormulario>
          <LabelFormulario text="Correo Electrónico"></LabelFormulario>
          <LabelFormulario text="Dirección"></LabelFormulario>
          <InputFormulario
            type="email"
            name="correo"
            onChange={onChange}
            value={empresa.correo}
          ></InputFormulario>
          <InputFormulario
            type="text"
            name="direccion"
            onChange={onChange}
            value={empresa.direccion}
          ></InputFormulario>
          {/* <div className="grid"> */}
          <LabelFormulario text="Teléfono"></LabelFormulario>
          <InputFormulario
            type="number"
            name="telefono"
            onChange={onChange}
            value={empresa.telefono}
          ></InputFormulario>
          {/* </div> */}
          {/* <div className="mx-52 my-4">
            <Icon icon="entypo:upload" width="60" height="50" color="#4380CC" />
          </div> */}
          {/* <div className="text-center my-2">
            <LabelFormul ario text="Cámara y comercio"></LabelFormulario>
          </div> */}

          <div className="text-center mt-4">
            <Boton text="Cancelar"></Boton>
          </div>
          <div className="text-center mt-4">
            <Boton onClick={crearEmpresa} text="Crear"></Boton>
          </div>
        </form>
        <div className="mt-36">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
