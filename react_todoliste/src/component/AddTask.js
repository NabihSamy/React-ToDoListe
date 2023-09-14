import "../css/AddTask.css"

import calandrier from '../media/monthly-calendar-svgrepo-com.svg'

function AddTask (){
    return (
        <div className='addTask'>
            <input type="text"  className="textAddTask"  placeholder="Add new..."    />
            <img src={calandrier}  className="calandrier" onClick={} />
            <button className="addButton">
                ADD
            </button>
        </div>
    )
}
export default AddTask


function afficherCalendrier() {
    const calendrierContainer = document.getElementById("calendrierContainer");

    // Afficher ou masquer le calendrier en fonction de son état actuel
    if (calendrierContainer.style.display === "block") {
        calendrierContainer.style.display = "none"; // Masquer le calendrier
    } else {
        calendrierContainer.style.display = "block"; // Afficher le calendrier
    }
}



