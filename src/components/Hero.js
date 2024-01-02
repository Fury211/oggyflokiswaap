import React,{useState} from 'react'
import heroimg from '../utils/hero1.webp'
import logo from '../utils/ourlogo.png'
import navlogo from '../utils/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import {navlinks} from '../links/navlinks'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import discordicon from '../utils/discord.png'
import 'react-toastify/dist/ReactToastify.css';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
const Hero = () => {
  const [showNav, setShowNav] = useState(false)
  const notify = () => toast(`pinksale.finance: 25th Dec - 26th Dec! Don't miss this monumental event! `);
  
  return (
    <div className='hero-container'>
      <ToastContainer type='resolved'/>
      <div className={showNav ? "nav-menu show-nav" : "nav-menu"}>
<CancelPresentationIcon onClick={()=> setShowNav(!showNav)}  className='close-btn'/>
        {navlinks?.map((el,i)=>{
          return <a key={i} href={`#${el.path}`}  className='nav-link-item' onClick={()=> setShowNav(!showNav)}>{el.title}</a>
        })}
       <Link to={'/oggyfloki-white-paper'}className='nav-link-item'>WHITE PAPER</Link>
       <a href='https://github.com/expelee-co/Smart-Contract-Audit/blob/main/Oggy%20Floki%20expelee%20audit.pdf' target='_blank' className='nav-link-item'>AUDIT 🎖</a>
       <a href='https://pinksale.notion.site/OGGYFLOKI-KYC-Verification-d9562b054cce4ea8909efb2783532056' target='_blank'  className='nav-link-item'>KYC 🎖</a>
       <a href='https://bscscan.com/address/0x03002eb4de8Ff52018da7f65020da66094166bb6#code' target='_blank' className='nav-link-item'>Contract</a>
       <a href='https://form.jotform.com/233456512659361' target='_blank'  className='nav-link-item'>Career 💻</a>
        <img src={navlogo} alt='logo' 
        style={{marginTop:'1rem'}}/>
      </div>


      <div className='nav-header'>
        <div style={{display:'flex',alignItems:'center'}}>
        <img className='logo' alt='oggyfloki logo' src={logo}/>
        <h2 style={{marginLeft:'0.5rem',opacity:'1', zIndex:'1000'}} >OGGYFLOKI</h2>
        </div>
      
 <div className='inhouse-logo' onClick={() => setShowNav(!showNav)}>
<MenuIcon />
 </div>
      
      </div>
      <img src={heroimg} alt='oggyfloki adventure' className='hero-mainImg'/>
<div className='hero-content'>

  <Link to={'/app-oggyfloki'}>
<button className='playbtn'>PLAY OGGYFLOKI</button>
</Link>
  <div style={{display:'flex',alignItems:'center'}}>
<TelegramIcon className='icons' style={{fontSize:'2.5rem',marginRight:'0.5rem',cursor:'pointer'}} onClick={()=> window.location.href='https://t.me/oggyfloki'}/>
  <TwitterIcon className='icons' style={{fontSize:'2.5rem',marginLeft:'0.5rem',cursor:'pointer'}} onClick={()=> window.location.href='https://twitter.com/OggyFloki'}/>
  <img src={discordicon} alt='discord logo' className='icons' style={{height:'42.5px',marginLeft:'1rem'}} onClick={()=> window.location.href='https://discord.com/invite/t4wJq6HRqv'}/>
  </div>

</div>



                      ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,  centercontainer
<iframe
              src="https://iframe-pancakeswap.netlify.app"
              width="420"
              height="630"
            
            ></iframe>




            
    </div>
  )
}

export default Hero