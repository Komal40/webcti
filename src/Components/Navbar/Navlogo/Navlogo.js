import React from 'react'
import cti from '../../Images/cti.png'
import ctii from '../../Images/ctii.png'
import c from '../../Images/ctilogo.png'
import s from '../../Images/skaio.png'
import sk from '../../Images/skaiologo.png'
import skaio from '../../Images/skaiotm.png'
import './Navlogo.css'

export default function Navlogo() {
  return (
    <>
    
    <div className='navlogo'>
    <div className='navlogo_cti'>
      <img src={ctii}/>
    </div>
    <div className="scroll-content">
        <p style={{fontWeight:'600'}}>
        An <span style={{color:'var(--color-primary)'}}>ISO 9001:2015</span>, CE, RoHS Certified Company Trademark Registered,
        Startup India Registered
        </p>
      </div>
    <div className='navlogo_skaio'>
        <img src={skaio}/>
    </div>
    </div>
    </>
  )
}
