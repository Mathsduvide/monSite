/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/placeholderIcon.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Icosphere.geometry} material={nodes.Icosphere.material} />
    </group>
  )
}

useGLTF.preload('/placeholderIcon.glb')
