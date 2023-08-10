import mainStyles from '../styles/main.module.css'
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBook, faEnvelope, faPhone, faStore, faFile, faBlog, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
    <>
        <footer className={mainStyles.footer}>
           
        <div className={mainStyles.footerlink}>
            <h3 className= {mainStyles.footerH3}> Useful Links </h3>
            <Link href="/privacy.html" target= '_blank'>
                <FontAwesomeIcon icon={faFile} /> Privacy Policy
            </Link>
            
            <Link href="/posts/blog">
                <FontAwesomeIcon icon={faBlog} /> Blog
            </Link>

            <Link href="/">
                <FontAwesomeIcon icon={faSearch} /> Terms & Conditions
            </Link>
        </div>

        <div className={mainStyles.footerlink}>
            <h3 className= {mainStyles.footerH3}>Lets Help You </h3>
            <Link href="/">
                <FontAwesomeIcon icon={faHome} /> Home
            </Link>

            <Link href="/posts/about-us">
                <FontAwesomeIcon icon={faUser} /> About US
            </Link>
            
            <Link href="/posts/contact-us">
                <FontAwesomeIcon icon={faPhone} /> Contact US
            </Link>
        </div>

        <section className={mainStyles.Social}>
            <div className={mainStyles.footerSocial}>
                <a href="mailto:example@example.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
                <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                <a href="https://github.com/ravipatel0113/IS601-Team-A-Final-Project.git"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
                <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
            </div>
        </section>
        </footer>
    </>
    );
}