import React from "react";
import Navbar from "../components/Navbar";

function page() {
  return (
    <div className="">
      <Navbar />

      <div className=" flex flex-col lg:flex-row justify-center  gap-0 lg:gap-24 items-center p-2">
        <div className="flex flex-col gap-2 lg:gap-8">
          <h2 className="text-3xl font-bold mt-10 text-slate-800 pt-10 ">
            Bom dia, Oscimar!
          </h2>
          <p>Sexta feira, 28 de novembro</p>
          <img
            src="/images/home-photo.jpg"
            alt=""
            className="h-96 w-xl object-cover rounded"
          />
        </div>

        <div className="max-w-auto flex flex-col gap-2 mt-10">
          <p>Gerencie seus colaboradores do Perim de forma simples e eficaz!</p>
          <p>Faça o controle de datas e mercadorias</p>

          <div className="mt-10 flex items-center gap-2">
            <button className="button bg-emerald-800 text-white text-sm">
              Gerenciar Funcionarios
            </button>

            <button className="button bg-red-800 text-white text-sm ">
              Vencimento de Produtos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
