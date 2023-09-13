import React from 'react'

const SideBar = () => {
  return (
    <div>
        <div className="   flex items-center justify-end">
        <ul>
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="text-[#737475]">
              All Internee
            </Link>
          </li>

          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar