import React from 'react'

function Footer() {
  return (
    <div className='bg-primary text-center py-2' >

        <div className='pt-2'>
        <i class="fa-brands fa-whatsapp me-2 fs-4" style={{color:'black'}}></i>
        <i class="fa-brands fa-instagram me-2  fs-4" style={{color:'black'}}></i>
        <i class="fa-brands fa-facebook me-2  fs-4" style={{color:'black'}}></i>
        <i class="fa-brands fa-twitter me-2  fs-4" style={{color:'black'}}></i>
        <i class="fa-brands fa-linkedin me-2  fs-4" style={{color:'black'}}></i>
        <i class="fa-brands fa-github me-2  fs-4" style={{color:'black'}}></i>

        </div>
        <p style={{color:"black"}}>copyright &copy;</p>
    </div>
  )
}

export default Footer