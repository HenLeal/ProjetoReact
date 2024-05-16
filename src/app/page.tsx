import Link from "next/link";
import { NavBar } from "./components/navbar";
import { Title } from "./components/title";
import { Card } from "./components/card";

export default function Home() {
  return ( // JSX - TSX 
    <main className="flex min-h-screen flex-col ">


      <NavBar />
      <Title>Livros mais lidos</Title>
      <section className="flex gap-10 m-4 flex-wrap">
        <Card
          title="Harry Potter e a Ordem da Fênix"
          rating="9.9"
          imageUrl="https://th.bing.com/th/id/OIP.4h9VeXL5QIJoO2d3jZdlAQHaLS?rs=1&pid=ImgDetMain"       
        />
        <Card
          title="Harry Potter e a Pedra Filosofal"
          rating="7.0"
          imageUrl="https://th.bing.com/th/id/R.dfe07f3d579dffb4ffa68db99c8ecd3f?rik=4tyiimvmvTLtBQ&riu=http%3a%2f%2fdeusmelivro.com%2fwp-content%2fuploads%2f2014%2f11%2fCAPA_Harry_Potter_Pedra_Filosofal.jpg&ehk=zGUMq8DOGuh9a1vmVjRf3ZCGzzg4QgudUeu9Kj6lu1M%3d&risl=&pid=ImgRaw&r=0"       
        />
        <Card
          title="Harry Potter e a Câmara dos segredos"
          rating="5.9"
          imageUrl="https://s3.observador.pt/wp-content/uploads/2020/05/27105914/61040002_hp_camara_segredos-rl.jpg"       
        />


      </section>

      <section>
        <Title>Livros</Title>
      </section>

    </main>
  );
}
