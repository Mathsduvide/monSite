import './CSS/Activite.css'

const placeholder = "./Placeholder.jpg"

const Activite = ({element})=>{
	return <div id="Activite" className={Math.round(Math.random())?"big":"small"}>
		<a href={element.pdf}>
			<img src={element.image||placeholder} />
			<div>
				<p>{element.name}</p>
			</div>
		</a>
		<br />
	</div>
}

export default Activite;