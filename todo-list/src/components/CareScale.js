
function handleClick(plantName) {
    console.log('AYEEHH IL A CLIQUE sur ',plantName);

}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3, 4 , 5]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'
    console.log(careType)

    return (
        <div onClick={ () => (handleClick(scaleType))     }>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
export default CareScale
