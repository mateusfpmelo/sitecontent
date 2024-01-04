'use client'
import styles from './BodyContent.module.css'
import React, { useState } from 'react'

export function BodyContent() {
  const [contentResume, setContentResume] = useState(false)
  
  const handleClickResume = () => {
    setContentResume(!contentResume)
  }

  const classNameCalcResume = () => {
    return contentResume ? styles.divContentItemSelected : styles.divContentItem
  }

  return (
    <div className={styles.divColum}>
        <div className={styles.divContentBodyResume}>
            <div className={classNameCalcResume()} onClick={handleClickResume}>RESUMO</div>
        </div>
        {contentResume &&
            <div className={styles.divBodyResume}>
                <div>IMG</div>
                <div>Me encantei pelo universo da tecnologia e programação o que me levou a realizar uma transição de carreira, e hoje sou desenvolvedor web com foco em projetos React JS. Recentemente, concluí uma pós-graduação em Projetos de Aplicativos Móveis Multiplataforma, para conhecer front-end mobile, e agora estou iniciando uma nova pós-graduação em Desenvolvimento Full Stack, buscando ampliar meu conhecimento tanto no back-end quanto no front-end, preparando-me para os futuros desafios tecnológicos. E, sou Arquiteto e Urbanista formado pela UNA.</div>
            </div>
        }
    </div>
  )
}