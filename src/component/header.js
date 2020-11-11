import React from 'react'
import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
        <header>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <span className="navbar-brand">COURSE ENQ. APP</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/userdoubts'>User Enquires</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr/>
        </header>
    )
}

export default Header 