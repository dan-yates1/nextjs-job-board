import logo from "@/assets/tj-logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} width={50} height={50} alt="Tech Jobs logo" />
          {/* <span className="text-2xl text-primary font-black tracking-tight">TECH JOBS</span> */}
        </Link>
        <Button asChild>
          <Link href="/jobs/new">Post a job</Link>
        </Button>
      </nav>
    </header>
  );
}
