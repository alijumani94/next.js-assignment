import Navbar from "../../components/navbar"
// import Image from 'next/image';
import Image from '../public/images/image.jpg';
export default function profile(){
    return(
        <div className="flex items-center flex-col h-full w-screen ">
            <header>
            <Navbar/>
            </header>
            <h2 className="font-bold text-3xl text-center mt-24">Ali's profile</h2>
            <img src="/images/Ali.jpeg" alt="profile-picture" className="w-40 h-40 rounded-full" />
            <h2 className="font-bold mt-5">Education:</h2>
                <li>Bachelours in commerce</li>
                <li className="pl-36">Currently studying AI in governor house sindh</li>
            <h2 className="font-bold mt-5">Work:</h2>
                <li className="pr-7">No work experience.</li>
            </div>
    )
}