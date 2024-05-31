
function Navbar(){

    <main>
         {/* <!-- Start header section --> */}
    <header class="header-area" id="header-area">
        <div class="dope-nav-container breakpoint-off">
            <div class="container">
                <div class="row">
                    {/* <!-- dope Menu --> */}
                    <nav class="dope-navbar justify-content-between" id="dopeNav">

                        {/* <!-- Logo --> */}
                        <a class="nav-brand" href="https://shoesandcare.com">
                            <img width="50px" src="https://shoesandcare.com/assets/front/img/logo/sac-black.webp" alt="logo shoes and care"  height="100%" />
                        </a>

                        {/* <!-- Navbar Toggler --> */}
                        <div class="dope-navbar-toggler">
                            <span class="navbarToggler">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>

                        {/* <!-- Menu --> */}
                        <div class="dope-menu">

                            {/* <!-- close btn --> */}
                            <div class="dopecloseIcon">
                                <div class="cross-wrap">
                                    <span class="top"></span>
                                    <span class="bottom"></span>
                                </div>
                            </div>

                            {/* <!-- Nav Start --> */}
                            <div class="dopenav">
                                <ul id="nav">
                                    <li>
                                        <a href="/">Beranda</a>
                                    </li>
                                    <li>
                                        <a href="https://shoesandcare.com/about-shoes-and-care">Tentang</a>
                                    </li>
                                    <li>
                                        <a href="https://shoesandcare.com/blog">Blog</a>
                                    </li>
									<li>
                                        <a href="https://shoesandcare.com/lokasi-workshop">Lokasi</a>
                                    </li>
                                    <li>
                                        <a href="https://shoesandcare.com/produk">Produk</a>
                                    </li>
                                    <li>
                                        <a href="https://shoesandcare.com/hasil-workshop">Galeri Kami</a>
                                    </li>
                                    <li>
                                        <a class="pricelist" href="https://shoesandcare.com/pricelist-shoes-and-care">Harga Menu</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Nav End --> */}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    </main>


}

export default Navbar;