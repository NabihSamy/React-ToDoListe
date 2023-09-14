import {tasks} from '../data/tasks.js'
import DisplayTask from './DisplayTask.js'
import '../css/ListTask.css'

function ListTask(){
    return <div className="ListTask">

        {tasks.map( 
            (element) => ( 
                <div className="OneElement">
                    <DisplayTask name ={element.name} date ={element.date}/>
                </div>   

            ))}
        </div>
}
export default ListTask