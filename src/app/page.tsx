import { getWeather } from "@/lib/getWeather";

export default async function Home() {

  // data fetching check
  const weather = await getWeather("Cambridge,UK");

  console.log(weather); 

  return <div>Check terminal</div>;
}