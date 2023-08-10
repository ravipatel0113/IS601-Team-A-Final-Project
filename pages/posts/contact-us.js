import Head from 'next/head';
import Link from 'next/link';
import Script from "next/script";
import contactStyles from '../../styles/contact.module.css';

export default function AboutUsPost() {
    return(
        <>
            <Head>
            <title>Contact Us</title>
            <Script strategy='afterinteractive' 
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_ID_KEY}`} />
            <Script strategy='afterinteractive'
                dangerouslySetInnerHTML={{ __html : `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', '${process.env.G_ID_KEY}', {
                    page_path: window.location.pathname,
                });`,
            }} 
            />
            <meta
                name="description"
                content="Welcome to Our Website Beans & Brews."
            />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="icon" href='/images/siteicon.ico' />
            </Head>
            <section className= {contactStyles.contactSection}>
                <h1 className= {contactStyles.h1}>Contact US</h1>
                <div className= {contactStyles.Desc}>
                    We love hearing from our customers, so grab a cup and tell us what’s on your mind.
                    <br/><br/>
                    For the fastest service, you can initiate a live-chat discussion by clicking on the Help button located in the lower right corner.
                </div>
            </section>

            <section className= {contactStyles.formSection}>
                <form className= {contactStyles.form}>
                    <div>
                        <div className= {contactStyles.formText}>
                            <div>
                                <label>
                                    First Name
                                </label>
                                <input type="Name" name="First Name" className={contactStyles.Name} required="" />
                            </div>
                            <div>
                                <label>
                                    Last Name
                                </label>
                                <input type="Name" name="Last Name" className={contactStyles.Name} required="" />
                            </div>

                        </div>
                        <div className= {contactStyles.formText}>
                            <div>
                                <label>
                                    Email Address
                                </label>
                                <input type="email" name="Email Address" className={contactStyles.Email} required="" />
                            </div>
                        </div>
                        <div className= {contactStyles.formText}>
                            <div>
                                <label>
                                    Phone Number (Optional)
                                </label>
                                <input type="number" name="Phone Number" className={contactStyles.Email}/>
                            </div>
                        </div>
                        <div className= {contactStyles.formText}>
                            <div>
                                <label>
                                    How can we help you?
                                </label>
                                <input type='text' name="Description" className={contactStyles.formDesc}/>
                            </div>
                        </div>
                        <div className= {contactStyles.ButtonDiv}>
                            <Link href='/posts/contact-us' className= {contactStyles.contactButton}> Submit </Link>
                        </div>
                    </div>
                    <div className= {contactStyles.formQuote}>
                        Want to talk about it?
                        <br/> <br/>
                        To avoid wait times on our lines, you can initiate a live-chat discussion by clicking on the Help button located in the lower right corner.
                        <br/> <br/>
                        Or give us a call at 1 (800) 999-2132, Monday through Friday from 6 am to 6 pm EST. We’re all ears.
                        <br/> <br/>
                    </div>
                </form>
            </section>
            
        </>
    );
}