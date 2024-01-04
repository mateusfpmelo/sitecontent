'use client'
import { BodyContent } from "./components/BodyContent"

export default function Home() {
  return (
      <div className="divPrincipal">
        <div className="divContentPerson">
          <div className="divTitle1"><h2>Olá,</h2></div>
          <div className="divTitle2"><h3>me chamo MATEUS,</h3></div>
          <div className="divTitle3"><h4>e sou DESENVOLVEDOR WEB</h4></div>
          <div className="divTitle4"><h4>Desenvolvedor Front-End / Next JS</h4></div>
        </div>
        <BodyContent />
      </div>
  )
}
