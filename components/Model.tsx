/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Body: THREE.Mesh
    Keyboard: THREE.Mesh
    ['0']: THREE.Mesh
    ['1']: THREE.Mesh
    ['2']: THREE.Mesh
    ['3']: THREE.Mesh
    ['4']: THREE.Mesh
    ['5']: THREE.Mesh
    ['6']: THREE.Mesh
    ['7']: THREE.Mesh
    ['8']: THREE.Mesh
    ['9']: THREE.Mesh
    A: THREE.Mesh
    B: THREE.Mesh
    BackSlach: THREE.Mesh
    C: THREE.Mesh
    Caps_Locks: THREE.Mesh
    cmd1: THREE.Mesh
    cmd2: THREE.Mesh
    Colon: THREE.Mesh
    Comma: THREE.Mesh
    control: THREE.Mesh
    D: THREE.Mesh
    Delete: THREE.Mesh
    E: THREE.Mesh
    enter: THREE.Mesh
    Esc: THREE.Mesh
    F: THREE.Mesh
    F1: THREE.Mesh
    F10: THREE.Mesh
    F11: THREE.Mesh
    F12: THREE.Mesh
    F2: THREE.Mesh
    F3: THREE.Mesh
    F4: THREE.Mesh
    F5: THREE.Mesh
    F6: THREE.Mesh
    F7: THREE.Mesh
    F8: THREE.Mesh
    F9: THREE.Mesh
    Fn: THREE.Mesh
    Forward: THREE.Mesh
    G: THREE.Mesh
    H: THREE.Mesh
    I: THREE.Mesh
    J: THREE.Mesh
    K: THREE.Mesh
    L: THREE.Mesh
    Left: THREE.Mesh
    Left_Bracket: THREE.Mesh
    M: THREE.Mesh
    Minus: THREE.Mesh
    N: THREE.Mesh
    O: THREE.Mesh
    option1: THREE.Mesh
    option2: THREE.Mesh
    P: THREE.Mesh
    Period: THREE.Mesh
    Plus: THREE.Mesh
    Q: THREE.Mesh
    Quote: THREE.Mesh
    R: THREE.Mesh
    Right: THREE.Mesh
    Right_Bracket: THREE.Mesh
    S: THREE.Mesh
    Shift1: THREE.Mesh
    Shift2: THREE.Mesh
    Spacebar: THREE.Mesh
    T: THREE.Mesh
    Tab: THREE.Mesh
    Tilde: THREE.Mesh
    Touch: THREE.Mesh
    U: THREE.Mesh
    Updown: THREE.Mesh
    V: THREE.Mesh
    W: THREE.Mesh
    X: THREE.Mesh
    Y: THREE.Mesh
    Z: THREE.Mesh
    Screen_1: THREE.Mesh
    Screen_2: THREE.Mesh
    Screen_3: THREE.Mesh
    Screen_4: THREE.Mesh
    TrackPad: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    kEYCAP: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'BodyAction.003'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/macbook.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.09, 3.84, 11.49]} rotation={[1.35, 0, -0.02]}>
        <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={22.9} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[9.15, 9.66, 0]} rotation={[0.07, -0.02, -0.63]}>
        <spotLight intensity={10} angle={Math.PI / 8} penumbra={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <mesh name="Body" geometry={nodes.Body.geometry} material={nodes.Body.material}>
        <mesh geometry={nodes.Keyboard.geometry} material={nodes.Keyboard.material} position={[0, 0.04, -0.41]}>
          <mesh name="0" geometry={nodes['0'].geometry} material={nodes['0'].material} position={[0.98, 1.65, -0.64]} />
          <mesh geometry={nodes['1'].geometry} material={nodes['1'].material} position={[-1.67, 1.65, -0.64]} />
          <mesh geometry={nodes['2'].geometry} material={nodes['2'].material} position={[-1.37, 1.65, -0.64]} />
          <mesh
            name="3"
            geometry={nodes['3'].geometry}
            material={nodes['3'].material}
            position={[-1.08, 1.65, -0.64]}
          />
          <mesh geometry={nodes['4'].geometry} material={nodes['4'].material} position={[-0.78, 1.65, -0.64]} />
          <mesh geometry={nodes['5'].geometry} material={nodes['5'].material} position={[-0.48, 1.65, -0.64]} />
          <mesh geometry={nodes['6'].geometry} material={nodes['6'].material} position={[-0.19, 1.65, -0.64]} />
          <mesh geometry={nodes['7'].geometry} material={nodes['7'].material} position={[0.1, 1.65, -0.64]} />
          <mesh geometry={nodes['8'].geometry} material={nodes['8'].material} position={[0.39, 1.65, -0.64]} />
          <mesh geometry={nodes['9'].geometry} material={nodes['9'].material} position={[0.69, 1.65, -0.64]} />
          <mesh name="A" geometry={nodes.A.geometry} material={nodes.A.material} position={[-1.45, 1.65, -0.06]} />
          <mesh name="B" geometry={nodes.B.geometry} material={nodes.B.material} position={[-0.12, 1.65, 0.22]} />
          <mesh
            geometry={nodes.BackSlach.geometry}
            material={nodes.BackSlach.material}
            position={[2.01, 1.65, -0.35]}
          />
          <mesh geometry={nodes.C.geometry} material={nodes.C.material} position={[-0.7, 1.65, 0.22]} />
          <mesh
            geometry={nodes.Caps_Locks.geometry}
            material={nodes.Caps_Locks.material}
            position={[-1.85, 1.65, -0.07]}
          />
          <mesh geometry={nodes.cmd1.geometry} material={nodes.cmd1.material} position={[-1.03, 1.65, 0.51]} />
          <mesh geometry={nodes.cmd2.geometry} material={nodes.cmd2.material} position={[0.79, 1.65, 0.51]} />
          <mesh geometry={nodes.Colon.geometry} material={nodes.Colon.material} position={[1.2, 1.65, -0.06]} />
          <mesh geometry={nodes.Comma.geometry} material={nodes.Comma.material} position={[0.75, 1.65, 0.22]} />
          <mesh geometry={nodes.control.geometry} material={nodes.control.material} position={[-1.67, 1.65, 0.51]} />
          <mesh geometry={nodes.D.geometry} material={nodes.D.material} position={[-0.85, 1.65, -0.06]} />
          <mesh geometry={nodes.Delete.geometry} material={nodes.Delete.material} position={[1.94, 1.65, -0.64]} />
          <mesh geometry={nodes.E.geometry} material={nodes.E.material} position={[-0.92, 1.65, -0.35]} />
          <mesh geometry={nodes.enter.geometry} material={nodes.enter.material} position={[1.9, 1.65, -0.07]} />
          <mesh geometry={nodes.Esc.geometry} material={nodes.Esc.material} position={[-1.96, 1.65, -0.87]} />
          <mesh geometry={nodes.F.geometry} material={nodes.F.material} position={[-0.56, 1.65, -0.06]} />
          <mesh geometry={nodes.F1.geometry} material={nodes.F1.material} position={[-1.64, 1.65, -0.87]} />
          <mesh geometry={nodes.F10.geometry} material={nodes.F10.material} position={[1.19, 1.65, -0.87]} />
          <mesh geometry={nodes.F11.geometry} material={nodes.F11.material} position={[1.51, 1.65, -0.87]} />
          <mesh geometry={nodes.F12.geometry} material={nodes.F12.material} position={[1.82, 1.65, -0.87]} />
          <mesh geometry={nodes.F2.geometry} material={nodes.F2.material} position={[-1.32, 1.65, -0.87]} />
          <mesh geometry={nodes.F3.geometry} material={nodes.F3.material} position={[-1.01, 1.65, -0.87]} />
          <mesh geometry={nodes.F4.geometry} material={nodes.F4.material} position={[-0.69, 1.65, -0.87]} />
          <mesh geometry={nodes.F5.geometry} material={nodes.F5.material} position={[-0.38, 1.65, -0.87]} />
          <mesh geometry={nodes.F6.geometry} material={nodes.F6.material} position={[-0.06, 1.65, -0.87]} />
          <mesh geometry={nodes.F7.geometry} material={nodes.F7.material} position={[0.25, 1.65, -0.87]} />
          <mesh geometry={nodes.F8.geometry} material={nodes.F8.material} position={[0.56, 1.65, -0.87]} />
          <mesh geometry={nodes.F9.geometry} material={nodes.F9.material} position={[0.88, 1.65, -0.87]} />
          <mesh geometry={nodes.Fn.geometry} material={nodes.Fn.material} position={[-1.96, 1.65, 0.51]} />
          <mesh geometry={nodes.Forward.geometry} material={nodes.Forward.material} position={[1.34, 1.65, 0.22]} />
          <mesh geometry={nodes.G.geometry} material={nodes.G.material} position={[-0.27, 1.65, -0.06]} />
          <mesh geometry={nodes.H.geometry} material={nodes.H.material} position={[0.03, 1.65, -0.06]} />
          <mesh geometry={nodes.I.geometry} material={nodes.I.material} position={[0.54, 1.65, -0.35]} />
          <mesh geometry={nodes.J.geometry} material={nodes.J.material} position={[0.32, 1.65, -0.06]} />
          <mesh geometry={nodes.K.geometry} material={nodes.K.material} position={[0.61, 1.65, -0.06]} />
          <mesh geometry={nodes.L.geometry} material={nodes.L.material} position={[0.91, 1.65, -0.06]} />
          <mesh geometry={nodes.Left.geometry} material={nodes.Left.material} position={[1.42, 1.65, 0.57]} />
          <mesh
            geometry={nodes.Left_Bracket.geometry}
            material={nodes.Left_Bracket.material}
            position={[1.72, 1.65, -0.35]}
          />
          <mesh geometry={nodes.M.geometry} material={nodes.M.material} position={[0.46, 1.65, 0.22]} />
          <mesh geometry={nodes.Minus.geometry} material={nodes.Minus.material} position={[1.27, 1.65, -0.64]} />
          <mesh geometry={nodes.N.geometry} material={nodes.N.material} position={[0.17, 1.65, 0.22]} />
          <mesh geometry={nodes.O.geometry} material={nodes.O.material} position={[0.83, 1.65, -0.35]} />
          <mesh geometry={nodes.option1.geometry} material={nodes.option1.material} position={[-1.37, 1.65, 0.51]} />
          <mesh geometry={nodes.option2.geometry} material={nodes.option2.material} position={[1.12, 1.65, 0.51]} />
          <mesh geometry={nodes.P.geometry} material={nodes.P.material} position={[1.13, 1.65, -0.35]} />
          <mesh geometry={nodes.Period.geometry} material={nodes.Period.material} position={[1.05, 1.65, 0.22]} />
          <mesh geometry={nodes.Plus.geometry} material={nodes.Plus.material} position={[1.57, 1.65, -0.64]} />
          <mesh geometry={nodes.Q.geometry} material={nodes.Q.material} position={[-1.52, 1.65, -0.35]} />
          <mesh geometry={nodes.Quote.geometry} material={nodes.Quote.material} position={[1.5, 1.65, -0.06]} />
          <mesh geometry={nodes.R.geometry} material={nodes.R.material} position={[-0.63, 1.65, -0.35]} />
          <mesh geometry={nodes.Right.geometry} material={nodes.Right.material} position={[2.02, 1.65, 0.57]} />
          <mesh
            geometry={nodes.Right_Bracket.geometry}
            material={nodes.Right_Bracket.material}
            position={[1.42, 1.65, -0.35]}
          />
          <mesh geometry={nodes.S.geometry} material={nodes.S.material} position={[-1.15, 1.65, -0.06]} />
          <mesh geometry={nodes.Shift1.geometry} material={nodes.Shift1.material} position={[-1.79, 1.65, 0.22]} />
          <mesh geometry={nodes.Shift2.geometry} material={nodes.Shift2.material} position={[1.83, 1.65, 0.22]} />
          <mesh
            geometry={nodes.Spacebar.geometry}
            material={nodes.Spacebar.material}
            position={[-0.12, 1.53, 0.51]}
            scale={[0.26, 21.23, 0.26]}
          />
          <mesh geometry={nodes.T.geometry} material={nodes.T.material} position={[-0.34, 1.65, -0.35]} />
          <mesh geometry={nodes.Tab.geometry} material={nodes.Tab.material} position={[-1.89, 1.65, -0.35]} />
          <mesh geometry={nodes.Tilde.geometry} material={nodes.Tilde.material} position={[-1.97, 1.65, -0.64]} />
          <mesh geometry={nodes.Touch.geometry} material={nodes.Touch.material} position={[2, 1.65, -0.87]} />
          <mesh geometry={nodes.U.geometry} material={nodes.U.material} position={[0.25, 1.65, -0.35]} />
          <mesh geometry={nodes.Updown.geometry} material={nodes.Updown.material} position={[1.72, 1.65, 0.51]} />
          <mesh geometry={nodes.V.geometry} material={nodes.V.material} position={[-0.41, 1.65, 0.22]} />
          <mesh geometry={nodes.W.geometry} material={nodes.W.material} position={[-1.22, 1.65, -0.35]} />
          <mesh geometry={nodes.X.geometry} material={nodes.X.material} position={[-1, 1.65, 0.22]} />
          <mesh geometry={nodes.Y.geometry} material={nodes.Y.material} position={[-0.05, 1.65, -0.35]} />
          <mesh geometry={nodes.Z.geometry} material={nodes.Z.material} position={[-1.3, 1.65, 0.22]} />
        </mesh>
        <mesh geometry={nodes.Screen_1.geometry} material={nodes.Screen_1.material} />
        <mesh geometry={nodes.Screen_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Screen_3.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Screen_4.geometry} material={materials['Material.004']} />
        <mesh
          geometry={nodes.TrackPad.geometry}
          material={materials['Material.005']}
          position={[0, 0.07, 0]}
          rotation={[0.01, 0, 0]}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/macbook.glb')