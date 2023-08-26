import React from 'react'
import '@google/model-viewer'
import './modeview.css'


const Modelview = ({url , photo}) => {


  let model = url
  let image = photo


return(
  <div id="card">
  <model-viewer
    src= {(model)? model : ''}
    ios-src={model}
    poster={(image)? image : ''}
    alt="3D MODEL"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
    ar-modes="scene-viewer webxr quick-look"
  ></model-viewer>
</div>

);
}

export default Modelview