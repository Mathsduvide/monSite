import { Link } from 'react-router-dom'

import './CSS/Home.css'

const Home = ()=>{
	return <div id="home" >
			<Link to="cap" >{"CAP"}</Link>
			<Link to="seconde" >{"Seconde"}</Link>
			<Link to="premiere" >{"Premiere"}</Link>
			<Link to="terminale" >{"Terminale"}</Link>
		</div>
}

export default Home;