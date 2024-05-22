import React, { useEffect, useState } from 'react'

const App = () => {
    const [time,setTime] = useState(new Date())

    useEffect(()=>{
const intervalId = setInterval(()=>{
    setTime(new Date())
},1000)


return ()=> clearInterval(intervalId)
    },[time])
  return (
    <div>
    <h1>Time</h1>
<span>{time.getHours().toString().padStart(2,"0")}</span>:
<span>{time.getMinutes().toString().padStart(2,"0")}</span>:
<span>{time.getSeconds().toString().padStart(2,"0")}</span>

<h1>Date</h1>
<div>
    {time.toLocaleDateString(undefined,{
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    })}
</div>
    </div>
  )
}

export default App
