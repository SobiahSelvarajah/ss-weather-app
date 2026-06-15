import Header from "@/components/layout/Header";
import SearchBar from "@/components/search/SearchBar";


export default function Home() {


  return (
    <main className="flex flex-col bg-slate-900 text-white min-h-screen">
      <Header/>
      <section className="flex flex-1 items-center px-5 md:justify-center">
        <div className="-translate-y-16">
          <SearchBar/>
        </div>
      </section>
    </main>
  );
}
