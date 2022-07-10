import { supabase } from "../utils/supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function InicioEmpresa() {
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <div className="flex bg-fondo h-screen grid-flow-col">
        <div className="w-1/4">
          <Navbar></Navbar>
        </div>
        <div className="h-96 w-3/4 place-items-center mx-36">
          {/* <button className="p-2 rounded-sm" onClick={handleLogout}>
            Cerrar sesión
          </button> */}
          <div className="flex justify-center my-28">
            <Image src="/logoHS.png" width={400} height={400} alt="Logo HS" />
          </div>
          <div className="mt-30">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}
