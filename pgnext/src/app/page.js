import { AnimateIn } from "@/comps/AnimateIn";
import Clicker from "@/comps/Clicker";


export default function Home(){
  return (
    <div>
      <h1>HOME</h1>
      <AnimateIn>
      <h2>This page also has a clicker!!!</h2>
      <Clicker/>
      </AnimateIn>
    </div>
  )
}