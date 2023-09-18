import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

export default async function Alterar() {
  const onAlterar = async (e) => {
    e.preventDefault();
    toast.success("Os dados do usuário foram alterados");
  };

  return (
    <div className="container">
      <h1>Alterar dados</h1>
      <form onSubmit={onAlterar}>
        <input placeholder="Nome:" type="name" />
        <input placeholder="E-mail:" type="email" />
        <input placeholder="Senha:" type="password" />
        <button>Cadastrar</button>
      </form>
      <ToastContainer />
    </div>
  );
}
