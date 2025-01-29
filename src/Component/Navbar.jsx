import React from 'react'



function Navbar({handleAnimation}) {
 
  const handelScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="bg-black w-full hidden sm:flex  h-16 sticky top-0">
      <nav className="flex flex-row  items-center justify-end w-full cursor-pointer">
        <a onClick={() => handelScroll('intro')} className="px-4 text-white hover:text-gray-400">Intro</a>
       <a onClick={() => { handleAnimation(); handelScroll('ido')}}  className="px-4 text-white hover:text-gray-400">I do</a> 
        <a onClick={() => handelScroll('skills')} className="px-4 text-white hover:text-gray-400">Skills</a>
        <a onClick={() => handelScroll('project')} className="px-4 text-white hover:text-gray-400">Projects</a>
      </nav>
    </div>
  )
}

export default Navbar


// import React, { useState } from 'react';

// function Navbar({ handleAnimation }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handelScroll = (id) => {
//     document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false); // Close the menu when a link is clicked
//   };

//   return (
//     <div className="bg-black w-full flex h-16 sticky top-0 z-50">
//       {/* Navbar */}
//       <nav className="flex items-center justify-between w-full px-4 md:px-8">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <a onClick={() => handelScroll('intro')} className="cursor-pointer">
//             MyPortfolio
//           </a>
//         </div>

//         {/* Hamburger Menu Icon */}
//         <div
//           className="text-white text-2xl cursor-pointer md:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? '✖' : '☰'}
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-4">
//           <a
//             onClick={() => handelScroll('intro')}
//             className="px-4 text-white hover:text-gray-400"
//           >
//             Intro
//           </a>
//           <a
//             onClick={() => {
//               handleAnimation();
//               handelScroll('ido');
//             }}
//             className="px-4 text-white hover:text-gray-400"
//           >
//             I do
//           </a>
//           <a
//             onClick={() => handelScroll('skills')}
//             className="px-4 text-white hover:text-gray-400"
//           >
//             Skills
//           </a>
//           <a
//             onClick={() => handelScroll('project')}
//             className="px-4 text-white hover:text-gray-400"
//           >
//             Projects
//           </a>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden">
//           <a
//             onClick={() => handelScroll('intro')}
//             className="text-white hover:text-gray-400"
//           >
//             Intro
//           </a>
//           <a
//             onClick={() => {
//               handleAnimation();
//               handelScroll('ido');
//             }}
//             className="text-white hover:text-gray-400"
//           >
//             I do
//           </a>
//           <a
//             onClick={() => handelScroll('skills')}
//             className="text-white hover:text-gray-400"
//           >
//             Skills
//           </a>
//           <a
//             onClick={() => handelScroll('project')}
//             className="text-white hover:text-gray-400"
//           >
//             Projects
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;
