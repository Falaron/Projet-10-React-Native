import Logo from '../img/Logo_Title.png'
import InstaLogo from '../img/instagram.png'
import LinkedinLogo from '../img/linkedin.png'
import TwitterLogo from '../img/twitter.png'
import FbLogo from '../img/facebook.png'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    return (
        <footer className="page-footer">
                <div className="container center">
                    <div className="row">
                        <div className="col l4 s12">
                            <ul>
                            <li className="is-footer"><a className="grey-text text-lighten-3" href="#">Legal Notice</a></li>
                            <li className="is-footer"><p className="grey-text text-lighten-3" href="#">Contact Us</p></li>
                            <li><p href="#!" className="color">(+33)6 00 00 00 00</p></li>
                            <li><p href="#!" className="color">contact@fireball.com</p></li>
                            </ul>
                        </div>
                        <div className="col l4 s12">
                            <Image className="responsive-img" src={Logo} />
                            <ul>
                            <li className="is-footer color">Home</li>
                            <li className="is-footer color">Games</li>
                            <li className="is-footer color">Articles</li>
                            </ul>
                            <div className="social-network">
                                <Link href="#" ><Image className="footer-img" src={InstaLogo} width={50} height={50} /></Link>
                                <Link href="#" ><Image className="footer-img" src={LinkedinLogo} width={50} height={50} /></Link>
                                <Link href="#" ><Image className="footer-img" src={TwitterLogo} width={50} height={50} /></Link>
                                <Link href="#" ><Image className="footer-img" src={FbLogo} width={50} height={50} /></Link>
                            </div>
                        </div>
                        <div className="col l4 s12">
                            <ul>
                            <li className="is-footer"><a className="grey-text text-lighten-3" href="https://en.wikipedia.org/wiki/Terms_of_service" target="_blank" rel="nofollow">Terms of Service</a></li>
                            <li className="is-footer"><a className="grey-text text-lighten-3" href="https://en.wikipedia.org/wiki/Privacy_policy" target="_blank" rel="nofollow">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center">
                    © 2022 Fireball. All rights reserved
                    </div>
                </div>
            </footer>
    )
}