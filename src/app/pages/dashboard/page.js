import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import { ListUser } from "@/app/functions/componentes/ListUser.js";

export default async function Dashboard() {
   let users = getUsers ();
    return (
        <div>
          <Suspense fallback={<p>Carregando...</p>}>
             |<ListUser user={users}/>
          </Suspense>  
        </div>
    );
};