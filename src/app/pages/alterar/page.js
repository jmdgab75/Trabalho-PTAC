'use client'

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default async function Alterar() {

    const onAlterar = async (e) => {
        e.preventDefault();
          toast.success("Os dados do usuário foram alterados");
      }

return(
    <div>
      <h1>Alterar dados</h1>
      <form onSubmit={onAlterar}>
      <input
          placeholder='Nome:'
          type="name">
        </input>
        <input
          placeholder='E-mail:'
          type="email">
        </input>
        <input
          placeholder='Senha:'
          type='password'>
        </input>
        <button>Cadastrar</button>
      </form>
      <ToastContainer/>
    </div>
  )
}