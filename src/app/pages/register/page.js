'use client'

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SideBar from "@/app/functions/componentes/SideBar";
import "./styles.css";

export default function Register() {

    const onRegister =  (e) => {
        e.preventDefault();
          toast.success("Usuário cadastrado com sucesso");
      }

return(
    <div>
      <SideBar/>
      <h1>Cadastrar usuário</h1>
      <form onSubmit={onRegister}>
      <input
          placeholder='Nome'
          type="name">
        </input>
        <input
          placeholder='E-mail'
          type="email">
        </input>
        <input
          placeholder='Senha'
          type='password'>
        </input>
        <button>Cadastrar</button>
      </form>
      <ToastContainer/>
    </div>
  )
}