import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1>Home</h1>
      
        <UserButton/>
      <Button>
        nepo
      </Button>
    </div>
  );
}
