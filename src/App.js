import React, { useState, useEffect, useRef } from 'react'
import './App.css'

const keyEvent = (e) => {
  console.log(e.key);
}

const App = () => {

  const [size, setSize] = useState({
    w: 0,
    h: 0
  })

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  const video = useRef();

  const sizeUpdate = () => {
    setSize({
      w: video.current.clientWidth,
      h: video.current.clientHeight
    })
  }

  // function keyEvent(e) {
  //   console.log(e.key);
  // }
  const over = () => {
    console.log("over");
    document.addEventListener('keyup', keyEvent)
  }

  const out = () => {
    console.log("out");
    document.removeEventListener('keyup', keyEvent)
  }

  const move = (e) => {
    setPosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    })
    // console.log(position);
  }

  useEffect(() => {
    setSize({
      w: video.current.clientWidth,
      h: video.current.clientHeight
    })

    window.addEventListener('resize', sizeUpdate);
    return () => {
      window.removeEventListener('resize', sizeUpdate);
    }
  }, [])

  // useEffect(() => {
  //   console.log(size);
  // },[size])
  return (
    <>
      <div className='box' ref={video}>
        <video src=""
          onMouseOver={over}
          onMouseOut={out}
          onMouseMove={(e) => {
            move(e)
          }}></video>
      </div>
    </>
  )
}

export default App