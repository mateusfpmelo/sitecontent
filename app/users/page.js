
import Link from "next/link"


export default function Home() {
    return (
        <div>
            <div>Usuários do app</div>
            <div>1</div>
            <div>2</div>
            <nav>
                <ul>
                    <li>
                    <Link href="/">Home</Link>
                    </li>
                    <li>
                    <Link href="/users">Usuários</Link>
                    </li>
                    <li>
                    <Link href="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
  }
  