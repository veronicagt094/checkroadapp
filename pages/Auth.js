import { supabase } from "../utils/supabaseClient";
import Boton from "../components/Boton";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Auth() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignIn = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) throw error;
      alert("Sesión iniciada");
      console.log(user);
      console.log(session);
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  const changeForm = () => {
    setIsSignUp((value) => !value);
  };

  return (
    <div className="grid grid-cols-2 xl:mx-20">
      <div className="my-4">
        <h1 className="checkroadLogin mt-20">CheckRoad App</h1>
        <Image src="/logoHS.png" width={400} height={400} alt="Logo HS" />
      </div>

      <div className="bg-blanco shadow-md rounded-lg px-8 py-28 my-28 mx-12">
        <form>
          <h1 className="tituloFormulario">Iniciar sesión</h1>
          <input
            className="shadow appearance-none bg-fondo rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-10"
            type="email"
            placeholder="Ingresar correo"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <input
            className="shadow appearance-none bg-fondo rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-10"
            type="password"
            placeholder="Ingresar contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </form>
        <div className="xl:ml-44 lg:ml-24 mt-4">
          <Boton text="Iniciar sesión"></Boton>
          {/* <Link href="/InicioEmpresa">
            <a className="bg-azul hover:bg-blue-700 text-blanco font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10">
              Prueba Front
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
