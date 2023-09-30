import Link from "next/link"
import { FaFacebook,FaLinkedin, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-violet-700 to-fuchsia-800 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">x0n1L</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link className="text-white/90 hover:text-white" href="https://www.facebook.com/xon1l/">
                        <FaFacebook />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://t.ly/Mqmp">
                        <FaLaptop />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://github.com/tronglinh23">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/l%C4%A9nh-nguy%E1%BB%85n-7bb867256/">
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
        </nav>
    )
}