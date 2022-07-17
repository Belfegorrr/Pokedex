import React, { useState, createContext } from 'react'
import { useTranslation } from 'react-i18next'
import Review from './Review'
import ThemeSwitcher from './ThemeSwitcher'
import LanguageSwitcher from './LanguageSwitcher'

import bg from '../../public/static/bg.png'
import cvimage from "../../public/static/cvimage.png"
import full from "../../public/static/full.png"
import midleR from "../../public/static/midleR.png"
import midleL from "../../public/static/midleL.png"
import empty from "../../public/static/empty.png"

import github from "../../public/static/github.png"
import linkedin from "../../public/static/linkedin.png"

import './global.css'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark')
  const { t } = useTranslation()

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="wrapper" id={theme}>
        <div>
          <img src={bg} className="background" alt="background-header" />
        </div>
        <div className="escrito">
          <section className="grid">
            <section className="experiencia">
              <div>
                <ThemeSwitcher toggleTheme={toggleTheme} />
              </div>
              <h1 className="titulopontilhado">{t('EXPERIÊNCIA')}</h1>
              <div className="cardtexto">
                <h3>TAQUARI PAPÉIS</h3>
                <h4>{t('Estagiário')}</h4>
                <h4>2021</h4>
                <p>
                  {t(
                    'Acompanhei a equipe de manutenção, ajudei com organização de estoque. Participei de diversos treinamentos sobre manutenção e combate à incêndio.'
                  )}
                </p>
              </div>

              <div className="cardtexto">
                <h3>FSAE-del racing</h3>
                <h4>{t('Colaborador')}</h4>
                <h4>2018</h4>
                <p>
                  {t(
                    'Competição de carros FSAE. Tecnologias ultilizadas: Excel, Ansys,SolidWorks e Matlab'
                  )}
                  .
                </p>
              </div>

              <div className="cardtexto">
                <h3>UNESP-Ilha Solteira</h3>
                <h4>{t('Universitário')}</h4>
                <h4>2013</h4>
                <p>
                  {t('Projeto prático de programação em C++ com robô Lego.')}
                </p>
              </div>

              <div>
                <h1 className="titulopontilhadorecurso">{t('RECURSOS')}</h1>
                <ul className="listaesquerda">
                  <li className="item">
                    Photoshop
                    <img src={full} alt="nivel1" />
                    <img src={full} alt="nivel3" />
                    <img src={full} alt="nivel2" />
                    <img src={empty} alt="nivel4" />
                    <img src={empty} alt="nivel5" />
                  </li>
                  <li className="item">
                    ReactJS
                    <img src={full} alt="nivel1" />
                    <img src={full} alt="nivel2" />
                    <img src={midleL} alt="nivel3" />
                    <img src={empty} alt="nivel4" />
                    <img src={empty} alt="nivel5" />
                  </li>
                  <li className="item">
                    JavaScript
                    <img src={full} alt="nivel1" />
                    <img src={full} alt="nivel2" />
                    <img src={full} alt="nivel3" />
                    <img src={empty} alt="nivel4" />
                    <img src={empty} alt="nivel5" />
                  </li>
                  <li className="item">
                    React Test Lib
                    <img src={full} alt="nivel1" />
                    <img src={full} alt="nivel2" />
                    <img src={empty} alt="nivel3" />
                    <img src={empty} alt="nivel4" />
                    <img src={empty} alt="nivel5" />
                  </li>
                  <li className="item">
                    SCRUM
                    <img src={full} alt="nivel1" />
                    <img src={full} alt="nivel2" />
                    <img src={midleL} alt="nivel3" />
                    <img src={empty} alt="nivel4" />
                    <img src={empty} alt="nivel5" />
                  </li>
                  <li className="item">
                    PHP
                    <img src={full} alt="nivel1" />
                    <img src={full} alt="nivel2" />
                    <img src={empty} alt="nivel3" />
                    <img src={empty} alt="nivel4" />
                    <img src={empty} alt="nivel5" />
                  </li>
                </ul>
              </div>
            </section>
            <section className="meio">
              <img
                src={cvimage}
                className="foto-cv"
                alt="foto-perfil"
              />
              <h1 className="nomecv">IAGO PELICHEK BEZERRA</h1>
              <h4 className="cargo">DEV FRONT-END</h4>
              <div>
                <LanguageSwitcher />
              </div>
              <p className="paragrafomeio">
                {t(
                  'Olá, Sou desenvolvedor front-end, iniciei meus estudos na Alura com foco em: HTML, CSS e Javascript. Pretendo me desenvolver em React e futuramente me desenvolver para carreiras Full Stack. Me formarei em Engenharia Mecânica, porém pretendo me focar na profissão de desenvolvedor; usar toda a minhas experiências conquistadas com estágio, projeto de extensão e TCC para buscar minhas primeiras experiências como Front-end. Ao longo dessas experiências na engenharia, pude melhorar: atitude positiva; administrar a pressão; organização e resiliência.'
                )}
              </p>

              <h1 className="pontilhadoend">{t('ENDEREÇO')}:</h1>
              <p className="endereço">Floresta - Joinville/ SC</p>

              <h1 className="telefone">{t('TELEFONE')}:</h1>
              <p className="numero">(47) 98800-3197</p>

              <h1 className="telefone">E-MAIL:</h1>
              <p className="pontilhadobottom">pelichek.iago@gmail.com</p>
              <ul>
                <li>
                  <a href="https://github.com/Belfegorrr">
                    <img src={github} alt="github logo" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/iago-pelichek-bezerra-246b671a4/">
                    <img src={linkedin} alt="linkedin logo" />
                  </a>
                </li>
              </ul>
            </section>
            <section className="educacao">
              <h1 className="titulopontilhado">{t('FORMAÇÃO')}</h1>

              <div className="cardeducacao">
                <h3>Alura</h3>
                <h4>2022-2023</h4>
                <p>{t('Curso Online focado em Front-end.')}</p>
              </div>

              <div className="cardeducacao">
                <h3>Rocketseat</h3>
                <h4>2022-2023</h4>
                <p>{t('Curso Online focado em Front-end.')}</p>
              </div>

              <div className="cardeducacao">
                <h3>UFSJ</h3>
                <h4>{t('Engenharia Mecânica')}</h4>
                <h4>2016-2022</h4>
              </div>
              <div className="cardeducacao">
                <h3>{t('IDIOMAS')}</h3>
                <h4>{t('Inglês - Intermediário')}</h4>
                <h4>{t('Alemão - Básico')}</h4>
              </div>

              <div>
                <h1 className="titulopontilhadohabilidade">
                  {t('HABILIDADES')}
                </h1>
                <ul className="listadireita">
                  <li className="item">
                    <img src={empty} alt="nivel5" />
                    <img src={midleR} alt="nivel4" />
                    <img src={full} alt="nivel3" />
                    <img src={full} alt="nivel2" />
                    <img src={full} alt="nivel1" />
                    {t('Comunicação')}
                  </li>
                  <li className="item">
                    <img src={empty} alt="nivel4" />
                    <img src={empty} alt="nivel5" />
                    <img src={full} alt="nivel3" />
                    <img src={full} alt="nivel2" />
                    <img src={full} alt="nivel1" />
                    {t('Trabalho em equipe')}
                  </li>
                  <li className="item">
                    <img src={empty} alt="nivel4" />
                    <img src={empty} alt="nivel5" />
                    <img src={full} alt="nivel3" />
                    <img src={full} alt="nivel2" />
                    <img src={full} alt="nivel1" />
                    {t('Gerenciamento de projeto')}
                  </li>
                  <li className="item">
                    <img src={empty} alt="nivel5" />
                    <img src={midleR} alt="nivel4" />
                    <img src={full} alt="nivel3" />
                    <img src={full} alt="nivel2" />
                    <img src={full} alt="nivel1" />
                    {t('Gerência de tempo')}
                  </li>
                  <li className="item">
                    <img src={empty} alt="nivel4" />
                    <img src={empty} alt="nivel5" />
                    <img src={full} alt="nivel3" />
                    <img src={full} alt="nivel2" />
                    <img src={full} alt="nivel1" />
                    {t('Organização')}
                  </li>
                  <li className="item">
                    <img src={empty} alt="nivel5" />
                    <img src={midleR} alt="nivel4" />
                    <img src={full} alt="nivel3" />
                    <img src={full} alt="nivel2" />
                    <img src={full} alt="nivel1" />
                    {t('Autonomia')}
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>
        <Review />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
