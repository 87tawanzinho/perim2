import React from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <>
      <div className=" mb-12 top-0 p-4 border w-full  justify-between items-center hidden lg:flex">
        <div>
          <Logo
            classNameMainDiv="flex items-center "
            classNameImg="h-10 w-10"
            classNamePerim="text-green-800"
            classNameSuperM="text-red-800"
            classNameH1="text-xl ml-4"
          />
        </div>

        <div className="flex items-center gap-4">
          <p className="button">Vencimento de Produtos</p>
          <p className="button">Sistema de Dobras</p>
          <p className="button">Meu Perfil</p>
        </div>
      </div>

      <div className="flex justify-between items-center fixed  w-full  lg:hidden border p-2">
        <Logo
          classNameMainDiv="flex items-center "
          classNameImg="h-10 w-10"
          classNamePerim="text-green-800"
          classNameSuperM="text-red-800"
          classNameH1="text-md ml-4"
        />

        <div>menu</div>
      </div>
    </>
  );
}

export default Navbar;
