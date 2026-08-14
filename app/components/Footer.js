import React from 'react'

const Footer = () => {
  const currentyear = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-800 mt-24">

<div className="max-w-7xl mx-auto py-10 flex flex-col md:flex-row justify-between items-center">

<p className="text-gray-500">
Copyright &copy; {currentyear} Buy Me a Headphone - All rights reserved!
</p>

<div className="flex gap-6 mt-4 md:mt-0">

<a href="https://www.github.com/Anas-tech022" className="hover:text-violet-400">GitHub</a>

<a href="#" className="hover:text-violet-400">LinkedIn</a>

<a href="#" className="hover:text-violet-400">Twitter</a>

</div>

</div>

</footer>
  )
}

export default Footer
