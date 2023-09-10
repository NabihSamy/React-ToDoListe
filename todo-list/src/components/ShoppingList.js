import  {plantList}  from '../datas/plantList'
import '../styles/ShoppingList.css'

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
					<li key={plant.id}>{plant.name}
                      {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
                      {plant.isSpecialOffer ? <special className='lmj-sales' >PROMO</special> : <special2>👎</special2>}
                    </li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList