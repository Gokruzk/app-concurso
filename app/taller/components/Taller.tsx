import Link from "next/link";

export const Taller = () => {
  return (
    <div className="relative mx-10 p-30" style={{ height: "95vh" }}>
      <div className="flex h-full flex-wrap items-center justify-center">
        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
          <div className="p-3">
            <h1 className="text-xl font-semibold text-center">Crear Taller</h1>
          </div>
          <form>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <div className="my-3 flex flex-wrap items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  Información de Instructor
                </p>
              </div>
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="inline-block rounded min-h-[4] w-1000 border bg-transparent py-[0.3rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Título"
                />
                <input
                  type="text"
                  className="inline-block rounded min-h-[auto] mx-2 border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Nombre"
                />
              </div>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <div className="my-3 flex flex-wrap items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  Fecha
                </p>
              </div>

              <input
                type="date"
                className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              />
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <div className="my-3 flex flex-wrap items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  Hora Inicio
                </p>
              </div>
              <input
                type="time"
                className="w-full peer block min-h-[auto] rounded border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              />
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <div className="my-3 flex flex-wrap items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  Hora Final
                </p>
              </div>
              <input
                type="time"
                className="w-full peer block min-h-[auto] rounded border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <div className="my-3 flex flex-wrap items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  Área Tecnológica
                </p>
              </div>
              <select
                name="select"
                required
                className="w-full inline-block rounded min-h-[4] border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              >
                <option value="value1">Sitemas</option>
                <option value="value2">Electrónica</option>
                <option value="value3">Telecomunicaciones</option>
                <option value="value4">Diseño Gráfico</option>
              </select>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <div className="my-3 flex flex-wrap items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  Máximo de Participantes
                </p>
              </div>
              <input
                type="number"
                className="w-full peer block min-h-[auto] rounded border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              />
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <div className="my-3 flex flex-wrap items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  Costo por participantes
                </p>
              </div>
              <input
                type="number"
                className="w-full peer block min-h-[auto] rounded border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-block rounded bg-slate-400 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
