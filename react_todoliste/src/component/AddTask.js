import "../css/AddTask.css"

import calandrier from '../media/monthly-calendar-svgrepo-com.svg'

function AddTask (){
    return (
        <div className='addTask'>
            <input type="text"  className="textAddTask"  placeholder="Add new..."    />
       
            <input type="date" className="calandrier"  />
            
            <button className="addButton">
                ADD
            </button>
        </div>
    )
}
export default AddTask


function afficherCalendrier() {
    const datePickerInput = document.getElementById('datePicker');
    if (datePickerInput) {
        datePickerInput.click(); // Simuler un clic sur le champ de saisie de date
    }
}



