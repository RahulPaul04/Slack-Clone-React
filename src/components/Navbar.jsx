import React, { useEffect, useState } from 'react'
import Dropdown from "./Dropdown.jsx"
import "../styles/nav.css"

function Navbar() {

  const [pos,setPos] = useState(0)
  const [y,sety] = useState(0)
  const [mobwidth,setmobwidth] = useState(0)
  let pos_val = pos?"fixed":"relative"
  let rad = pos?50:0
  let shadow = pos?0.3 :0
  
  useEffect(() =>{
    window.addEventListener('scroll',() =>{
      if(window.scrollY>100 && window.scrollY<270){
          sety(-120)
      }
      else{
        sety(0)
      }
      if(window.scrollY>270){
        setPos(1)
      }
      else{
        setPos(0)
      }
    })
  },[])

  return (
    <div className='nav-container' style={{position:`${pos_val}`,width:"100%",backgroundColor:"rgba(0,0,0,0)",transform:`translateY(${y}%)`}}>
      <div className='d-flex align-items-center ms-lg-5 me-lg-5 ms-3 me-3 mt-3 ps-3 pe-3 justify-content-between navbar' style={{borderRadius:`${rad}px`,boxShadow: `0px 4px 8px 0px rgba(0, 0, 0, ${shadow})`}} >
          <div className='d-flex gap-3 align-items-center'>
            <div className="image-fluid p-3"><img src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png" alt="" /></div>
            <div className="options d-flex gap-3 r">
                <Dropdown name="Features"/>
                <Dropdown name="Solutions"/>
                <div><a style={{color:"black",textDecoration:"none",fontWeight:"700"}}  href="">Enterprise</a></div>
                <Dropdown name="Resource"/>
                <div><a style={{color:"black",textDecoration:"none",fontWeight:"700"}} href="">Pricing</a></div>
            </div>
          </div>
          <div className='buttons d-flex gap-2 align-items-center'>
            <div className="search"><img style={{height:"30px"}} className='img-fluid' src="src/images/search.png" alt="" /></div>
            <button className='btn'style={{backgroundColor:"#611f69",color:'white'}} >Get Started For Free</button>
            <div style={{display:"none",cursor:"pointer"}} onClick={() => setmobwidth(100)} className="hamburger"><img style={{height:"30px"}} src="src/images/Hamburger-icon.png" alt="" className="img-fluid" /></div>
          </div>
      </div>
      <div className='mobile-nav' style={{position:"fixed",height:"100dvh",backgroundColor:"white",width:`${mobwidth}%`,top:"0",overflow:"hidden"}}>
          <div className="mobile-nav-heading d-flex justify-content-between align-items-center p-3">
                <div className="image-fluid p-3"><img src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png" alt="" /></div>
                <div style={{cursor:"pointer"}} onClick={() =>setmobwidth(0)} className="x-mark "><img style={{height:"15px"}} src="src/images/x-mark-128.png" alt="" className="img-fluid" /></div>
          </div>
          <div className="nav-options ps-5 pe-3 d-flex justify-content-between">
            <p style={{fontWeight:"700",fontSize:"1.2rem"}}>Features</p>
            <div><img src="https://a.slack-edge.com/bd3d455/marketing/img/icons/icon-mobile-arrow.svg" alt="" /></div>
          </div>
          <div className="nav-options ps-5 pe-3 d-flex justify-content-between">
            <p style={{fontWeight:"700",fontSize:"1.2rem"}}>Solutions</p>
            <div><img src="https://a.slack-edge.com/bd3d455/marketing/img/icons/icon-mobile-arrow.svg" alt="" /></div>
          </div>
          <div className="nav-options ps-5 pe-3 d-flex justify-content-between">
            <p style={{fontWeight:"700",fontSize:"1.2rem"}}>Enterprise</p>
          </div>
          <div className="nav-options ps-5 pe-3 d-flex justify-content-between">
            <p style={{fontWeight:"700",fontSize:"1.2rem"}}>Resources</p>
            <div><img src="https://a.slack-edge.com/bd3d455/marketing/img/icons/icon-mobile-arrow.svg" alt="" /></div>
          </div>
          <div className="nav-options ps-5 pe-3 d-flex justify-content-between">
            <p style={{fontWeight:"700",fontSize:"1.2rem"}}>Pricing</p>
          </div>
      </div>
    </div>
  )
}

export default Navbar