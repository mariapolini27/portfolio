import './Header.css'
import Logo from './../../assets/img/Black_Elegant_Modern_Name_Initials_Monogram_Logo-removebg-preview (1).png'
import LinkNav from '../linknav/LinkNav'
function Header(){
    return(
        <header>
            <div>
            <div><img className='img-logo' src={Logo} alt=""></img></div>
          
           
            </div>
    
            <nav>
                <ul>
                    <li>
                        <LinkNav url="/inicio" texto='Inicio'/>
                    </li>
                    <li>
                        <LinkNav url="/Sobre" texto='Sobre mim'/>
                    </li>
                    <li>
                        <LinkNav url="/Contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header