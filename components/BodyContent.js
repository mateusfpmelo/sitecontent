'use client'

import React, { useState } from 'react'
import styles from './BodyContent.module.css'
import Image from 'next/image'

export const BodyContent = () => {
  const [contentResume, setContentResume] = useState(false)
  const [contentSkills, setContentSkills] = useState(false)
  const [contentAcademic, setContentAcademic] = useState(false)
  
  const handleClickResume = () => {
    setContentResume(!contentResume)
  }
  
  const classNameCalcResume = () => {
    return contentResume ? styles.divContentItemSelected : styles.divContentItem
  }

  const handleClickSkills = () => {
    setContentSkills(!contentSkills)
  }
  const classNameCalcSkills = () => {
    return contentSkills ? styles.divContentItemSelected : styles.divContentItem
  }

  const handleClickAcademic = () => {
    setContentAcademic(!contentAcademic)
  }
  const classNameCalcAcademic = () => {
    return contentAcademic ? styles.divContentItemSelected : styles.divContentItem
  }



  return (
    <div className={styles.divColum}>
        <div className={styles.divContentBodyResume}>
            <div className={classNameCalcResume()} onClick={handleClickResume}>RESUMO</div>
        </div>
        {contentResume &&
            <div className={styles.divBodyResume}>
                <div className={styles.divBodyResumeRow1}> </div>
                <div className={styles.divBodyResumeRow2}>Me encantei pelo universo da tecnologia e programação o que me levou a realizar uma transição de carreira, e hoje sou desenvolvedor web com foco em projetos React JS. Recentemente, concluí uma pós-graduação em Projetos de Aplicativos Móveis Multiplataforma, para conhecer front-end mobile, e agora estou iniciando uma nova pós-graduação em Desenvolvimento Full Stack, buscando ampliar meu conhecimento tanto no back-end quanto no front-end, preparando-me para os futuros desafios tecnológicos. E, sou Arquiteto e Urbanista formado pela UNA. Resido em Belo Horizonte/MG.</div>
            </div>
        }
        
        <div className={styles.divContentBodyResume}>
            <div className={classNameCalcSkills()} onClick={handleClickSkills}>SKILLS</div>
        </div>
        
        {contentSkills &&
            <div className={styles.divBodyResumeSkills}>
                <div className={styles.divBodyResumeSkillsRow}>
                  <Image src="/images/1.png"  width="80" height="80"  alt="Logo nextjs"/>
                  <div><b>NEXT JS</b></div>
                </div>
                <div className={styles.divBodyResumeSkillsRow}>
                  <Image src="/images/7.png"  width="80" height="80"  alt="Logo reactjs"/>
                  <div><b>REACT JS</b></div>
                </div>
                <div className={styles.divBodyResumeSkillsRow}>
                  <Image src="/images/3.png"  width="80" height="80"  alt="Logo docker"/>
                  <div><b>DOCKER</b></div>
                </div>
                <div className={styles.divBodyResumeSkillsRow}>
                  <Image src="/images/2.png"  width="80" height="80" alt="Logo github" />
                  <div><b>GITHUB</b></div>
                </div>
                <div className={styles.divBodyResumeSkillsRow}>
                  <Image src="/images/6.png"  width="80" height="80" alt="Logo figma" />
                  <div><b>FIGMA</b></div>
                </div>
                <div className={styles.divBodyResumeSkillsRow}>
                  <Image src="/images/5.png"  width="80" height="80" alt="Logo photoshop" />
                  <div><b>PHOTOSHOP</b></div>
                </div>
                <div className={styles.divBodyResumeSkillsRow}>
                  <Image src="/images/4.png"  width="80" height="80" alt="Logo python"/>
                  <div><b>PYTHON</b></div>
                </div>
            </div>
        }
        
        <div className={styles.divContentBodyResume}>
            <div className={classNameCalcAcademic()} onClick={handleClickAcademic}>CARREIRA</div>
        </div>
        
        {contentAcademic &&
            <div className={styles.divBodyCareer}>
                <div className={styles.divBodyCareerRow1}>
                  <div className={styles.divAcademicTitle}>PROFISSIONAL</div> 
                  <div className={styles.divAcademicRow}>
                    <Image src="/images/young.png"  width="150" height="70" alt="Logo young"/>
                    <div><b>Desenvolvedor Web</b>(JUL/2022 - atualmente)</div>
                  </div>
                  <div className={styles.divAcademicRow}>
                    <Image src="/images/ultra.png"  width="150" height="40" alt="Logo ultragaz"/>
                    <div><b>Assistente Adm(técnico)</b>(2013 - 2021)</div>
                  </div>
                  
                  
                  
                </div>
                <div className={styles.divBodyCareerRow2}>
                  <div className={styles.divAcademicTitle2}>ACADÊMICO</div>
                  <div>CURSO (Next JS) - UDEMY (em andamento)</div>
                  <div>PÓS GRADUÇÃO (Projetos de Apps Móveis Multiplataforma) - DESCOMPLICA (2023)</div>
                  <div>TRILHA FRONT END - ALURA (2022 - 2023)</div>
                  <div>GRADUAÇÃO (Arquitetura e Urbanismo) - UNA (2022)</div>
                  <div>BOOTCAMP(Full Stack) - TAKEBLIP (2021)</div>
                </div>
            </div>
        }
        
    </div>
  )
}