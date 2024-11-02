import Navbar from "../components/navbar"
export default function contact(){
    return(
        <div className="flex flex-col items-center h-full w-screen bg-slate-300">
            <header>
            <Navbar/>
            </header>
        <h2 className="font-bold text-3xl mb-1 mt-24">Contact</h2>
        <p>Cell: +923332804008</p>
        <a href="https://github.com/alijumani94" className="underline">Github</a>
        <a href="https://www.linkedin.com/in/alijumani94/" className="underline">Linkedin</a>
        </div>
    )
}