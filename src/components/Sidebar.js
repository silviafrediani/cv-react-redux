import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar( {cvSalvato, saveCV} ) {

  return (

    <>

      <div className="bg-light sidebar-wrapper shadow" style={{ width: '4.5rem' }}>

        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link py-3 border-bottom"
              to="/cv"
            ><i className="fas fa-user-check fa-2x"></i></NavLink>

          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="nav-link py-3 border-bottom"
              to="/info-personali"
            ><i className="fas fa-user-lock fa-2x"></i></NavLink>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom" title="Esperienze Professionali" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fas fa-briefcase fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom" title="Istruzione e formazione" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fas fa-user-graduate fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom" title="Lingue straniere" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fas fa-globe-americas fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom" title="Lingua madre" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fas fa-globe-americas fa-2x"></i>
            </a>
          </li>
          <li>
            {cvSalvato ? 
              <span onClick={saveCV} className="nav-link py-3 border-bottom" title="CV Salvato" data-bs-toggle="tooltip" data-bs-placement="right" style={{ cursor: 'pointer' }}>
                <i className="fas fa-check fa-2x" style={{ color: "green" }}></i>
              </span>
              :
              <span onClick={saveCV} className="nav-link py-3 border-bottom" title="Salva" data-bs-toggle="tooltip" data-bs-placement="right" style={{ cursor: 'pointer' }}>
                <i className="fas fa-save fa-2x"></i>
              </span>
            }
          </li>
        </ul>
        <div className="dropdown border-top">
          <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="far fa-user-circle fa-2x"></i>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>

    </>
  );

}
