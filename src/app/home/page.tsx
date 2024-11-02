import Navbar from "../components/navbar"
export default function home(){
    return(
        <div className="flex items-center flex-col h-full w-screen bg-slate-300">
            <header>
            <Navbar />
            </header>
        <h2 className="font-bold text-3xl text-center mt-24">Home</h2>
        <p className="font-bold w-1/3 mt-7 text-center">This is home page, you can access any other page through above mentioned navigation bar.</p>
        </div>
    )
}