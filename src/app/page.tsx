import Header from "@/components/layout/Header";
import SearchBar from "@/components/search/SearchBar";


export default function Home() {
  return (
    <main className="bg-slate-900 text-white min-h-screen">
      <Header/>
      <SearchBar/>
    </main>
  );
}
