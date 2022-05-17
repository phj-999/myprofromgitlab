import { Canvas } from "react-three-fiber";
import * as THREE from "three";

import "./App.css";
//import BoxOne from "./views/box1demo";
import BoxTwo from "./components/boxTwo/Box"; //盒子
import Bulb from "./components/boxTwo/Bulb";
import Floor from "./components/boxTwo/Floor";
import Orbit from "./components/boxTwo/Orbit"; //轨道控制器

function App() {
  return (
    <>
      {/* <BoxOne /> */}
      <div style={{ height: "100vh", width: "100vw" }}>
        <Canvas shadowMap camera={{ position: [1,5,1] }} style={{ background: "red" }}>
          <fog attach={'fog'} args={['white', 1, 10]}/>
          <ambientLight intensity={0.2}/>
          <pointLight castShadow />
          <Bulb position={[0,3,0]} />
          <Orbit />
          <axesHelper args={[5]} />
          <BoxTwo position={[0, 1, 0]} />
          
          <Floor position={[0,-0.5,0]}/>
        </Canvas>
      </div>
    </>
  );
}

export default App;
