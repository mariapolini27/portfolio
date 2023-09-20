import { useState } from 'react'
import Projeto from './../projeto/Projeto'
import './Main.css'
type ProjetoType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Main() {
    //let textodigitado = 'Barbie'
    //Hooks são funções do React que ajudam a gente a fazer tarefas
    //específicas
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Informática para internet',
            descricao:"No curso técnico em Informática para Internet se aprende a desenvolver programas de computador voltados especificamente para web. Com a ajuda de ferramentas para o desenvolvimento de sistemas, o profissional da área pode criar interfaces e aplicativos empregados no comércio e marketing eletrônicos, e desenvolver e fazer a manutenção de sites e portais na internet e intranet.",
            imagem:'src/assets/img/Black & Blue Monoline Technology Logo.png'
        },
        {
            id:2,
            titulo:'Programação de Robotica Lego EV3',
            descricao:' Introdução ao Software Lego Mindstorm EV3  e suas principais funcionalidades. Entendendo sobre motores, sensores para detecção de obstáculos e comutação. Tratamento de Erros.  Personalizar Blocos. Estratégia de seguidor de linha.',
            imagem:'src/assets/img/Black & Blue Monoline Technology Logo (3).png'
        },
        {
            id:3,
            titulo:'Logica de Programação com Arduino',
            descricao:"Conceitos e Sintaxe da Linguagem de Programação para Aplicações prática, como:  Imprimindo uma mensagem no LCD, Alterando a frequência com que o LED pisca, Semáforo de Carros e Pedestres, Termômetro, Piano, Alarme, Projeto Alarme Multipropósito e Portão Eletrônico.",
            imagem:'src/assets/img/Black & Blue Monoline Technology Logo (5).png'
        },
        {
            id:4,
            titulo:'Desenvolvimento Pessoal e Profissional',
            descricao:"Visão de mundo; Projeto de vida; Trabalho, emprego e empregabilidade; Marketing pessoal: sua imagem no mundo; Comunicação, elaboração e aceitação de críticas; Convívio Social: respeito e educação; Elaboração de currículo; Mercado de trabalho; Planejamento financeiro e pessoal.",
            imagem:'src/assets/img/Black & Blue Monoline Technology Logo (7).png'
        },
    ]

    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>BUSQUE UM PROJETO
                </p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Projeto'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
                {/* 
                    Use algo do vetor para tentar criar os filmes 
                */}
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

                
                {/* <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser.'
                    imagem='/KEN.png'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                /> */}

            </main>
        </>
    )
}