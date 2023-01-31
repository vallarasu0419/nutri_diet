import React from 'react'
import '..//footer/HelpFull.css'
import Call from '@mui/icons-material/CallOutlined';
import Mail from '@mui/icons-material/ContactMailOutlined';
import Facebook from '@mui/icons-material/FacebookSharp';
import Twitter from '@mui/icons-material/Twitter';
import Pinterest from '@mui/icons-material/Pinterest';
import LinkedIn from '@mui/icons-material/LinkedIn';

function HelpFull() {
  return (
    <div className='helpfull'>
      <h3 className='helpfullh3'>HelpFull</h3>
      <span className='helpfullspan'></span>
      
      <p><Call className='call'/> +1 (817) *** 3377</p>
      <p><Mail className='mail'/> info@example.com</p>
     <div style={{display:'flex',gap:'10px'}}>
     <div className='helpfacebook'>
      <Facebook sx={{color:"white",padding:'5px',fontSize:'30px'}}/>
      </div>
      <div className='helptwitter'>
      <Twitter sx={{color:"white",padding:'5px',fontSize:'30px'}}/>
      </div>
      <div className='helppin'>
      <Pinterest sx={{color:"white",padding:'5px',fontSize:'30px'}}/>
      </div>
      <div className='helplinkedin'>
      <LinkedIn sx={{color:"white",padding:'5px',fontSize:'30px'}}/>
      </div>
     </div>

    </div>
  )
}

export default HelpFull
