import { Link } from 'react-router-dom';
import logo from './LOGO NUEVO.png';

export const Menu = () => {
  return (
    <nav className="navbar fixed-top d-block m-0 p-0 ">

        <nav className="navbar navbar-expand-lg navegacion-menu" data-bs-theme="dark">

            <button className="navbar-toggler position-absolute opacity-100 p-0 m-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <div className='p-2 rounded' style={{opacity:"70%"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="white" className="bi bi-list" viewBox="3 3 10 10">
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>

                </div>
            </button>

            <div className="px-auto w-100">
                <ul className="navbar-nav mx-auto mb-0 mb-lg-0 d-flex align-items-center fw-normal text-center">
                    <li className="nav-item d-block">
                        <Link className="nav-link fuente-groove fs-5 text-white" to="/">
                            <img src={logo} style={{width:"17%"}} alt='logo groove'></img>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>


















        <div className="container-fluid">

            


            <div className="offcanvas offcanvas-start text-bg-dark w-50" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title px-3" id="offcanvasDarkNavbarLabel">Menú</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                
                <div className="offcanvas-body">
                    <ul className="navbar-nav flex-grow-1 px-3">
                        <Link className="nav-link w-100" to="/">
                            <li className="nav-item mx-2 py-3" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <h6>INICIO</h6>
                            </li>
                        </Link>
                        <Link className="nav-link w-100" to="/dj">
                            <li className="nav-item mx-2 py-3" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <h6>DJ</h6>
                            </li>
                        </Link>
                        <Link className="nav-link w-100" to="/produccion-musical">
                            <li className="nav-item mx-2 py-3" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <h6>PRODUCCIÓN</h6>
                            </li>
                        </Link>
                        <Link className="nav-link w-100" to="/alquiler-sala">
                            <li className="nav-item mx-2 py-3" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <h6>ALQUILER SALA</h6>
                            </li>
                        </Link>
                        <Link className="nav-link w-100" to="/tutoriales">
                            <li className="nav-item mx-2 py-3" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <h6>TUTORIALES</h6>
                            </li>
                        </Link>
                        {/* <Link className="nav-link w-100" to="/que-es-groove">
                            <li className="nav-item mx-2" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <h6>Sobre Groove</h6>
                            </li>
                        </Link>
                        <Link className="nav-link w-100" to="/iniciar-sesion">
                            <li className="nav-item mx-2" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <h6>Iniciar sesión</h6>
                            </li>
                        </Link> */}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}
