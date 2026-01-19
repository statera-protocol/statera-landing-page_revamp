// import Image from "next/image";

// const NAV_LINKS = [
//   { id: "about", label: "About us" },
//   { id: "product", label: "Product" },
//   { id: "team", label: "Our Team" },
// ];

// const Header = () => {
//   return (
//     <div className="w-full py-2 bg-[#0a0a0a] fixed top-0 z-50 left-0 md:h-24">
//       <div className="container py-0!">
//         <div className="w-full flex justify-between items-center p-px! rounded-full bg-linear-to-r from-[#FF5151B5] via-[#CCC5C500] via-[#C9DEFB55] via-[#E9ECEF80] to-[#177BFDAB]">
//           <header className="container w-full flex justify-between items-center p-3! px-4! rounded-full bg-[#0a0a0a]">
//             <div className="flex gap-6 items-center ml-4">
//               <Image
//                 src="/stateralogo.png"
//                 alt="statera logo"
//                 width={40}
//                 height={40}
//                 className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
//               />
//               <Image
//                 src="/name.png"
//                 alt="statera"
//                 height={24}
//                 width={196}
//                 className="hidden md:flex h-4 w-32 md:h-6 md:w-49"
//               />
//             </div>

//             <ul className="hidden md:flex gap-4 lg:gap-8 *:cursor-pointer">
//               {NAV_LINKS.map((link) => (
//                 <li key={link.id}>{link.label}</li>
//               ))}
//             </ul>

//             <div className="p-px bg-linear-to-r from-[#F80808] via-[#FFFFFF] to-[#2b1de8] rounded-full w-fit">
//               <button className="bg-linear-to-r from-[#050626] via-[#85110d] to-[#0a045a] text-white px-4 py-p md:py-2 md:px-6 rounded-full cursor-pointer font-semibold md:text-md">
//                 Try Testnet
//               </button>
//             </div>
//           </header>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { id: "about", label: "About us" },
  { id: "product", label: "Product" },
  { id: "team", label: "Our Team" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleComingSoon = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    e.preventDefault();
    alert("🚧 Coming soon");
    setOpen(false);
  };

  return (
    <div className="w-full py-2 bg-[#0a0a0a] fixed top-0 z-50 left-0 md:h-24">
      <div className="container py-0!">
        <div className="w-full flex justify-between items-center p-px! rounded-full bg-linear-to-r from-[#FF5151B5] via-[#CCC5C500] via-[#C9DEFB55] via-[#E9ECEF80] to-[#177BFDAB]">
          <header className="container w-full flex justify-between items-center p-3! px-4! rounded-full bg-[#0a0a0a]">
            {/* Logo */}
            <div className="flex gap-6 items-center ml-4">
              <Image
                src="/stateralogo.png"
                alt="statera logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
              />
              <Image
                src="/name.png"
                alt="statera"
                height={24}
                width={196}
                className="hidden md:flex h-4 w-32 md:h-6 md:w-49"
              />
            </div>

            {/* Nav Links */}
            <ul className="hidden md:flex gap-4 lg:gap-8 *:cursor-pointer">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>{link.label}</li>
              ))}
            </ul>

            {/* Testnet Dropdown */}
            <div
              ref={dropdownRef}
              className="relative p-px bg-linear-to-r from-[#F80808] via-[#FFFFFF] to-[#2b1de8] rounded-full w-fit"
            >
              <button
                onClick={() => setOpen(!open)}
                className="bg-linear-to-r from-[#050626] via-[#85110d] to-[#0a045a]
                           text-white px-4 py-p md:py-2 md:px-6 rounded-full
                           cursor-pointer font-semibold md:text-md flex items-center gap-2"
              >
                Try Testnet
                <span
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>

              {open && (
                <div
                  className="absolute right-0 mt-2 min-w-[240px]
                             p-px bg-linear-to-r from-[#F80808] via-[#FFFFFF] to-[#2b1de8]
                             rounded-xl z-50"
                >
                  <div className="bg-[#050626] rounded-xl overflow-hidden">
                    {[
                      "Stablecoin testnet",
                      "Hydrastake testnet",
                      "Launchpad testnet",
                    ].map((label) => (
                      <a
                        key={label}
                        href="#"
                        onClick={handleComingSoon}
                        className="block px-4 py-3 text-white font-medium
                                   hover:bg-[#85110d] transition"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
