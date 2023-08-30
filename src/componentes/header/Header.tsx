import './Header.css'
import Logo from './../../assets/img/Black_Elegant_Modern_Name_Initials_Monogram_Logo-removebg-preview.png'
import Link from './../link/Link'
function Header(){
    return(
        <header>
            <div>
            <div><img className='img-logo' src={Logo} alt=""></img></div>
          
           
            </div>
    
            <nav>
                <ul>
                    <li>
                        <Link texto='Inicio'/>
                    </li>
                    <li>
                        <Link texto='Sobre mim'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header