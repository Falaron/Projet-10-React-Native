import Image from 'next/image'
import Elden_img from '../img/elden_ring.jpg'
import Link from 'next/link'

export default function GameFrame() {
    return (
        <Link href="#" >
        <div className="games-container col">
            <Image src={Elden_img} />
            <div className="row valign-wrapper">
                <h3 className="col s6 m6 l6 ">Elden Ring</h3>
                <p className="col s6 m6 l6">59.99$</p>
            </div>
        </div>
        </Link>
    )
}