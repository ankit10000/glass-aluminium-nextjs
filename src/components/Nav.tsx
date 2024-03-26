import '../css/bootstrap.css';
import '../css/icomoon.css';
import '../css/superfish.css';
import '../css/style.css';

export default function Nav() {
    return (
        <header id="fh5co-header-section" className="sticky-banner ">
        <div className="container">
            <div className="nav-header">
                <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
                <h1 id="fh5co-logo"><a href="index.html"><i className="icon-home"></i><span>The Floor Decor</span></a></h1>
                <nav id="fh5co-menu-wrap"  role="navigation">
                    <ul className="sf-menu" id="fh5co-primary-menu">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li>
                            <a href="#" className="fh5co-sub-ddown">Category</a>
                            <ul className="fh5co-sub-menu">
                                <li><a href="#">Glass</a></li>
                                <li><a href="#">Furniture</a></li>
                                <li><a href="#">Aluminium</a></li>
                                <li><a href="#">Iron</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Recent Work</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
  }