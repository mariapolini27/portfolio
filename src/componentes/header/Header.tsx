import './Header.css'
import Link from './../link/Link'
function Header(){
    return(
        <header>
            <div>
            <div><img className='img-logo' src="src\assets\img\Barbie_Logo.svg.png" alt=""></img></div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Notícia'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
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