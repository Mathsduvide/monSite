import React,{useRef,Suspense} from "react"
import {Canvas} from "@react-three/fiber"
import PlaceholderIcon from "./PlaceholderIcon"
import Iconeaide from "./Iconeaide"
import "./CSS/HelperIcon.css"

const HelpIcon = ()=>{
	return (<div id="helpIcon" >
		<Canvas>
			<directionalLight intensity={0.9} position={[0,0,1]} />
			<Suspense>
				<Iconeaide position={[0,-2.5,3]} onClick={()=>{console.log("hello");}} />
			</Suspense>
		</Canvas>
	</div>)
}

export default HelpIcon