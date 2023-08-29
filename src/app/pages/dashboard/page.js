import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import  ListUser from "@/app/functions/componentes/ListUser.js";
//import ".."
 
export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div>
          <Suspense fallback={<p>Carregando...</p>}>
             |<ListUser users={users}/>
          </Suspense>  
        </div>
    );
};