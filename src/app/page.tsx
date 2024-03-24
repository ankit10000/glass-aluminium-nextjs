import Headertop from "../components/Headertop";
import Nav from "@/components/Nav";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="">
      <Nav/>
      <Headertop/>
    </div>
  );
}
