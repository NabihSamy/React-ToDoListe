import modifier from '../media/modifier-removebg-preview.png'
import poubelle from '../media/poubelle-removebg-preview.png'
import '../css/DisplayTask.css'

function DisplayTask ({name,date}){
    return (
        <div className="DisplayTask">
            <input type="checkbox" /> 
            <span className='DisplayTaskName'>{name}</span>
            <img src={modifier} className="modifier"/>
            <img src={poubelle} className="poubelle"/>
            <span className="date">{date}</span> 
        </div>
    )
}
export default DisplayTask