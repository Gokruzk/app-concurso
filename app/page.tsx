import Link from "next/link";

export default function Home() {
  return(
    <div>
      <h1>CONFERENCIAS Y TALLERES</h1>
      <h2>Bienvenidos</h2>
      <Link href="/home">
        <button type="submit">
          INICIAR
        </button>
      </Link>
    </div>
    ) 
}
