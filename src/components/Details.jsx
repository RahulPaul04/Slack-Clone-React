import React from 'react'
import "../styles/details.css"

function Details() {
  return (
    <div className='details-container pt-5'>
        <div className="detail d-md-flex gap-3 mb-5 align-items-center">
            <div className="video col-md-6 col-10">
                <video className='large' style={{width:"100%"}} muted autoPlay loop src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/speed.IN.webm"></video>
                <video className='small' style={{width:"100%"}} muted autoPlay loop src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/speed-mobile.webm"></video>
            </div>
            <div className='p-5'>
                <h2 className='detail-heading'>Move faster with your tools in one place</h2>
                <p className='detail-descp'>Automate away routine tasks with the power of generative AI and simplify your workflow with all your favourite apps ready to go in Slack.</p>
                <div>
                    <div className="detail-link d-flex gap-2">
                        <div>
                            <p>Learn More about the slack platform </p>
                            
                            
                        </div>
                        <div className='arrow' style={{width:"18px",height:"24px",overflow:"hidden"}}></div>
                    </div>
                    <div  style={{backgroundColor:"#1264a3",height:"2px",width:"0%"}}></div>
                </div>
            </div>
        </div>
        <div className="detail d-md-flex flex-row-reverse gap-3 mb-5 align-items-center">
        <div className="video col-md-6 col-10 ms-auto">
                <video className='large' style={{width:"100%"}} muted autoPlay loop src="https://a.slack-edge.com/ec3a92a/marketing/img/homepage/true-prospects/animations/webm/ia4-flexibility.IN.webm"></video>
                <video className='small' style={{width:"100%"}} muted autoPlay loop src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility-mobile.webm"></video>
            </div>
        <div className='p-5'>
                <h2 className='detail-heading'>Choose how you want to work</h2>
                <p className='detail-descp'>In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.</p>
                <div>
                    <div className="detail-link d-flex gap-2">
                        <div>
                            <p>Learn more about flexible communication</p>
                            
                            
                        </div>
                        <div className='arrow' style={{width:"18px",height:"24px",overflow:"hidden"}}></div>
                    </div>
                    <div  style={{backgroundColor:"#1264a3",height:"2px",width:"0%"}}></div>
                </div>
            </div>
            
            
        </div>
        <div className="detail d-md-flex gap-3 mb-5 align-items-center">
            <div className="video col-md-6 col-10">
                <video className='large' style={{width:"100%"}} muted autoPlay loop src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.IN.webm"></video>
                <video className='small' style={{width:"100%"}} muted autoPlay loop src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness-mobile.webm"></video>
            </div>
            <div className='p-5'>
                <h2 className='detail-heading'>Bring your team together</h2>
                <p className='detail-descp'>At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</p>
                <div>
                    <div className="detail-link d-flex gap-2">
                        <div>
                            <p>Learn More about channels</p>
                            
                            
                        </div>
                        <div className='arrow' style={{width:"18px",height:"24px",overflow:"hidden"}}></div>
                    </div>
                    <div  style={{backgroundColor:"#1264a3",height:"2px",width:"0%"}}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details