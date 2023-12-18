import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
        
          <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container">
      <Link to={'/'} style={{textDecoration:'none'}}><a class="navbar-brand fs-2 font-monospace" ><i class="fa-solid fa-toolbox me-3" style={{color:"white"}}></i>Admin Desk</a></Link>
      
    </div>
  </nav>
    </div>
  )
}

export default Header