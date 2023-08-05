import React, { useState } from 'react'

function Loginpage(props) {

  const [idRecorder, setIdRecorder] = useState('')
  const [passRecorder, setPassRecorder] = useState('')
  const [loginCondition,setLoginCondition] = useState()
  const login = (a,b)=>{
    if(a==='subash' && b==='subash123'){
      setLoginCondition(true)
      return;
    }
    setLoginCondition(false)
  }
  return (
    <>
    <div className="loginBox">
    <input type="text" onChange={(e)=>setIdRecorder(e.target.value)}/>
    <input type="password"  onChange={(e)=>setPassRecorder(e.target.value)}/>
    <div className="logAndCancle">
    <button onClick={()=>login(idRecorder,passRecorder)}>{loginCondition? <a href="/shopping">login</a>: <a>Login</a>}</button>

    <button onClick={()=>props.cancleHandler()}>Cancle</button>
    </div>
    </div>
    </>
  )
}

export default Loginpage