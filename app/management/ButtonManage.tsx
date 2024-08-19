"use client";
import React, { useState } from "react";
import { CiCirclePlus, CiTrash } from "react-icons/ci";
import { FaAngleRight, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FcPlus } from "react-icons/fc";
import { IoMdArrowDropright } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

function ButtonManage() {
  const [isOpenG, setIsOpenG] = useState<boolean>(false);
  return (
    <>
      {isOpenG ? (
        <div className="flex flex-col justify-center lg:justify-normal  items-center lg:items-start gap-2">
          <div className="border mt-4 p-2 w-screen lg:w-96">
            <h2 className="flex items-center justify-between gap-2 text-zinc-950 font-bold ">
              Total de Funcionarios: 2{" "}
              <button className=" font-bold button border bg-green-800 text-white rounded">
                +
              </button>
            </h2>

            <div className="flex flex-col  mt-2 text-sm ">
              <div
                className="border border-slate-200 flex justify-between items-center p-1  buttonWithoutP "
                title="Ver informações"
              >
                <p className="w-32 overflow">Thiago</p>
                <p className="flex items-center border px-1 w-28 justify-between">
                  <span className="text-sm flex items-center gap-2">
                    Dobras <FaAngleRight /> 5
                  </span>{" "}
                </p>
              </div>

              <div className="border border-slate-200 flex justify-between items-center p-1 buttonWithoutP ">
                <p className="w-32 overflow">Micaelle Santos</p>
                <p className="flex items-center border px-1 w-28 justify-between ">
                  <span className="text-sm flex items-center gap-2 ">
                    Dobras <FaAngleRight /> 5
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <button
            className="button bg-red-800 text-white text-sm w-32"
            onClick={() => setIsOpenG(false)}
          >
            Fechar
          </button>
        </div>
      ) : (
        <button
          className="button bg-emerald-800 text-white text-sm"
          onClick={() => setIsOpenG(true)}
        >
          Meus Funcionarios
        </button>
      )}

      {!isOpenG && (
        <button className="button bg-slate-800 text-white text-sm ">
          Sistema de Dobras
        </button>
      )}
      {!isOpenG && (
        <button className="button bg-red-800 text-white text-sm ">
          Vencimento de Produtos
        </button>
      )}
    </>
  );
}

export default ButtonManage;
