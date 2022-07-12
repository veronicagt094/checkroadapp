import LabelHeaderChequeo from "../../components/LabelHeaderChequeo";
import LabelItemChequeo from "../../components/LabelItemChequeo";
import { aws } from "../../utils/credentialsAws";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Boton from "../../components/Boton";
import { toast } from "../../utils/toast";
import Router from "next/router";

export default function ChequeoPreoperacionalForm1() {
  async function enviarCorreo() {
    console.log(aws);
    var AWS = require("aws-sdk");
    AWS.config.update({
      region: "eu-central-1",
      credentials: {
        accessKeyId: "AKIA6JYT2A4CPESIR3VT" ?? "",
        secretAccessKey: "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" ?? "",
      },
    });

    // Create publish parameters
    var params = {
      Message: "Chequeo pre operacional diligenciado" /* required */,
      TopicArn: "arn:aws:sns:eu-central-1:983052191492:Correo",
    };

    // Create promise and SNS service object - no es necesario
    var publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
      .publish(params)
      .promise();

    // Handle promise's fulfilled/rejected states
    publishTextPromise
      .then(function (data) {
        console.log(
          `Message ${params.Message} sent to the topic ${params.TopicArn}`
        );
        console.log("MessageID is " + data.MessageId);
        toast({
          title: "Chequeo enviado",
          description: `Se ha notificado por correo a su superior`,
          status: "success",
          position: "bottom-right",
          duration: 6000,
          isClosable: true,
        });

        Router.push({
          pathname: "../../InicioEmpresa",
        });
      })
      .catch(function (err) {
        console.error(err, err.stack);
      });
  }

  return (
    <div className="bg-fondo h-screen">
      <Header
        text="DILIGENCIAR CHEQUEO PREOPERACIONAL"
        href="/Chequeo/infoChequeo"
      ></Header>
      <div className="mx-36 h-96 w-auto place-items-center my-16">
        <div className="shadow-md rounded-lg bg-blanco grid grid-cols-2 py-8 mt-32">
          <form className="shadow-md rounded-lg mx-4">
            <LabelHeaderChequeo
              num="1"
              text="ESTADO DE PRESENTACIÓN"
            ></LabelHeaderChequeo>
            <LabelItemChequeo
              name="estado1"
              num="1.1"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado2"
              num="1.2"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado3"
              num="1.3"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado4"
              num="1.4"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelHeaderChequeo
              num="2"
              text="ESTADO DE COMODIDAD"
            ></LabelHeaderChequeo>
            <LabelItemChequeo
              name="estado4"
              num="1.1"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado5"
              num="1.2"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado6"
              num="1.3"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado7"
              num="1.4"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelHeaderChequeo
              num="2"
              text="NIVELES Y PERDIDAS DE LÍQUIDOS"
            ></LabelHeaderChequeo>
            <LabelItemChequeo
              name="estado17"
              num="1.1"
              text="Aseo Externo"
            ></LabelItemChequeo>
          </form>
          <form className="shadow-md mx-4 rounded-lG">
            <LabelHeaderChequeo
              num="1"
              text="ESTADO DE PRESENTACIÓN"
            ></LabelHeaderChequeo>
            <LabelItemChequeo
              name="estado8"
              num="1.1"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado9"
              num="1.2"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado10"
              num="1.3"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado11"
              num="1.4"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelHeaderChequeo
              num="2"
              text="ESTADO DE COMODIDAD"
            ></LabelHeaderChequeo>
            <LabelItemChequeo
              name="estado12"
              num="1.1"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado13"
              num="1.2"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado14"
              num="1.3"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelItemChequeo
              name="estado15"
              num="1.4"
              text="Aseo Externo"
            ></LabelItemChequeo>
            <LabelHeaderChequeo
              num="2"
              text="NIVELES Y PERDIDAS DE LÍQUIDOS"
            ></LabelHeaderChequeo>
            <LabelItemChequeo
              name="estado16"
              num="1.1"
              text="Aseo Externo"
            ></LabelItemChequeo>
          </form>
        </div>
        <div className="text-center mt-4">
          <Boton onClick={enviarCorreo} text="Enviar Chequeo"></Boton>
        </div>
      </div>
      <div className="mt-40">
        <Footer></Footer>
      </div>
    </div>
  );
}
