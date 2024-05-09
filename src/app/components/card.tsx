import { Heart, Star } from "lucide-react";
import Link from "next/link";

export function Card(){
    return(
        <div className="flex flex-col items-center w-52 gap-2 relative ">
            <Heart className="absolute right-2 top-2    "/>
            <img className="w-full rounded" src="https://media.themoviedb.org/t/p/w220_and_h330_face/kO6K9zEsKhNyqcrdGTSqAI6jrie.jpg" alt="" />   
            <h4 className="line-clamp-1"> titulo do filme do card</h4>
            <div className="flex gap-2">
                <Star className="text-amber-400"/>
                <span className="opacity-50"> 9.9 </span>
            </div>     
            <Link href= "#" className="bg-blue-900 px-8 py-2 rounded hover:bg-blue-950 transition-colors">detalhes</Link>
        </div>
    )
}