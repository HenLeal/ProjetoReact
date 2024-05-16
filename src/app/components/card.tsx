import { Heart, Star } from "lucide-react";
import Link from "next/link";

interface CardProps {
    title: string;
    rating: string;
    imageUrl: string;

}

export function Card({ title, rating, imageUrl }: CardProps) {
    return (
        <div className="flex flex-col items-center w-52 gap-2 relative">
            <Heart className="absolute right-2 top-2" />
            <img className="w-full rounded" src={imageUrl} alt={title} />   
            <h4 className="line-clamp-3 text-center">{title}</h4>
            <div className="flex gap-2">
                <Star className="text-amber-400"/>
                <span className="opacity-50">{rating}</span>
            </div>     
                <a className="bg-cyan-600 px-8 py-2 rounded hover:bg-cyan-900 transition-colors text-gray-50">Detalhes</a>
        
        </div>
    );
}
