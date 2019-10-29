import React from 'react';
import {Link} from 'react-router-dom';

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
            <div className="col-xs-2 d-none d-sm-block bg-dark sidebar">
                <div className="sidebar-sticky">
                    <ul className="pl-2 pr-2">
                        <li className="list-unstyled m-4">
                            <i className="fas fa-angle-up fa-4x text-white text-decoration-none"></i>
                        </li>
                        {navList.map(nav => {
                            return (
                                <li key={nav.label} className="list-unstyled m-4">
                                    <h6 className="">
                                        <Link to={nav.link} className="text-white text-decoration-none" onClick={()=>this.handleClick(nav.label)}>
                                            <i className="fab fa-4x fa-accessible-icon pb-1"></i><br/>
                                            {nav.label}
                                        </Link>
                                    </h6>
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;