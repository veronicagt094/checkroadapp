import LabelHeaderChequeo from "../components/LabelHeaderChequeo";
import LabelItemChequeo from "../components/LabelItemChequeo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Boton from "../components/Boton";

export default function ChequeoPreoperacionalForm1() {
  return (
    <div className="bg-fondo h-screen">
      <Header text="DILIGENCIAR CHEQUEO PREOPERACIONAL"></Header>
      <div className="mx-36 h-96 w-auto place-items-center my-16">
        <div className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8 mt-32">
          <form className="shadow-md rounded-lg mx-4">
            <LabelHeaderChequeo
              num="1"
              text="ESTADO DE PRESENTACIÓN"
            ></LabelHeaderChequeo>
            <LabelItemChequeo num="1.1" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.2" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.3" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.4" text="Aseo Externo"></LabelItemChequeo>
            <LabelHeaderChequeo
              num="2"
              text="ESTADO DE COMODIDAD"
            ></LabelHeaderChequeo>
            <LabelItemChequeo num="1.1" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.2" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.3" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.4" text="Aseo Externo"></LabelItemChequeo>
            <LabelHeaderChequeo
              num="2"
              text="NIVELES Y PERDIDAS DE LÍQUIDOS"
            ></LabelHeaderChequeo>
            <LabelItemChequeo num="1.1" text="Aseo Externo"></LabelItemChequeo>
          </form>
          <form className="shadow-md mx-4 rounded-lG">
            <LabelHeaderChequeo
              num="1"
              text="ESTADO DE PRESENTACIÓN"
            ></LabelHeaderChequeo>
            <LabelItemChequeo num="1.1" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.2" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.3" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.4" text="Aseo Externo"></LabelItemChequeo>
            <LabelHeaderChequeo
              num="2"
              text="ESTADO DE COMODIDAD"
            ></LabelHeaderChequeo>
            <LabelItemChequeo num="1.1" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.2" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.3" text="Aseo Externo"></LabelItemChequeo>
            <LabelItemChequeo num="1.4" text="Aseo Externo"></LabelItemChequeo>
            <LabelHeaderChequeo
              num="2"
              text="NIVELES Y PERDIDAS DE LÍQUIDOS"
            ></LabelHeaderChequeo>
            <LabelItemChequeo num="1.1" text="Aseo Externo"></LabelItemChequeo>
          </form>
        </div>
        <div className="text-center mt-4">
          <Boton text="SIGUIENTE"></Boton>
        </div>
      </div>
      <div className="mt-48">
        <Footer></Footer>
      </div>
    </div>
  );
}
