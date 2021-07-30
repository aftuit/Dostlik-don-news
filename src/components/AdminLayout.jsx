import React from 'react';
import { Link } from 'react-router-dom';
const AdminLayout = (props) => {
    console.log()
    return (
        <div className="admin-layout">
            <div className="admin-layout-left">
                <div className="user-info d-flex justify-content-between align-items-center">
                    <div>
                        <img src="/assets/icons/user.svg" alt="error" />
                    </div>
                    <div>
                        <h5 className="mb-1">Farrux Aktamov</h5>
                        <p className="mb-0">Administrator</p>
                    </div>
                </div>

                <div className="menu">
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link to="/admin/menu" className={`nav-link ${props.history.pathname === '/admin/menu' && 'active'}`}>Menyular</Link></li>
                        <li className="nav-item"><Link to="/admin/news" className={`nav-link ${props.history.pathname === '/admin/news' && 'active'}`}>Yangiliklar</Link></li>
                        {/* <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.pathname === '/admin' && 'active'}`}>Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.pathname === '/admin' && 'active'}`}>Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.pathname === '/admin' && 'active'}`}>Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.pathname === '/admin' && 'active'}`}>Yangiliklar</Link></li> */}
                    </ul>
                </div>
            </div>
            <div className="admin-layout-right">
                {                
                props.children
                }
            </div>
            
        </div>
    );
};


export default AdminLayout;