import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase";

export const LogInForm = () => {

  return (
    <div className="relative mx-10" style={{ height: "95vh" }}>
      <div className="flex h-full flex-wrap items-center justify-center">
        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
          <div className="p-3">
            <h1 className="text-xl font-semibold text-center">
              {" "}
              Iniciar Sesión{" "}
            </h1>
          </div>
          <form>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Email address"
              />
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <input
                type="password"
                className="w-full peer block min-h-[auto] rounded border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-block rounded bg-slate-300 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
