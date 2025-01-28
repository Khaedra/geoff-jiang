// import React from 'react';
// import Link from 'next/link';


// const navItems = [
//     { name: 'contact', href: '#contact' },
//     { name: 'projects', href: '#projects' },
//     { name: 'about', href: '#about' },
//   ]
// const Nav = () => {

//   return (

// <nav className="relative z-10">
// <div className="mx-auto max-w-6xl px-4 py-8">
//   <ul className="flex justify-end space-x-12 text-lg tracking-widest">
//     {navItems.map((item) => (
//       <li key={item.name}>
//         <Link
//           href={item.href}
//           className={`transition-colors hover:text-blue-400 ${activeSection === item.name ? 'text-blue-400' : 'text-blue-500'
//             }`}
//           onClick={() => setActiveSection(item.name)}
//         >
//           {item.name}
//         </Link>
//       </li>
      
//     ))}
//   </ul>
// </div>
// </nav>
//   )
// }