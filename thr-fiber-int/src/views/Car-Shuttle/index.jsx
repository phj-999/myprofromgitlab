import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  Car,
  Lights,
  FloorGround,
  FloorGrid,
  Boxes, 
  Rings,
  Effect,
  Table
} from "@/components/For-Car-Shuttle";

// import './header.css'

const CarShuttle = () => {
  return (
      <div className={"box-content w-screen h-screen"}>
        <Canvas shadows={true} >
          <AdaptiveDpr pixelated />

          {/* 轨道控制 控制器的焦点暂时设为【0，0，0】 */}
          <OrbitControls target={[0, 0.35, 0]} regress/>
          {/* 相机默认事件 */}
          <PerspectiveCamera position={[3, 2, 5]} fov={50} makeDefault />
          <color args={[0, 0, 0]} attach="background" />
          {/* <axesHelper args={[5]} /> */}
          <Lights />
          <AdaptiveEvents /> 
          {/* 将Car纹理作为渲染道具返回。它使子级在渲染到内部缓冲区时不可见，以便它们不包括在反射中。 */}
          <CubeCamera resolution={256} frames={Infinity}>
            {(texture) => (
              <>
                <Environment map={texture} />
                <Car />
               {/* <Table /> */}
              </>
            )}
          </CubeCamera>

          <FloorGround />
          <Boxes />
          <FloorGrid />
          <Rings />
          <Environment>
            <Table /> 
          </Environment>
          {/* 效果组件 */}
          <Effect />
          {/* <mesh position={[0, 0, 0]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={"#111827"}/>
          </mesh> */}
          {/* <Physics>
            <Floor position={[0, -0.5, 0]} />
          </Physics> */}
        </Canvas>
      </div>
  );
};

export default CarShuttle;
