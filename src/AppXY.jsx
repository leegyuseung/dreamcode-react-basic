import React from "react";
import { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // 연관있는 데이터는 객체로 묶어서 관리한다.
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        // 만약 수평으로만 이동이 가능하다면?
        // setPostion(prev => ({x: e.clientX, y: prev.y}))
        // setPostion(prev => ({...prev, x: e.clientX}))
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}
