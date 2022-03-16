import Logo from '../img/Logo_Title.png'
import WhiteLogo from '../img/White_Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {BsGrid3X3GapFill, BsSearch} from 'react-icons/bs';

export default function Navbar() {
    return (
        <>
            <nav className="navup">
                <div className="nav-wrapper">
                    <ul className="hide-on-med-and-down">
                        <li className="navup-logo"><Link href="#" ><Image src={WhiteLogo} width={30} height={40} /></Link></li>
                        <li className="center"><Link href="#" >Shop</Link></li>
                        <li className="center"><Link href="#" >About Us</Link></li>
                    </ul>
                    <div className="img-absolute"><Link href="#" ><Image src={Logo}  width={250} height={40} /></Link></div>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><BsGrid3X3GapFill /></a>
                    <ul className="hide-on-med-and-down right">
                        <li className="center"><Link href="#" >Basket</Link></li>
                        <li className="center profile"><Link href="#" >profile</Link></li>
                    </ul>
                </div>
            </nav>
            <nav className="navdown">
                <div className="nav-wrapper">
                <div className="searchbar white black-text valign-wrapper">
                    <div className="search-icon"><BsSearch /></div>
                    <input className="search-input" placeholder="Search..."></input>
                </div>
                <ul className="hide-on-med-and-down">
                    <li className="center"><Link href="#" >Home</Link></li>
                    <li className="center"><Link href="#" >Games</Link></li>
                </ul>
                </div>
            </nav>
    
            <ul className="sidenav" id="mobile-demo">
            <li className="center"><Link href="#" >Shop</Link></li>
            <li className="center"><Link href="#" >About Us</Link></li>
            <li className="center"><Link href="#" >Games</Link></li>
            </ul>
        </>
    )
}