import { Link } from 'react-router-dom'
import {useState} from 'react'
import Menu from './Menu'
import HelpIcon from "./HelpIcon"
import Activite from './Activite'
import dataCAP from './data/dataCAP'

import './CSS/Sixieme.css'

const CAP = ()=>{
	const [coursTD,setCoursTD]=useState(false)
	return <>
			<Menu setTDCours={setCoursTD} />
	<div id="sixieme" >
		{coursTD == "Cours" && dataCAP.cours.map((el,index)=>(<Activite key={"cours"+index} element={el} />))}
		{coursTD == "TD" && dataCAP.TD.map((el,index)=>(<Activite key={"TD"+index} element={el} />))}
		</div>
		<HelpIcon />
		</>
}

export default CAP;