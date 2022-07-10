import { supabase } from "../utils/supabaseClient";

import { useState, useEffect } from "react";
import InicioEmpresa from "./InicioEmpresa";
import Auth from "./Auth";

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(_event, session);
      setSession(session);
    });
  }, []);

  return ( 
      <div className="bg-fondo h-screen font-sans">
        {session != null ? <InicioEmpresa /> : <Auth />}
      </div>
  );
}
