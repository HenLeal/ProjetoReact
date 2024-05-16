import Link from "next/link";

export function NavBar() {
    return (
        <nav className="flex justify-between items-center bg-cyan-900 w-full px-6 py-2 ">
            <Link href="/">
                <h1 className="text-4xl uppercase font-bold text-gray-50">BIBLIOVERSE</h1>
            </Link>
            <Link href="/sobre">
                <h1 className="text-gray-50">SOBRE</h1></Link>
        </nav>
    )
}
