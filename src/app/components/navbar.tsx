import link from "next/link";
import Link from "next/link";

export default function Navbar(){
    return(
        <div className="h-16 text-lg font-bold bg-slate-400 flex justify-center items-center gap-24 border-2 border-black
         ml-1 mr-1 rounded-full fixed top-0 left-0 right-0 z-10">
        <Link href="/home">Home</Link>
        <br />
        <Link href="/about">About</Link>
        <br />
        <Link href="/contact">Contact</Link>
        <br />
        <Link href="/profile">Profile</Link>
        <br />
        <Link href="/loading">Loading</Link>
        </div>
    )
}