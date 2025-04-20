const menuBtn = document.querySelector('.menu-btn');
const menuPage = document.querySelector('.cont-page');

let menuOpen = false;

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open2');
            menuPage.classList.add('open2');
            menuOpen = true;
        }else{
            menuBtn.classList.remove('open2');
            menuPage.classList.remove('open2');
            menuOpen = false;
        }
    });
}

class Nav extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            :root{

                /*colors*/
                --blk-clr: #000000;
                --wht-clr: #ffffff;
                --grey-clr: #d7d7d787;
                --lght-blk: #474747;
                --lght-wht: #fefefe;

                /*pallete*/
                --gld-clr: #897233;
                --blu-clr: rgba(136,177,198,1);
                --purp-clr: rgba(198,136,177,1);
                --red-clr: #e50914;
            }

            nav{
                overflow: hidden;

                position: fixed;
                z-index: 10;

                /* From https://css.glass */
                background: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                top: 4.5%;
                left: 0;
                width: 100%;
                padding: .5em 5em;
                transition: all 0.4s ease;
            }

            .titleLogo h1{
                font-display: swap;
                font-size: 2em;
                font-family: "Playfair Display";
                font-weight: 400;

                text-transform: uppercase;
                text-align: center;
            }

            .titleLogo h1 a{
                text-decoration: none;
                color: var(--blk-clr);
            }

            nav .nav-content{
                height: 100%;
                width: 100%;

                margin: 0;
                
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .nav-content ul{
                list-style: none;
                
                padding: 0;
                padding-top: .5em;

                width: 100%;
                height: 100%;

                display: flex;
                align-items: center;
                justify-content: flex-end;

                gap: 5em;
            }

            .nav-content li{
                font-family: "Poppins";
                font-size: .90em;
                font-weight: 500;

                cursor: pointer;

                text-transform: uppercase;
            }
            
            .nav-content li:hover,
            .nav-content li:active,
            .nav-content li:focus{
                color: var(--gld-clr);
            }

            nav .titleLogo{
                flex: 1;

                width: 100%;
                height: 100%;

                padding: 0;

                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            .titleLogo h1:hover,
            .titleLogo h1:active,
            .titleLogo h1:focus{
                cursor: pointer;
            }

            nav li a{
                text-decoration: none;
                color: var(--blk-clr);
            }

            /*--tablets extra large--*/
            @media screen and (max-width: 989px) {
                nav .titleLogo h1{
                    text-align: right;
                }
            }

            /*--tablets--*/
            @media screen and (max-width: 838px) {
                nav{
                    padding: .5em 2.5em;
                }
            }

            /*--phones--*/
            @media screen and (max-width: 36rem) {
                nav{
                    top: 2%;
                }
                .titleLogo h1{
                    text-align: right;
                }
            }
        </style>

        <nav>
            <div class="titleLogo">
                <h1><a class="nav-link" href="/index.html">Port-City Interior Decor and Design</a></h1>
            </div>
            <div class="nav-content">
                <ul>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/portfolio.html">Portfolio</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                    <li><a href="/shop.html">Shop</a></li>
                    <li><a href="/blog.html">Blog</a></li>
                </ul>
            </div>
        </nav>
      `;
    }
  }
  
  customElements.define('nav-component', Nav);