import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="LOGO" w={32} h={32} />
        <span>tedmalanda۵</span>
      </Link>

      {/* mobile menu */}
      <div className="md:hidden">
        {/* mobile button  */}
        <div
          className="cursor-pointer text-3xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☳"}
        </div>

        {/* mobile link list  */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-customBlue transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/posts">Trending</Link>
          <Link to="/posts">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white ">
              Login 🖐️
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/posts">Trending</Link>
        <Link to="/posts">Most Popular</Link>
        <Link to="/">About</Link>
 
        <SignedOut>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white ">
            Login 🖐️
          </button>
        </Link>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
