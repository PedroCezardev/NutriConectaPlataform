import React from 'react'
import style from "./Content.module.css"

const Content = ({ children }) => {
  return (
    <div className={style.Content}>
        {children}
    </div>
  )
}

export default Content;