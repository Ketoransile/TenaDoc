// import Link from "next/link";
// import { Button } from "./ui/button";

// const navlinks = [
//   {
//     name: "Home",
//     link: "/",
//   },
//   {
//     name: "Find Doctors",
//     link: "find-doctors",
//   },
//   {
//     name: "Blog",
//     link: "blog",
//   },
//   {
//     name: "Dashboard",
//     link: "dashboard",
//   },
// ];
// export const NavBar = () => {
//   return (
//     <div className="px-4 md:px-8 lg:px-12 py-6 sticky top-0 bg-white/90 backdrop-blur-2xl flex items-center justify-between z-50">
//       <div className="flex items-center gap-2">
//         <Link href="/" className="text-blue-600 font-bold text-2xl">
//           TenaDoc
//         </Link>
//       </div>
//       <div className="flex items-center gap-8 text-md">
//         {navlinks.map((link) => (
//           <Link href={link.link} key={link.link}>
//             {link.name}
//           </Link>
//         ))}
//       </div>
//       <div className="flex items-center gap-4 ">
//         {" "}
//         <Button asChild className="bg-white text-black text-md">
//           <Link href="#">Login</Link>
//         </Button>
//         <Button asChild className="bg-blue-600 text-white text-md">
//           <Link href="#">Signup</Link>
//         </Button>
//       </div>
//     </div>
//   );
// };
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { IconType } from "react-icons";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { FaHome, FaStethoscope, FaBlog, FaTachometerAlt } from "react-icons/fa";

type NavLink = {
  name: string;
  link: string;
  Icon: IconType;
};

const navlinks: NavLink[] = [
  { name: "Home", link: "/", Icon: FaHome },
  { name: "Find Doctors", link: "/find-doctors", Icon: FaStethoscope },
  { name: "Blog", link: "/blog", Icon: FaBlog },
  { name: "Dashboard", link: "/dashboard", Icon: FaTachometerAlt },
];

export const NavBar: React.FC = () => {
  return (
    <header className="w-full px-4 md:px-8 lg:px-12 py-4 sticky top-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="w-full flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="text-blue-600 font-extrabold text-2xl">
            TenaDoc
          </Link>
        </div>

        {/* Desktop nav (no icons) */}
        <nav className="hidden md:flex items-center gap-12 text-md">
          {navlinks.map((nl) => (
            <Link
              key={nl.link}
              href={nl.link}
              className="hover:text-blue-600 transition-colors font-medium"
            >
              {nl.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            className="bg-white text-black border border-gray-200 hover:bg-neutral-200"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-500">
            <Link href="/signup">Signup</Link>
          </Button>
        </div>

        {/* Mobile: sheet trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              {/* <Button
                asChild
                aria-label="Open menu"
                className="p-2 rounded-md hover:bg-gray-100 transition"
              > */}
              <FiMenu size={20} />
              {/* </Button> */}
            </SheetTrigger>

            {/* Sheet content: modern mobile menu */}
            <SheetContent side="right" className="w-full max-w-xs">
              {/* Header: brand + close (single close icon only) */}
              <SheetHeader className="flex items-center justify-between px-2">
                <SheetTitle className="text-lg font-bold text-blue-600">
                  TenaDoc
                </SheetTitle>

                {/* single close button */}
                {/* <SheetClose asChild>
                  <button
                    aria-label="Close menu"
                    className="p-2 rounded-md hover:bg-gray-100 transition"
                  >
                    <FiX size={20} />
                  </button>
                </SheetClose> */}
              </SheetHeader>

              <div className="px-4 mt-4">
                {/* Search placeholder (modern touch) */}
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    aria-label="Search"
                    placeholder="Search doctors, specialties..."
                    className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* Nav items (icons shown here only) */}
                <nav className="mt-6 flex flex-col gap-1">
                  {navlinks.map((nl) => {
                    const Icon = nl.Icon;
                    return (
                      <SheetClose key={nl.link} asChild>
                        <Link
                          href={nl.link}
                          className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-50 transition"
                        >
                          <div className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-50 text-blue-600">
                            <Icon />
                          </div>
                          <span className="font-medium">{nl.name}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>

                {/* Divider */}
                <div className="my-6 border-t" />

                {/* Auth actions (stacked, full-width) */}
                <div className="flex flex-col gap-3">
                  <SheetClose asChild>
                    <Link href="/login">
                      <Button
                        asChild
                        className="w-full bg-white text-black border border-gray-200"
                      >
                        <p className="w-full text-center">Login</p>
                      </Button>
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="/signup">
                      <Button asChild className="w-full bg-blue-600 text-white">
                        <p className="w-full text-center">Signup</p>
                      </Button>
                    </Link>
                  </SheetClose>
                </div>

                {/* Optional small footer */}
                <div className="mt-6 text-xs text-gray-500 text-center">
                  © 2025 TenaDoc
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
