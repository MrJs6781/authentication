import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets : ['latin'],
  weight : "600"
})

export default function Home() {
  return (
    <main className="flex h-full justify-center items-center bg-gradient-to-r from-sky-400 to-blue-800 min-h-screen">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className={cn("text-white text-[40px]" , poppins.className)}>🔐 Auth</h1>
        <p className="text-[24px] text-gray-100">A Simple Authentication Service</p>
        <Button variant='secondary' size='lg'>Sign In</Button>
      </div>
    </main>
  );
}
