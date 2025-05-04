import './CSS/Menu.css'

const Menu = ({setTDCours})=>{
	return <div id="menu" >
			<span onClick={()=>setTDCours("Cours")}>Cours</span>
			<span onClick={()=>setTDCours("TD")}>TD</span>
		</div>
}

export default Menu;