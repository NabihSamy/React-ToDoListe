import CareScale from "./CareScale"

function PlantItem({ name, cover, id, light, water }) {
    
    return (
        <div>
            nom de la plante: {name}
            cover : {cover}
            Le tour de CareScale : 
            <CareScale careType='water' scaleValue={water} />
            
            <CareScale careType='light' scaleValue={light} />
            
        </div>
    )
}
export default PlantItem