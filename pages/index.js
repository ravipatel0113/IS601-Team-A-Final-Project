import Link from 'next/link';
import Head from 'next/head';
import mainStyles from '../styles/main.module.css';
import Script from 'next/script';
import menuStyles from '../styles/menu.module.css';
// import Image from 'react-native';

import React from 'react';

export default function Home() {
    return(
        <>
        <Head>
          <title>Beans & Brews</title>
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
        <section className= {mainStyles.heroSection}>
          <div>
            <img  className={mainStyles.hero} src='images/brand_quote.png' />
          </div>
          
          <div>
            <img className={mainStyles.hero} src='images/hero_image.png' />
          </div>
        </section>

        <section className= {mainStyles.heroSection2}>
          <div>
            <img className= {mainStyles.hero2} src='images/home_page_image.png'></img>
          </div>

          <div>
            <h2 className= {mainStyles.heroh2}>Rich. Intense. Indulgent.</h2>
            <p className= {mainStyles.heropara}>Enhanced by smoky and toasty undertones, our distinctive dark roasts embody our unique identity. 
              Through our expert roasting process, we unveil the profound, chocolatey sweetness of the beans, resulting in a decadently intricate coffee experience.
            </p>

            <div className= {mainStyles.ButtonDiv}>
              <Link href='/posts/about-us' className= {mainStyles.heroButton}> Read More </Link>
            </div>
          </div>
        </section>

        <h1 className= {menuStyles.h1Pop}>Popular Menu</h1>
        <section className= {menuStyles.PopSection}>
          <section className={menuStyles.popcards}>
              <div className={menuStyles.MenuContain}>
                <div className={menuStyles.ImagePart}>
                    <img className={menuStyles.coffeImage} src="images/Espresso_image.png" />

                    <div className={menuStyles.coffeeName}>
                          Espresso
                    </div>

                    <div className={menuStyles.coffeeDesc}>
                      Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink.
                    </div>

                    <div className={menuStyles.rating}>
                        Ratings 5.0
                    </div>

                    <div className={menuStyles.price}>
                        JUST $29.00
                    </div>
                </div>
              </div>
          </section>

          <section className={menuStyles.popcards}>
              <div className={menuStyles.MenuContain}>
                <div className={menuStyles.ImagePart}>
                    <img className={menuStyles.coffeImage} src="images/Cappucino_image.png" />

                    <div className={menuStyles.coffeeName}>
                          Cappucino
                    </div>

                    <div className={menuStyles.coffeeDesc}>
                        Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts.
                    </div>

                    <div className={menuStyles.rating}>
                        Ratings 5.0
                    </div>

                    <div className={menuStyles.price}>
                        JUST $20.00
                    </div>
                </div>
              </div>
          </section>

          <section className={menuStyles.popcards}>
              <div className={menuStyles.MenuContain}>
                <div className={menuStyles.ImagePart}>
                    <img className={menuStyles.coffeImage} src="images/Black_Coffee_image.png" />

                    <div className={menuStyles.coffeeName}>
                          Black Coffee
                    </div>

                    <div className={menuStyles.coffeeDesc}>
                        Black coffee, Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press.
                    </div>

                    <div className={menuStyles.rating}>
                        Ratings 5.0
                    </div>

                    <div className={menuStyles.price}>
                        JUST $25.00
                    </div>
                </div>
              </div>
          </section>

          <section className={menuStyles.popcards}>
              <div className={menuStyles.MenuContain}>
                <div className={menuStyles.ImagePart}>
                    <img className={menuStyles.coffeImage} src="images/cold_brew_image.png" />

                    <div className={menuStyles.coffeeName}>
                          Cold Brews
                    </div>

                    <div className={menuStyles.coffeeDesc}>
                        Cold brew coffee is created by   coarsely ground coffee in room temperature water for period, often 12 hours or more. using cooler temperatures and longer brewing times.
                    </div>

                    <div className={menuStyles.rating}>
                        Ratings 5.0
                    </div>

                    <div className={menuStyles.price}>
                        JUST $29.00
                    </div>
                </div>
              </div>
          </section>

        </section>
        <section className={mainStyles.subscribeSection}>
          <div id="mc_embed_shell">
            <Link href="/cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" ></Link>
            <div id="mc_embed_signup">
                <form action="https://njit.us9.list-manage.com/subscribe/post?u=3d0b19ed396d6468d588f214e&amp;id=366234b116&amp;v_id=4559&amp;f_id=001013e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                    <div id="mc_embed_signup_scroll" className={mainStyles.subscribe}>
                        
                        <h2 className={mainStyles.h2_sub}>Subscribe</h2>
                        <div className= {mainStyles.formText}>
                            <label for="mce-EMAIL">
                                Email Address:
                            </label>
                            <input type="email" name="EMAIL" className={mainStyles.emailaddress} id="mce-EMAIL" required="" >

                            </input>
                            <span id="mce-EMAIL-HELPERTEXT" className="helper_text">

                            </span>
                        </div>
                        <div id="mergeRow-gdpr" className= {mainStyles.formText}>
                            <div className="content__gdpr">
                                <p>Please select all the ways you would like to hear from Us:</p>
                                <fieldset name="interestgroup_field" className= {mainStyles.checkBox}>
                                    <label className="checkbox subfield" for="gdpr40083">
                                        <input type="checkbox" id="gdpr_40083" name="gdpr[40083]" ></input>
                                        <span>Email</span>
                                    </label>
                                </fieldset>
                            </div>
                                
                        </div>
                      <div id="mce-responses" className="clear foot">
                          <div className="response" id="mce-error-response" ></div>
                          <div className="response" id="mce-success-response" ></div>
                      </div>
                  
                      <div>   
                          <div>
                              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className={mainStyles.footertext}></input>
                              <p><a href="http://eepurl.com/iwPweY" title="Mailchimp - email marketing made easy and fun"></a></p>        
                          </div>
                      </div>
                    </div>
                </form>
            </div>
          </div>
        </section>
        </>
    );
}