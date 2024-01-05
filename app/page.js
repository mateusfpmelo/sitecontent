'use client'
import { BodyContent } from "./components/BodyContent"
import Image from 'next/image'
import Link from 'next/link'

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
        
        <div className='divContentContact'>
            <div className='divContentContactItem'>CONTATO</div> 
            <Link href={'https://github.com/mateusfpmelo'} target="_blank" ><Image src="/images/git.png"  width="80" height="80" alt="Logo github" /></Link>
            <Link href={'https://www.instagram.com/mateusfpmelo/'}  target="_blank" ><Image src="/images/insta.png"  width="80" height="80" alt="Logo instagram" /></Link>
            <Link href={'https://www.facebook.com/mateusfpmelo'}  target="_blank" ><Image src="/images/faceb.png"  width="80" height="80" alt="Logo facebook" /></Link>
            
            
        </div>
      </div>
  )
}
