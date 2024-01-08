import { BodyContent } from "../components/BodyContent"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <div className="divPrincipal">
        <div className="divContentPerson">
          <div className="divTitle1"><h2>Olá,</h2></div>
          <div className="divTitle2"><h3>me chamo MATEUS</h3></div>
          <div className="divTitle3"><h4>e sou DESENVOLVEDOR WEB</h4></div>
          <div className="divTitle4"><h4>Desenvolvedor Front-End / Next JS</h4></div>
        </div>
        <BodyContent />
        <div className='divContentContact'>
            <div className='divContentContactTitle'>CONTATO</div>
            <div className='divContentContactItemLinks'>
              <Link href={'https://github.com/mateusfpmelo'} target="_blank" ><Image src="/images/git.png"  width="70" height="70" alt="Logo github" /></Link>
              <Link href={'https://www.instagram.com/mateusfpmelo/'}  target="_blank" ><Image src="/images/insta.png"  width="70" height="70" alt="Logo instagram" /></Link>
              <Link href={'https://www.linkedin.com/in/mateusfpmelo/'}  target="_blank" ><Image src="/images/linkedin.png"  width="70" height="70" alt="Logo linkedin" /></Link>
            </div>
        </div>
      </div>
  )
}
