import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/constellation-brands-logo.png';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(label){
        const {branding, headerBranding} = this.props;
        headerBranding(label);
    }
    render(){
        const navList  = [
            {label: 'Users', link:'/users'},
            {label: 'Roles', link:'/roles'},
            {label: 'Entitlement', link:'/entitlement'},
            {label: 'Applications', link:'/applications'},
            {label: 'Requests', link:'/requests'},
            {label: 'Certifications', link:'/certifications'},
            {label: 'Access Policy', link:'/access-policy'}
        ]
        return(
            <div className="col-md-1 bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="pl-0">
                        <li className="list-unstyled mt-4">
                            <a href="/">
                                <img src={logo} width={100+'px'} atl="Constellation Brands"></img>
                            </a>
                        </li>
                        <li></li>
                        {navList.map(nav => {
                            return (
                                <li key={nav.label} className="list-unstyled mb-4 mt-4">
                                    <h5 className="">
                                        <Link to={nav.link} className="text-dark text-decoration-none" onClick={()=>this.handleClick(nav.label)}>
                                            {/* <i className="fab fa-4x fa-accessible-icon pb-1"></i><br/> */}
                                            {nav.label}
                                        </Link>
                                    </h5>
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;