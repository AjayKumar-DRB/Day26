import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="">My Blog</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item px-2"><a class="nav-link nav-header" href="">Courses</a></li>
                        <li class="nav-item px-2"><a class="nav-link nav-header" href="">Live Classes</a></li>
                        <li class="nav-item px-2"><a class="nav-link nav-header" href="">Practice</a></li>
                        <li class="nav-item px-2"><a class="nav-link nav-header" href="">Resources</a></li>
                        <li class="nav-item px-2"><a class="nav-link nav-header" href="">Our Products</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
