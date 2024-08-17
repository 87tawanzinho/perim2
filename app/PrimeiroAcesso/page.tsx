import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className=" flex  flex-col h-screen justify-center items-center ">
      <form action="" className="flex flex-col gap-2">
        <h2>Primeiro Cadastro</h2>
        <input type="text" placeholder="Primeiro Nome" />
        <input type="text" placeholder="E-mail de Acesso" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar Senha" />
        <button className="border bg-green-800 text-gray-100">Avançar</button>
        <Link href={"/"} className="underline back">
          Já tenho uma conta
        </Link>
      </form>
    </main>
  );
}

export default page;
