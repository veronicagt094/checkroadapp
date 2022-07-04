import { supabase } from "../utils/supabaseClient";
import { Icon } from "@iconify/react";

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
      <div className="bg-fondo h-screen grid grid-rows-3 grid-flow-col">
        <div className="grid grid-cols-2 gap-96 place-content-between">
          <button className="p-2 rounded-sm" onClick={handleLogout}>
            <Icon
              icon="charm:menu-hamburger"
              width="50"
              height="50"
              color="#4380CC"
            />
          </button>
          <button className="p-2 rounded-sm" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>

        <div className="flex justify-center my-28">
          <h1>Logo Empresa</h1>
        </div>

        <div className="text-azul content-end flex justify-center my-48">
          <h1 className="text-2xl">CheckRoadApp</h1>
        </div>
      </div>
    </div>
  );
}
