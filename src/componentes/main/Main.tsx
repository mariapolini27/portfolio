import { useState } from 'react'
import Informatica from './../../assets/img/informatica.png'
import Lego from './../../assets/img/lego.png'
import Logicaarduino from './../../assets/img/logicaarduino.png'
import Desenvolvimento from './../../assets/img/desenvolvimento.png'
import Projeto from './../projeto/Projeto'
import './Main.css'
type ProjetoType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Main() {
    
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Informática para internet',
            descricao:"No curso técnico em Informática para Internet se aprende a desenvolver programas de computador voltados especificamente para web. Com a ajuda de ferramentas para o desenvolvimento de sistemas, o profissional da área pode criar interfaces e aplicativos empregados no comércio e marketing eletrônicos, e desenvolver e fazer a manutenção de sites e portais na internet e intranet.",
            imagem: Informatica
        },
        {
            id:2,
            titulo:'Programação de Robotica Lego EV3',
            descricao:' Introdução ao Software Lego Mindstorm EV3  e suas principais funcionalidades. Entendendo sobre motores, sensores para detecção de obstáculos e comutação. Tratamento de Erros.  Personalizar Blocos. Estratégia de seguidor de linha.',
            imagem: Lego
        },
        {
            id:3,
            titulo:'Logica de Programação com Arduino',
            descricao:"Conceitos e Sintaxe da Linguagem de Programação para Aplicações prática, como:  Imprimindo uma mensagem no LCD, Alterando a frequência com que o LED pisca, Semáforo de Carros e Pedestres, Termômetro, Piano, Alarme, Projeto Alarme Multipropósito e Portão Eletrônico.",
            imagem: Logicaarduino
        },
        {
            id:4,
            titulo:'Desenvolvimento Pessoal e Profissional',
            descricao:"Visão de mundo; Projeto de vida; Trabalho, emprego e empregabilidade; Marketing pessoal: sua imagem no mundo; Comunicação, elaboração e aceitação de críticas; Convívio Social: respeito e educação; Elaboração de currículo; Mercado de trabalho; Planejamento financeiro e pessoal.",
            imagem: Desenvolvimento
        },
    ]

   
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
      
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>BUSQUE UM CURSO
                </p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquisar'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
                {}
                {
                    projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto
                                key={projeto.id}
                                descricao={projeto.descricao}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }
                

                
                {}

            </main>
        </>
    )
}