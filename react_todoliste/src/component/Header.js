import logo from '../media/ToDo.png'
import '../css/Header.css'
function Header (){
    return <div className='header'>
        <img src={logo} className="logo" alt="Logo_check"/>
        <div className='title'>My Todo-s</div>
    </div>
}
export default Header