import { useState } from 'react';
import './Contato.css'

function Contato(){

    const [contatoTexto, setContatoTexto]=useState("")

    function TrataContatoTexto(e:React.ChangeEvent<HTMLInputElement>){
        setContatoTexto(e.target.value)
    }

    return(
        <div className='contatos'>
      <form>
        <div className="informacoes">
            <h1> Olá, preencha os campos abaixo para entrar em contato comigo.</h1>

          <label>Nome:</label>
            <input className="input" placeholder='Nome Completo' onChange={TrataContatoTexto}/>
           

            <label>E-mail:</label>
            <input className='input' type='email' placeholder='E-mail' onChange={TrataContatoTexto}/>


            <label>Celular:</label>
            <input className='input' type='cel' placeholder='Celular' onChange={TrataContatoTexto}/>
            </div>
            <button>Enviar</button>
            <div className="contatoTexto">
             {contatoTexto && <p>{contatoTexto}</p>}
            </div>
            </form>
      </div>
    )
}

export default Contato