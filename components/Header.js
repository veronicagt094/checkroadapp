import { Icon } from "@iconify/react";
import Link from "next/link";
export default function Boton(props) {
  const text = props.text;
  return (
    <div className="mx-4 grid grid-cols-3 h-10">
      <div className="flex flex-row">
        <button className="flex-row rounded-sm">
          <Link href="/InicioEmpresa">
            <a>
              <Icon
                icon="eva:arrow-ios-back-fill"
                width="50"
                height="50"
                color="#4380CC"
              />
            </a>
          </Link>
        </button>
      </div>
      <h1 className="text-azul text-center text-2xl my-6">{text}</h1>
      {/* <div className="flex flex-row-reverse">
            <button className="flex-row-reverse bg-azul rounded-sm">
              Cerrar sesión
            </button>
          </div> */}
    </div>
  );
}
