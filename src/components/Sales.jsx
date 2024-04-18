import React from 'react'

function Sales() {
  return (
    <div className='pt-5 pb-5'>
        <h1 style={{fontWeight:"700",fontSize:"3rem"}} className="text-center">Teams large and small rely on Slack</h1>
        <p style={{color:"black",fontSize:"1.2rem"}} className='mt-3 text-center'>Slack securely scales up to support collaboration at the world’s biggest companies.</p>
        <div className="button-div text-center d-sm-flex justify-content-center gap-3 mt-5">
            <div>
                    <button style={{color:"white",fontWeight:"600",backgroundColor:"#611f69"}} className="btn p-3">MEET SLACK FOR ENTERPRISE</button>
        
            </div>            
            <div>
                <button style={{color:"#611f69",fontWeight:"600",border:"0.2px solid #611f69"}} className="btn p-3">TALK TO SALES</button>
            </div>
           
        </div>
        <div className='d-md-flex justify-content-evenly text-center mt-5 pt-2 pb-2 mb-5'>
            <div className="percent">
                <h1 style={{color:"#611f69",fontSize:"4rem",fontWeight:"700"}}>85%</h1>
                <p>of users say that Slack has</p>
                <p style={{marginTop:"-20px"}}>improved communication*</p>
            </div>
            <div className="percent">
                <h1 style={{color:"#611f69",fontSize:"4rem",fontWeight:"700"}}>86%</h1>
                <p>feel that their ability to work</p>
                <p style={{marginTop:"-20px"}}>remotely has improved*</p>
            </div>
            <div className="percent">
                <h1 style={{color:"#611f69",fontSize:"4rem",fontWeight:"700"}}>88%</h1>
                <p>feel more connected to their</p>
                <p style={{marginTop:"-20px"}}>teams*</p>
            </div>
        </div>
    </div>
  )
}

export default Sales