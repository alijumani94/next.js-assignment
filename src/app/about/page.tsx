import Navbar from "../components/navbar"
export default function about(){
    return(
        <div className="flex flex-col items-center h-full w-screen bg-slate-300">
            <header>
            <Navbar/>
            </header>
        <h2 className="font-bold text-3xl mt-24">About</h2>
        <p className="font-bold w-1/3 mt-7 text-center">This is my assignment project in which i had to create 5 pages and style them with tailwind css.</p>
        </div>
    )
}