import Head from "next/head";
import Script from "next/script";
import aboutStyle from '../../styles/about.module.css'
import { mainModule } from "process";

export default function AboutUsPost() {
    return(
        <>
        <Head>
          <title>About Us</title>
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
        <span className= {aboutStyle.withLine}>About Us</span>

        <section>
            <div className= {aboutStyle.aboutSection}>

                <img className= {aboutStyle.aboutImage} src="/images/about_page_image.png" />

                <div className= {aboutStyle.aboutContain}>
                    <div className= {aboutStyle.aboutTitle}>
                    <h3 className= {aboutStyle.h3}>Our Company</h3>

                    <img className= {aboutStyle.coffeeSymbol} src="/images/coffee_symbol.png" />

                    </div>

                    <div className= {aboutStyle.aboutDesc}>
                        Beans & Brews started from humble beginnings in a small town, and over the years, we've grown in size and scope, but we've never lost our community-focused roots. 
                        Our founders, inspired by their love of quality coffee, embarked on a mission to provide people with a memorable coffee experience, a place to relax and feel at home. 
                        We're more than just a coffee shop, we are a part of your daily routine, your work ritual, your escape, and your comfort.
                    </div>
                </div>

            </div>
        </section>

        <section className= {aboutStyle.MissionSection}>

            <span className= {aboutStyle.missionLine}>Our Mission</span>
            <div className= {aboutStyle.missionContain}>

                    <div className= {aboutStyle.missionDesc}>
                        At Beans & Brews, our mission is to serve not just a cup of coffee, but a moment of comfort, connection, and community. 
                        We are dedicated to crafting the finest coffee experiences, steeped in authenticity and quality, and delivered with warmth and hospitality.
                    </div>
                </div>
            {/* <section className= {aboutStyle.missionDesc}>
                <div>
                    At Beans & Brews, our mission is to serve not just a cup of coffee, but a moment of comfort, connection, and community. 
                    We are dedicated to crafting the finest coffee experiences, steeped in authenticity and quality, and delivered with warmth and hospitality.
                </div>
            </section> */}

        </section>

        <section>
        <span className= {aboutStyle.valueLine}>Our Value & Personality</span>

            <div className= {aboutStyle.valueSection}>

                <img className= {aboutStyle.valueImage} src="/images/value_section_image.png" />

                <div className= {aboutStyle.valueContain}>

                    <div className= {aboutStyle.valueDesc}>
                        We are committed to authenticity, quality, and sustainability. 
                        We believe in doing business in a way that respects our earth and its resources. 
                        That's why we source our beans from responsible and sustainable farms, and our brewing process is always respectful of the environment. 
                        We value the relationships we build with our customers and the community, making them the heart of everything we do.
                    </div>
                </div>

            </div>
        </section>

        <section className= {aboutStyle.BrandSection}>

            <span className= {aboutStyle.brandLine}>Our Archetypes</span>

            <div className= {aboutStyle.Brand}>

                <img className= {aboutStyle.brandImage} src="/images/Everyman_image.png" />

                <div className= {aboutStyle.valueContain}>

                    <div className= {aboutStyle.brandDesc}>
                        <b>The Everyman: </b> This archetype is down-to-earth, honest, hardworking, and values comfort and simplicity. 
                        This archetype aligns with Beans & Brews as the brand is positioned to be approachable, inviting, and centered around community, providing a comforting and familiar space for its customers. 
                        It's not about luxury or exclusivity, but about being a part of daily routines, being an integral part of the community, and making everyone feel welcomed.
                    </div>
                </div>

            </div>

            <div className= {aboutStyle.Brand}>

                <div className= {aboutStyle.valueContain}>

                    <div className= {aboutStyle.brandDesc}>
                        <b>The Caregiver: </b>The Caregiver archetype shows through Beans & Brews' commitment to sustainable sourcing, the earth, and its resources, 
                        as well as its dedication to fostering a sense of belonging among its customers. 
                        The Caregiver is compassionate, generous, and seeks to help and protect others. 
                        By prioritizing a business model that respects the environment and cherishes the relationships with customers and the community. 
                        Beans & Brews displays aspects of the Caregiver archetype.
                    </div>
                </div>

                <img className= {aboutStyle.brandImage} src="/images/Caregiver_image.png" />

            </div>

        </section>
    </>
    ); 
}