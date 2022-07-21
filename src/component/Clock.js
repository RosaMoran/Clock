import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [ clockState, setClockState] = useState();

    useEffect(()=> {
        setInterval(() => {
            const date = new Date().toLocaleTimeString();
            setClockState(date)
        }, 1000);

    }, [])

  return (
    <div style={{fontSize: "55px", margin: "100px", marginLeft: "700px", width: "350px", padding: "10px 0", border: "2px solid burlywood", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.35)0px 5px 15px", backgroundColor: "cornsilk" }}>{clockState}</div>
  )
}

export default Clock