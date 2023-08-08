import mainStyles from '../styles/main.module.css'
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBook, faEnvelope, faPhone, faStore } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import { useState } from "react";
export default function Footer() {
    return (
    <>
        <footer className={mainStyles.footer}>

        <div className={mainStyles.footerlink}>
        <Link href="/">
            <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link href="/">
            <FontAwesomeIcon icon={faUser} /> About US
        </Link>
        </div>

        <div className={mainStyles.footerlink}>

            <a href="mailto:example@example.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
            <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            <a href="https://www.github.com/"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
            <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
        </div>

        <div className={mainStyles.footerlink}>

            <a href="#"><FontAwesomeIcon icon={faStore} /> Market</a>
            <a href="#"><FontAwesomeIcon icon={faPhone} /> Contact</a>

        </div>
        </footer>
    </>
    );
}