import Link from "next/link";

 
export default function Home() {
  return (
    <div className="bg-black   bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
        
          <h1 className="text-4xl font-bold">
            Cas Next<br/>Estudo
          </h1>
          <address>
            Rua Espanha 186 <br/>
            Santo Andre - SP - CEP 09210010
          </address>
          <Link href="tel:55554444" className="hover:underline" >
          55554444
          </Link>
 
        </div>
      </main>
    </div>
  );
}
