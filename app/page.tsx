import LandingText from "@/components/LandingText";
import TopNav from "@/components/TopNav";




import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between gap-5">
      <TopNav/>
      <LandingText/>
    </div>
  );
}
