
import Link from "next/link";

export default function errorpage(){
    return(
        <div className="flex justify-center">
        <div className="flex items-center text-center h-36 w-64 bg-slate-400">
            <h1></h1>
            <p className="font-bold">Error-404 page not found 
                <br /> 
                The url you've entered does not exist.</p>
        </div>
        </div> 
    )
}