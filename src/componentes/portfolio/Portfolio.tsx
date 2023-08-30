import Imagem from "./../../assets/img/IMG-3008.jpg"
import './Portfolio.css'
function Portfolio(){
    return(
        <div className="portfolio-content">
           <img className="foto" src={Imagem} alt="" />
           <div className="texto-portfolio">
            <h1> SOBRE MIM</h1>

            <p> 
                Olá me chamo Maria Vitória, tenho atualmente 18 anos e resido na cidade de Naviraí MS. <br/> 
                 Sou apaixonada pela internet e pelo mundo da moda. <br/>
                Aqui está um de meus exemplos de projetos desenvolvido no meu curso de técnico de informática do IFMS.
                 </p>
           </div>
        </div>
    ) 
}

export default Portfolio