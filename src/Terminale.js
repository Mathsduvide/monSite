import { Link } from 'react-router-dom'
import {useState} from 'react'
import Menu from './Menu'
import dataTerminale from './data/dataTerminale'
import Activite from './Activite'
import HelpIcon from "./HelpIcon"

import './CSS/Sixieme.css'

const Terminale = ()=>{
	const [coursTD,setCoursTD]=useState(false)
	return <>
			<Menu setTDCours={setCoursTD} />
	<div id="sixieme" >
		{coursTD == "Cours" && dataTerminale.cours.map((el,index)=>(<Activite key={"cours"+index} element={el} />))}
		{coursTD == "TD" && dataTerminale.TD.map((el,index)=>(<Activite key={"TD"+index} element={el} />))}
		</div>
		<HelpIcon />
		</>
}

export default Terminale;