'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Michroma, Chakra_Petch } from 'next/font/google'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'

import ProjectCard from '@/components/ui/projectcard'
import About from '@/components/ui/about'
import Contact from '@/components/ui/contact'

const michroma = Michroma({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap', // Improve font loading performance
})

const chakra = Chakra_Petch({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap', // Improve font loading performance
})


const projects = [
  {
    id: 1,
    title: "Machine Learning Barbell Exercise Tracker",
    subtitle: "Python • Pandas • Conda • Matplotlib",
    description: <>
    A <b>machine learning model</b> for barbell exercise classification and repetition counting using 
    <b> accelerometer and gyroscope data</b>. <br/><br/>
    
    The dataset comprised <b>70,000 observations</b> from five participants performing five different exercises: 
    bench press, squat, row, deadlift, and overhead press, collected via a metaMotion wrist sensor. <br/><br/>
    
    Data preprocessing included multiple outlier detection methods (<b>IQR, Chauvenet's criterion, and Local Outlier Factor</b>) 
    and feature engineering techniques such as <b>Butterworth's Low Pass Filter, Principal Component Analysis</b>, 
    and various temporal and frequency abstractions. <br/><br/>
    
    Model selection involved forward feature selection with decision trees and Grid Search optimization across 
    multiple algorithms including <b>Neural Networks, Random Forest, Naive Bayes, and Decision Trees</b>. 
    The final model achieved over <b>99% accuracy and precision</b>.
  </>,
    link: "https://github.com/Khaedra/Fitness-Tracker-ML",
    size: "medium", // Controls card size
    image: "barbell",
    row: "large",
  },
  {
    id: 2,
    title: "Wellspring (NW HackCamp 2024)",
    subtitle: "React • News API • TailwindCSS • NextJS • Figma",
    description: <>Awarded <b>Finalist + Most Accessible Design</b> at NW HackCamp 2024. <br></br><br></br>A health and wellness app built for students to track meals, water, sleep, exercise, and goals. Implemented with the <b>newsAPI</b> to retrieve up to date articles through search.</>,
    link: "https://github.com/RuhaniMittal29/WellSpring",
    size: "medium",
    image: "wellspring",
    award: true,
  },
  {
    id: 3,
    title: "Nutrition Log",
    subtitle: "Java • Java Swing • JComponents",
    description: <>Course Project for CPSC 210.<br></br><br></br> A nutrition log application to track macros and goals across days, targeting gourmands, epicures, and Computer Science Students. Used JUnit for extensive test coverage, fulfilled key user stories, and implemented save functionality via parsing and writing to JSON files. </>,
    link: "https://github.com/Khaedra/Nutrition-Log-App",
    size: "medium",
    image: "nutrition",
  },
  {
    id: 4,
    title: "Portfolio Website",
    subtitle: "Next.js • TailwindCSS • Framer Motion",
    description: "Personal portfolio featuring animated transitions and responsive design. Just what do you think this is?",
    image: "website",
    size: "small",
  },
  {
    id: 5,
    title: "Croak Quest (NW Hacks 2025)",
    subtitle: "C# • Unity • LeapMotion",
    description: <>Awarded <b>Best Beginner Project</b> at NWHacks 2025. <br></br><br></br> An educative 2D platformer on Unity powered by LeapMotion hand tracking technology. <b>Learn ASL</b> while improving hand-eye coordination and fine motor skills. An innovative take on player control in video games and education. </>,
    link: "https://devpost.com/software/croak-quest",
    size: "medium",
    image: "frog",
    award: true, 
  },
];

export default function Component() {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'contact', href: '#contact' },
    { name: 'projects', href: '#projects' },
    { name: 'about', href: '#about' },
  ]

  const socialLinks = [
    { href: "https://github.com/Khaedra", icon: Github, hoverColor: 'hover:text-blue-400' },
    { href: "https://www.linkedin.com/in/geoff-jiang/", icon: Linkedin, hoverColor: 'hover:text-purple-500' },
    { href: "mailto:g.jiang06@gmail.com", icon: Mail, hoverColor: 'hover:text-pink-900' },
    { href: "https://www.instagram.com/geoff_j12/", icon: Instagram, hoverColor: 'hover:text-blue-900' },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#001219] flex flex-col">
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[100px] -top-[400px] h-[800px] w-96 rotate-45 transform bg-gradient-to-br from-[#620057] from-20% to-[#021B56]" />
        <div className="absolute left-[70px] top-[120px] h-[220px] w-8 rotate-45 transform bg-gradient-to-tl from-[#042D85] to-[#41228F] opacity-50" />
        <div className="absolute left-[300px] -top-[50px] h-[280px] w-8 rotate-45 transform bg-[#042D85] opacity-45" />
        <div className="absolute -right-40 -top-44 h-[400px] w-[600px] -rotate-45 transform bg-gradient-to-br from-[#620057] via-[#330D57] to-[#021B56] opacity-50" />
        <div className="absolute top-44 -right-40 h-[500px] w-96 rotate-45 transform bg-gradient-to-br from-[#620057] via-[#330D57] to-[#021B56] opacity-50" />




        <div className="absolute -bottom-52 -right-40 h-[500px] w-96 rotate-45 transform bg-gradient-to-br from-[#620057] via-[#330D57] to-[#021B56] opacity-50" />
        <div className="absolute -bottom-20 -right-40 h-[500px] w-96 rotate-45 transform bg-gradient-to-br from-[#620057] via-[#330D57] to-[#021B56] opacity-50" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <ul className="flex justify-end space-x-12 text-lg tracking-widest">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`transition-colors hover:text-blue-400 ${activeSection === item.name ? 'text-blue-400' : 'text-blue-500'
                    }`}
                  onClick={() => setActiveSection(item.name)}
                >
                  {item.name}
                </Link>
              </li>

            ))}
            <li>
              <Link href="/documents/TechResume2.pdf" download target="_blank" className='transition-colors text-blue-500 hover:text-blue-400'>resume</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-32 mt-10 ">
        <h1 className={`${michroma.className} text-center text-8xl font-bold text-white tracking-wider`}>
          GEOFF
          <div className='border-y-2 relative w-full h-10 bg-transparent text-white text-base mt-8 mb-5 whitespace-nowrap overflow-hidden py-1'>
            <p className='animate-scrolling-text text-lg inline-flex mx-1'>
              / SECOND YEAR COMPUTER SCIENCE STUDENT / ASPIRING SOFTWARE DEVELOPER / UI/UX ENTHUSIAST / FULLSTACK CAPABILITIES
            </p>
            <p className='animate-scrolling-text text-lg inline-flex'>
              / SECOND YEAR COMPUTER SCIENCE STUDENT / ASPIRING SOFTWARE DEVELOPER / UI/UX ENTHUSIAST / FULLSTACK CAPABILITIES
            </p>
          </div>
          <span className='tracking-widest'>JIANG</span>
        </h1>
      </main>

      {/* Social Links */}
      <div className=' relative w-auto h-20 flex space-x-10 z-10 mt-[10%] mb-9 justify-center '>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target='_blank' rel="noopener noreferrer" className={`text-white ${link.hoverColor} hover:scale-110 duration-200`}>
            <link.icon size={40} />
          </a>
        ))}

      </div>

      {/* Projects */}
      <div className='absolute h-[10%] w-[45%] rotate-[35deg] mt-[900px] -ml-52 bg-gradient-to-tl from-[#620057] via-[#330D57] to-[#021B56] opacity-50'></div>
      <div className='absolute h-[5%] w-[25%] rotate-[35deg] mt-[1100px] -ml-52 bg-gradient-to-tl from-[#620057] via-[#330D57] to-[#021B56] opacity-50'></div>
      <h1 id="projects" className={`${michroma.className} text-white text-4xl mt-56 mb-10 mx-10 z-10`}>Projects</h1>


      <div className={`${chakra.className} relative grid grid-cols-2 auto-rows-fr gap-9 w-[80%] h-full p-10 mx-auto mb-24 justify-center align-middle`}>
        <ProjectCard project={projects[0]} />
        <ProjectCard project={projects[1]} />
        <ProjectCard project={projects[2]} />
        <ProjectCard project={projects[4]} />
        <ProjectCard project={projects[3]} />

      </div>


      <h1 id="about" className={`text-center text-4xl text-white mt-28 ${michroma.className}`}>About Me</h1>

      <div className='w-full flex justify-center align-middle'>
        <About />
      </div>

      <div className=' relative w-auto h-20 flex space-x-10 z-10 mt-[10%] mb-9 justify-center '>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target='_blank' rel="noopener noreferrer" className={`text-white ${link.hoverColor} hover:scale-110 duration-200`}>
            <link.icon size={40} />
          </a>
        ))}
      </div>

    </div>
  )
}