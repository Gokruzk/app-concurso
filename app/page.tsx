import Link from "next/link";

export default function Home() {
  "use client";
  return (
    <div className="align-content: center">
      <header>
        <title>App Concurso</title>
      </header>
      <div className="relative mx-10 content-center" style={{ height: "95vh" }}>
        <div className="flex h-full flex-wrap items-center justify-center">
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <div className="p-3">
              <h1 className="text-xl font-semibold text-center">
                CONFERENCIAS Y TALLERES{" "}
              </h1>
              <h1 className="text-xl font-semibold text-center">
                BIENVENIDOS{" "}
              </h1>
            </div>
            <form>
              <Link href="/home">
                <button
                  type="submit"
                  className="w-full inline-block rounded bg-slate-300 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  INICIAR
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
