import React from 'react'
import classes from './Loader.module.css'
const loading = () => {
  return (
    <div className={classes.base}>
        <img src="img/logo_anim.gif" alt="anim" />
    </div>
  )
}

export default loading