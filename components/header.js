import mainStyles from '../styles/main.module.css'
import Link from 'next/link';

export default function Header() {
    return (
    <>
        <section className={mainStyles.menu}>

        <div className= {mainStyles.logo}>
            <img src='/images/logo.png'></img>
        </div>
        <div className={mainStyles.logoname}>
            
        </div>

        <div className={mainStyles.pagelink}>
            <Link href='/' className={mainStyles.links}>Home</Link>
            <Link href='/' className={mainStyles.links}>Blog</Link>
            <Link href="/posts/about-us" className={mainStyles.links}> About Us </Link>
            <Link href='/' className={mainStyles.links}>Contact Us</Link>

        </div>
        </section>
    </>
    );
}