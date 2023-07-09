import Image from "next/image";
import Link from "next/link";
import { MdReadMore } from "react-icons/md";
import { TbCubeSend } from "react-icons/tb";
import logo from "@/assets/logo-icon.svg";

export default function Navbar() {
  return (
    <header className="py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <Image src={logo} alt="quotes-logo" priority={false} />
          <h1 className="text-primary hidden sm:block text-2xl md:text-3xl font-bold">
            Quotes
          </h1>
        </div>
        <nav>
          <ul className="list-none text-lg">
            <li>
              <Link
                href="/more-quotes"
                className="flex items-center gap-x-2 text-black hover:text-primary transition-all duration-1000"
              >
                <TbCubeSend size={50} />
                <span className="text-sm font-medium hidden sm:block">
                  More Quotes
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
