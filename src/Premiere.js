import { Link } from 'react-router-dom'
import {useState} from 'react'
import Menu from './Menu'
import dataPremiere from './data/dataPremiere'
import Activite from './Activite'
import HelpIcon from "./HelpIcon"

import './CSS/Sixieme.css'

const Premiere = ()=>{
	const [coursTD,setCoursTD]=useState(false)
	return <>
			<Menu setTDCours={setCoursTD} />
	<div id="sixieme" >
		{coursTD == "Cours" && dataPremiere.cours.map((el,index)=>(<Activite key={"cours"+index} element={el} />))}
		{coursTD == "TD" && dataPremiere.TD.map((el,index)=>(<Activite key={"TD"+index} element={el} />))}
		</div>
		<HelpIcon />
		</>
}

export default Premiere;