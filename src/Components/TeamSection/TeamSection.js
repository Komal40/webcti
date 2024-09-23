
import React, { useRef } from 'react'
import './TeamSection.css'
import neha from '../Images/neha.jpg'
import naveen from '../Images/naveen.jpg'
import seema from '../Images/seema.jpg'
import sunil from '../Images/sunil.jpeg'
import vikram from '../Images/vikram.jpg'
import ceo from '../Images/ceo.jpg'
import manoj from '../Images/manoj.jpg'
import bagga from '../Images/bagga.jpg'
import ansari from '../Images/ansari.jpg'




export function TeamSection(){

    const teamRef = useRef(null);

  const scrollLeft = () => {
    teamRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
  };

  const scrollRight = () => {
    teamRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
  };

const details=[
    {
        img:manoj,
        name:"Manoj Singhmar(CA)",
        occupation:"Chartered Accountant"
    },
    {
        img:sunil,
        name:"Sunil",
        occupation:"General Manager"   
    },
    {
        img:ceo,
        name:"Joginder Boora",
        occupation:"Business Development Manager"   
    },
    {
        img:seema,
        name:"Seema Rani",
        occupation:"Plant Head"   
    },
    // {
    //     img:ansari,
    //     name:"Abdul Raheem Ansari",
    //     occupation:"R & D Head"   
    // },
    {
        img:vikram,
        name:"Vikram Kumar",
        occupation:"Senior Engineer"   
    }, 
    // {
    //     img:neha,
    //     name:"Neha (HR)",
    //     occupation:"Resource Management"   
    // },
    {
        img:bagga,
        name:"Bagga Singh",
        occupation:"Tool Room Incharge"   
    },
    {
        img:naveen,
        name:"Naveen Bhardwaj",
        occupation:"Sales & Marketing Manager"   
    }
]

    return(
        <>
        {/* <div className='teams__'></div> */}
        <div id='team__section'>
        {/* <h3 style={{display:'flex',  justifyContent:'center', color:'white'}}><strong>Meet Our Team</strong></h3> */}
        
        <div className="team__heading ">
          <h2 style={{color:'white'}}>
            OUR <span style={{ color: "var(--color-primary)" }}>TEAM</span>
          </h2>
        </div>

        <div className='Team_parent items' ref={teamRef}>
           {details.map(ele=>(
            <div className='Team_card'>
            <img src={ele.img}/>
                <h5>{ele.name}</h5>
                <p>{ele.occupation}</p>
            </div>
           ))}

           {/* <div className={styles.parent}>
                {Array.from(Array(10)).map(ele=>(
                    <div className={styles.card}></div>
                ))}
           </div> */}
        </div>
        <button className="scroll-btn left" onClick={scrollLeft}>{'<'}</button>
        <button className="scroll-btn right" onClick={scrollRight}>{'>'}</button>
        </div>
        {/* <div className='teams__'></div> */}
        </>
    )
}




