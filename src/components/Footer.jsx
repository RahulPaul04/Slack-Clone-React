import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <div className='pt-1 pb-5'>
        <div className="sales pt-1 mb-5">
            <h1 className="text-light text-center mt-5 mb-5 pt-3" style={{fontWeight:"700"}}>See all that you can accomplish with Slack</h1>
            <div className="footer-buttons d-sm-flex justify-content-center gap-2">
                <div className="btn ps-4 pe-4 pt-2 pb-2" style={{backgroundColor:"white",color:"#4a154b",fontWeight:"600"}} >TRY FOR FREE</div>
                <div className='btn ps-4 pe-4 pt-2 pb-2' style={{color:"white",backgroundColor:"#4a154b",border:"solid 0.5px white",fontWeight:"600"}}>TALK TO SALES</div>

            </div>
        </div>
        <div className="footer mt-5 pt-5 d-md-flex justify-content-evenly">
            <div className='footer-options d-lg-flex justify-content-around  ms-4'>
                <div className="footer-links">
                    
                        <p className='footer-header'>PRODUCT</p>
                        <p className="f-links">Watch Demo</p>
                        <p className="f-links">Pricing</p>
                        <p className="f-links">Paid vs Free</p>
                        <p className="f-links">Accessibility</p>
                        <p className="f-links">Status</p>
                    
                </div>
                <div className="footer-links">
                    
                        <p className='footer-header'>FEATURES</p>
                        <p className="f-links">Channels</p>
                        <p className="f-links">Slack Connect</p>
                        <p className="f-links">Workflow Builder</p>
                        <p className="f-links">Messaging</p>
                        <p className="f-links">Huddles</p>
                    
                </div>
            </div>
            <div className='footer-options d-lg-flex justify-content-around  ms-4'>
                <div className="footer-links">
                    
                        <p className='footer-header'>SOLUTIONS</p>
                        <p className="f-links">Engineering</p>
                        <p className="f-links">IT</p>
                        <p className="f-links">Customer Service</p>
                        <p className="f-links">Sales</p>
                        <p className="f-links">Project Management</p>
                    
                </div>
                <div className="footer-links">
                    
                        <p className='footer-header'>COMPANY</p>
                        <p className="f-links">About Us</p>
                        <p className="f-links">News</p>
                        <p className="f-links">Media Kit</p>
                        <p className="f-links">Carrers</p>
                        <p className="f-links">About Us</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer