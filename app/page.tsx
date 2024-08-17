"use client";
import Image from "next/image";
import Link from "next/link";

import HorizontalMotion from "@/app/motion/HorizontalMotion";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className=" flex justify-between  h-screen    ">
      <HorizontalMotion
        classname={"flex flex-col   w-full justify-center px-8 max-w-2xl "}
      >
        <div>
          <Logo
            classNameMainDiv="flex justify-center items-center gap-2 mb-12 "
            classNameImg="h-32 w-32"
            classNamePerim="text-red-800"
            classNameSuperM="text-green-800"
            classNameH1="text-2xl  border-red-400 border-radius mb-4"
            aditionalText="Sistema de dobras e monitoração de produtos"
            classNameAditionalText="text-sm text-gray-600"
          />
          <form className="flex flex-col gap-2  ">
            <input type="email" placeholder="e-mail do colaborador" />
            <input placeholder="senha de acesso" type="password" />
            <Link href={"Dashboard"}>
              {" "}
              <button className="button text-white px-4 rounded bg-red-900 w-48 ">
                Entrar
              </button>
            </Link>
            <Link href="/PrimeiroAcesso" className="text-slate-950 underline ">
              Primeiro acesso
            </Link>
          </form>
        </div>
      </HorizontalMotion>
      <div className="bg-white hidden md:block">
        <img
          src="/images/making-shop.jpg"
          alt=""
          className="h-screen max-w-full  object-cover"
        />
      </div>
    </main>
  );
}
