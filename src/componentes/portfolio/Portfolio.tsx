import Imagem from "./../../assets/img/IMG-3008.jpg"
import './Portfolio.css'
function Portfolio(){
    return(

        
        <div className="portfolio-content">
           <img className="foto" src={Imagem} alt="" />
           <div className="texto-portfolio">
            <h1> VENHA ME CONHECER</h1>

            <p> 
                Olá me chamo Maria Vitória, tenho atualmente 18 anos e resido na cidade de Naviraí MS. <br/> 
                 Sou uma pessoa interessada em adquirir novos conhecimentos profissionais. <br/>
                Aqui está exemplos de cursos feitos por mim no IFMS.
                 </p>
           </div>
        </div>
    ) 
}

export default Portfolio