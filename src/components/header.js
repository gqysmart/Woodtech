import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Header = ({ siteTitle }) => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(cur => !cur)
  }
  return (
    <header className="flex justify-between items-center h-24 max-w-[1240px] m-auto px-4 text-white">
      <h1 className="text-3xl font-bold text-[#00df9a] ">WoodTech</h1>
      <ul className="hidden lg:flex ">
        <li className="p-4">The Company</li>
        <li className="p-4">Products</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Sustainable Construction</li>
        <li className="p-4">Documentation</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className=" block lg:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full  pt-16  border-r border-gray-900 ease-in-out duration-500 lg:hidden"
            : "fixed left-[-100%] lg:hidden "
        }
      >
        <ul className=" p-4 uppercase divide-y-2">
          <li className="p-4 ">The Company</li>
          <li className="p-4 ">Products</li>
          <li className="p-4 ">Projects</li>
          <li className="p-4 ">Sustainable Construction</li>
          <li className="p-4 ">Documentation</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
