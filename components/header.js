import mainStyles from '../styles/main.module.css'
import Link from 'next/link';

export default function Header() {
    return (
    <>
        <section className={mainStyles.menu}>

        <div className={mainStyles.logoname}>
            <Link href='/' className={mainStyles.homelink}>Home</Link>
        </div>

        <div className={mainStyles.pagelink}>

        <Link href="/posts/about-us" className={mainStyles.links}> About Us </Link>

        </div>
        </section>
    </>
    );
}