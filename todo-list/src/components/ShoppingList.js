import  {plantList}  from '../datas/plantList';
import CareScale from './CareScale';
import PlantItem from './PlantItem';



function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
			<ul>
				{plantList.map( (plant) => 
				(
				<div>
					{	<PlantItem	name ={plant.name} id={plant.id} cover={plant.cover} light={plant.light} water={plant.water}	 />}
				</div>

				))}
			</ul>
		</div>
	)
}

export default ShoppingList