import React, { useEffect, useState } from 'react'
import "../styles/nav.css"

function Dropdown(prop) {

    const [visible,setVisibility] = useState(0)
    let flag = 1
    function changeVisibility(){
        console.log("running funciton",visible,flag == 1);
        if(visible == 0 && flag == 1){
            setVisibility(1)
        }
        else{
            setVisibility(0)
            flag = 1
        }
    }

    let top_pos = visible == 1?0:-20
    let rot = visible==1?180:0
    let class_name = visible == 1?'option expand':'option'
    let zind = visible == 1?10:-3
    let hgt =visible==1?60:0

    useEffect(() =>{
        document.addEventListener('mousedown',(event)=>{
            let opt = document.querySelector(".expand")

            

            if(opt && (event.target != opt && !opt.contains(event.target))){
                console.log("inhere");
                setVisibility(0)
            }
        })
    },[])

    

    return (
        <div className = {class_name} style={{display:"flex",alignItems:"center"}} >
            <p className='link'  onClick={changeVisibility} >{prop.name} <span className='arrow'><img style={{rotate:`${rot}deg`}}  src="https://a.slack-edge.com/3099b/marketing/img/icons/icon_chevron_black_nav.svg" alt="" /></span></p>
            <div style={{opacity:visible,transform:`translateY(${top_pos}px)`,zIndex:`${zind}`,height:`${hgt}vh`}} className="dropdown rounded"></div>
        </div>
    )
}

export default Dropdown