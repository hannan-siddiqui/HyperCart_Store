import React from 'react'

const BGGRADIENT = () => {
  return (
    <div><svg viewBox="0 0 800 800" opacity="1"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	<feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="277.5" ry="277.5" cx="151.35179812543484" cy="265.5831574337764" fill="hsla(0, 100%, 50%, 1.00)"></ellipse><ellipse rx="277.5" ry="277.5" cx="293.946385015191" cy="445.73018059251183" fill="hsla(0, 100%, 50%, 1.00)"></ellipse><ellipse rx="277.5" ry="277.5" cx="243.27721940230816" cy="453.33268784835406" fill="hsla(0, 20%, 61%, 1.00)"></ellipse></g></svg></div>
  )
}

export default BGGRADIENT;