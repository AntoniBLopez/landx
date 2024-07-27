/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
"use client";
import { getSession } from "@/app/api/session/getSession";
import { loginSession } from "@/app/api/session/loginSession";
import { addUser } from "@/app/api/users/addUser";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/types";
import { useEffect, useState } from "react";

export default function Page({ formData }: { formData: any}) {

  useEffect(() => {
    async function c() {
      const result = await getSession(localStorage.getItem('session')!!)
      if (result.session === true) window.location.assign('/')
    }
    c()
  }, [])

  const initialFormData: LoginForm = {
    name: formData?.name ?? "",
    email: formData?.email ?? "",
    password: formData?.password ?? ""
  };

  const [formdata, setFormData] = useState<LoginForm>(initialFormData);
  const [reg, setReg] = useState(true);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  // Envio de datos
  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    try {
      if (reg) {
        try {
          const result = await addUser({
            name: formdata.name!!,
            email: formdata.email,
            password: formdata.password
          });
          if (result?.result === 'done') {
            localStorage.setItem('session', result.sessionId!!)
            localStorage.setItem('username', result.user!!)
            window.location.assign('/create')
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        try {
          const result = await loginSession(formdata.email, formdata.password);
          if (result?.result === 'done') {
            localStorage.setItem('session', result.info!!)
            localStorage.setItem('username', result.user!!)
            window.location.assign('/create')
          }
        } catch (error) {
          console.log(error)
        }
      }
      // Manejo de éxito, como redireccionar o mostrar un mensaje
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      // Manejo de error, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <form className="mt-28 w-max p-4 rounded-lg mx-auto text-center justify-center bg-black/5" onSubmit={handleSend}>
      <h1 className="text-center font-thin text-2xl sm:text-4xl text-gray-700 dark:text-white mb-2 shadow-white">
        {reg ? 'REGISTER' : 'LOG IN'}
      </h1>
      <fieldset className="flex flex-col">
        {reg && (
          <label className="flex flex-col w-52 mx-auto my-2">
            <h1 className="text-left text-sm sm:lg text-gray-600 dark:text-gray-300 shadow-white">Username</h1>
            <input
              className="h-[48px] py-2 px-6 rounded-sm bg-black/5 dark:bg-white/5"
              name="name"
              value={formdata.name!!}
              onChange={handleFormChange}
              type="text"
              placeholder="username"
            />
          </label>
        )}
        <label className="flex flex-col w-52 mx-auto my-2">
          <h1 className="text-left text-sm sm:lg text-gray-600 dark:text-gray-300 shadow-white">Email</h1>
          <input
            className="h-[48px] py-2 px-6 rounded-sm bg-black/5 dark:bg-white/5"
            name="email"
            value={formdata.email}
            onChange={handleFormChange}
            type="email"
            placeholder="example@mail.com"
          />
        </label>
        <label className="flex flex-col w-52 mx-auto my-2">
          <h1 className="text-left text-sm sm:lg text-gray-600 dark:text-gray-300 shadow-white">Password</h1>
          <input
            className="h-[48px] py-2 px-6 rounded-sm bg-black/5 dark:bg-white/5"
            name="password"
            value={formdata.password}
            onChange={handleFormChange}
            type="password"
            placeholder="password"
          />
        </label>
        <Button type="submit" variant={'ghost'}>
          {reg ? 'Register' : 'Log in'}
        </Button>
        <h6 onClick={() => setReg(prev => !prev)} className="text-xs cursor-pointer pt-1">
          {reg ? 'I already have an account!' : `I don't have an account.`}
        </h6>
      </fieldset>
      <BackgroundBeams className="z-[-90]" />
    </form>
  );
}
