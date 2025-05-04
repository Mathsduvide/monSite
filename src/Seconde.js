import { Link } from 'react-router-dom'
import {useState} from 'react'
import Menu from './Menu'
import dataSeconde from './data/dataSeconde'
import Activite from './Activite'
//import HelpIcon from "./HelpIcon"

import './CSS/Sixieme.css'

const Seconde = ()=>{
	const [coursTD,setCoursTD]=useState(false)
	return <>
			<Menu setTDCours={setCoursTD} />
	<div id="sixieme" >
		{coursTD == "Cours" && dataSeconde.cours.map((el,index)=>(<Activite key={"cours"+index} element={el} />))}
		{coursTD == "TD" && dataSeconde.TD.map((el,index)=>(<Activite key={"TD"+index} element={el} />))}
		</div>
		</>
		//<HelpIcon />
}

export default Seconde;