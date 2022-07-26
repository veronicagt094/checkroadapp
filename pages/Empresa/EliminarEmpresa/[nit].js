import Boton from "../../components/Boton";
import InputFormulario from "../../components/InputFormulario";
import LabelFormulario from "../../components/LabelFormulario";
import Header from "../../components/Header";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function EliminarEmpresaForm({ infoEmpresa }) {
  const [empresa, setEmpresa] = useState(infoEmpresa.data[0]);
  const router = useRouter();
  const nit = router.query.nit;

  function onChange(e) {
    e.preventDefault();
    setEmpresa(() => ({ ...empresa, [e.target.name]: e.target.value }));
    console.log(empresa);
  }

  return (
    <div className="bg-fondo h-screen">
      <Header text="ELIMINAR EMPRESA" href="/EliminarEmpresa"></Header>

      <div className="mx-56 h-96 w-auto place-items-center my-32">
        <form className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8">
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
            name="nit"
            onChange={onChange}
            value={empresa.documento}
          ></InputFormulario>
          <LabelFormulario text="Correo Electronico"></LabelFormulario>
          <LabelFormulario text="Número de conductor"></LabelFormulario>
          <InputFormulario
            type="text"
            id="nit"
            name="nit"
            onChange={onChange}
            value={empresa.documento}
          ></InputFormulario>
          <InputFormulario
            type="text"
            id="nit"
            name="nit"
            onChange={onChange}
            value={empresa.documento}
          ></InputFormulario>
          <LabelFormulario text="Número de vehículos"></LabelFormulario>
          <LabelFormulario text="Camara y comercio"></LabelFormulario>
          <InputFormulario
            type="text"
            id="nit"
            name="nit"
            onChange={onChange}
            value={empresa.documento}
          ></InputFormulario>
          <InputFormulario
            type="text"
            id="nit"
            name="nit"
            onChange={onChange}
            value={empresa.documento}
          ></InputFormulario>
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
