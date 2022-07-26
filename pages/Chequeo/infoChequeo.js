import InputFormulario from "../../components/InputFormulario";
import LabelFormulario from "../../components/LabelFormulario";
import { supabase } from "../../utils/supabaseClient";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Boton from "../../components/Boton";
import { useRouter } from "next/router";
import Router from "next/router";
import { useState } from "react";

export default function ChequeoPreoperacionalInfo({
  infoConductor,
  infoVehiculo,
}) {
  const [conductor, setConductor] = useState(infoConductor.data[0]);
  const [vehiculo, setVehiculo] = useState(infoVehiculo.data[0]);
  const router = useRouter();
  const docEliminar = router.query.docEliminar;

  async function diligenciarChequeoForm1(e) {
    e.preventDefault();
    Router.push("./ChequeoPreoperacionalForm1");
    console.log("Next");
  }

  return (
    <div className="bg-fondo h-screen">
      <Header
        text="DILIGENCIAR CHEQUEO PREOPERACIONAL"
        href="/ChequeoPreoperacional"
      ></Header>
      <div className="mx-56 h-96 w-auto place-items-center my-16">
        <form className="shadow-md rounded-lg bg-blanco py-8">
          <div className="flex">
            <input
              className="bg-blanco2 shadow rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-2 mx-4 w-2/3 text-center"
              type="text"
              placeholder="VEHÍCULO"
            />

            <input
              className="bg-blanco2 shadow rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-2 mx-4 w-1/3 text-center"
              type="text"
              placeholder="CONDUCTOR ASIGNADO"
            />
          </div>
          <div className="grid grid-cols-3">
            <LabelFormulario text="Número de placa"></LabelFormulario>
            <LabelFormulario text="Modelo"></LabelFormulario>
            <LabelFormulario text="Nombre"></LabelFormulario>
            <InputFormulario
              type="text"
              id="placa"
              name="placa"
              value={vehiculo.placa}
              readonly="readonly"
            ></InputFormulario>
            <InputFormulario
              type="text"
              id="modelo"
              name="modelo"
              value={vehiculo.modelo}
              readonly="readonly"
            ></InputFormulario>
            <InputFormulario
              type="text"
              id="nombre"
              name="nombre"
              value={conductor.nombre}
              readonly="readonly"
            ></InputFormulario>
            <LabelFormulario text="Fecha último chequeo"></LabelFormulario>
            <LabelFormulario text="Color"></LabelFormulario>
            <LabelFormulario text="Categoría de licencia"></LabelFormulario>
            <InputFormulario placeholder="dd-mm-yyyy"></InputFormulario>
            <InputFormulario
              type="text"
              id="fechaChequeo"
              name="fechaChequeo"
              value={vehiculo.color}
              readonly="readonly"
            ></InputFormulario>
            <InputFormulario
              type="text"
              id="color"
              name="color"
              value="B1"
              readonly="readonly"
            ></InputFormulario>
            <LabelFormulario text="Nombre de último conductor"></LabelFormulario>
            <LabelFormulario text="Fecha de diligenciamiento"></LabelFormulario>
            <LabelFormulario text="Fecha de vencimiento de la licencía"></LabelFormulario>
            <InputFormulario
              type="text"
              id="nombre"
              name="nombre"
              value=""
              readonly="readonly"
            ></InputFormulario>
            <InputFormulario
              type="text"
              id="fechaDiligenciamiento"
              name="fechaDiligenciamiento"
              value=""
              readonly="readonly"
              placeholder="dd-mm-yyyy"
            ></InputFormulario>
            <InputFormulario
              type="text"
              id="primerApellido"
              name="primerApellido"
              value={conductor.primerApellido}
              readonly="readonly"
              placeholder="dd-mm-yyyy"
            ></InputFormulario>
          </div>
          <div className="grid grid-rows-2">
            <LabelFormulario text="Marca"></LabelFormulario>
            <input
              value={vehiculo.marca}
              className="bg-fondo shadow rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mx-4 w-64"
              type="text"
            />
          </div>

          <div className="text-center mt-4">
            <Boton onClick={diligenciarChequeoForm1} text="SIGUIENTE"></Boton>
          </div>
        </form>
      </div>
      <div className="mt-56">
        <Footer></Footer>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { documento, placa } = context.query;

  const conductor = await supabase
    .from("Persona")
    .select("*")
    .eq("documento", documento);

  const vehiculo = await supabase
    .from("Vehiculo")
    .select("*")
    .eq("placa", placa);

  return {
    props: {
      infoConductor: conductor,
      infoVehiculo: vehiculo,
    },
  };
}
