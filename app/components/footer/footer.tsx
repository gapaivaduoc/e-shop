import Link from "next/link";
import Container from "../nav/Container";
import FooterList from "./FooterList";
import {MdFacebook} from 'react-icons/md';
import {AiFillTwitterCircle, AiFillInstagram, AiFillAmazonCircle} from "react-icons/ai"; 

const Footer = () => {
    return ( <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pd-8">
                <FooterList>
                    <h3 className="text-base font-bold md-2">Shop Categories</h3>
                    <Link href='#'>Phones</Link>
                    <Link href='#'>Laptops</Link>
                    <Link href='#'>Desktops</Link>
                    <Link href='#'>Whatches</Link>
                    <Link href='#'>TVs</Link>
                    <Link href='#'>Accessories</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold md-2">Customer Service</h3>
                    <Link href='#'>Contact Us</Link>
                    <Link href='#'>Shipping Policy</Link>
                    <Link href='#'>Returns & Exchanges</Link>
                    <Link href='#'>Whatches</Link>
                    <Link href='#'>FAQs</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-base font-bold md-2">Abount Us</h3>
                <p className="md-2">At our electronic store, we are dedicated to providing 
                the lasted and greatest devices and accessories to our costumers. 
                Whit a wide selectrion of phones,TVs, laptops, watches and accessories.</p>
                <p>&copy;{new Date().getFullYear()} E⁓Shop. All reserved </p>
                </div>
                <FooterList>
                    <h3 className="text-base font-bold md-2">Follow Us</h3>
                    <div className="flex gap-2">
                        <Link href='#'>
                            <MdFacebook size={24}/>
                        </Link>
                        <Link href='#'>
                            <AiFillTwitterCircle size={24}/>
                        </Link>
                        <Link href='#'>
                            <AiFillInstagram size={24}/>
                        </Link>
                        <Link href='#'>
                            <AiFillAmazonCircle size={24}/>
                        </Link>

                    </div>
                </FooterList>
            </div>
        </Container>
    </footer> );
}
 
export default Footer;