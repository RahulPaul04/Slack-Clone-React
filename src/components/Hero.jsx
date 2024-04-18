import React, { useEffect, useState } from 'react'
import "../styles/hero.css"


function Hero() {

    const [hgt,sethgt] = useState(0)
    useEffect(() =>{
        let ht = document.querySelector(".video-div")
        console.log("height",ht.offsetHeight);
        sethgt(ht.offsetHeight)
    },[])
    console.log("new height",hgt);

  return (
    <div style={{zIndex:"4"}}>
        <h1 style={{fontWeight:"700",fontSize:'3rem'}} className='text-center'>Made For People.<span style={{color:"#611f69"}} >Built For Productivity</span></h1>
        <div className='text-center mt-4'>
            <button  className='btn mx-auto p-3'style={{backgroundColor:"#611f69",color:'white',fontSize:"1.1rem",fontWeight:"700"}} >GET STARTED FOR FREE</button>
    
        </div> 
        <p className='text-center mt-4' style={{fontWeight:"700",fontSize:"20px"}}>Slack is free to try as long as you try</p>   
        <div className="icons d-flex align-items-center gap-5 justify-content-center">
            <div><img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-airbnb-small.png" alt="" /></div>
            <div>
                <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nasa-small.png" alt="" />
            </div>
            <div>
                <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-uber-small.png" alt="" />
            </div>
            <div>
                <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small.png" alt="" />
            </div>
            <div>
                <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nyt-small.png" alt="" />
            </div>
            <div>
                <img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-etsy-small.png" alt="" />
            </div>
        </div>
        <div style={{position:"relative",zIndex:"4"}}>
            <div style={{position:"relative",zIndex:"3"}} className='video-div col-lg-8 col-md-8 col-10 mx-auto mt-5'>
                <video style={{position:"realtive",zIndex:"3",width:"100%"}} muted loop autoPlay  src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"></video>
                
            </div>
            <div className='backgd-div' style={{height:`${hgt*0.7}px`,backgroundColor:"#f4ede4"}}>
    
            </div>
        </div>
</div>
  )
}

export default Hero