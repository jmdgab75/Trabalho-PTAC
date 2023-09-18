import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/functions/componentes/ListUser.js";
//import SideBar from "@/app/componentes/SideBar";
import './style.css'


export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div>
            {/* <SideBar/> */}
            <h1> Usuários cadastrados </h1>
            <div className='container'>
            <Suspense fallback={<p>Carregando...</p>}>
            <div className='card'>
                 <ListUsers users={users}/>
                 </div>
            </Suspense>
            </div>
        </div>
    );
};