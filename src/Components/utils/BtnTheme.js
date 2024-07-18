import React from 'react'
import { CgDarkMode } from "react-icons/cg";
function BtnTheme(props) {
  return (
    <div><CgDarkMode onClick={props.changeTheme} className=" fixed bg-main-color  bottom-2  2xl:bottom-5 right-2 2xl:right-5 text-3xl md:text-5xl cursor-pointer text-light-tertiary dark:text-dark-tertiary z-50 " />
</div>
  )
}

export default BtnTheme