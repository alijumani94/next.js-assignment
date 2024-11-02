import Navbar from "../components/navbar";
import Link from "next/link";

export default function profile(){
    return(
        <div className="flex items-center flex-col h-full w-screen">
            <header>
            <Navbar/>
            </header>
        <h2 className="font-bold text-3xl text-center mt-24 mb-7">Profile</h2>
        <Link href="/profile/ali-profile" className="underline mb-6"> Ali's Profile</Link>
        </div>
    )
}