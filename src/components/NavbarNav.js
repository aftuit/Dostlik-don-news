import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMainMenus } from '../redux/actions/menusAction';
const NavbarNav = (props) => {

    useEffect(() => {
        props.getMainMenus()
    }, []);

    return (
        <div className="container-navbar-nav d-flex align-items-center">
            <img src="/assets/icons/navbar-nav-icon.svg" className="mr-4" alt="" />

            <ul className="nav ml-4">

                {
                    props.mainMenus.map((value) => {
                        return (
                            <li className="nav-item" key={value.id}>
                                <Link className="nav-link">{value.nameUz}</Link>

                                    {value.submenus.length > 0 &&
                                        <ul className="nav submenu flex-column">
                                            {
                                                value.submenus.map((value2) => {
                                                    return(
                                                        <li className="nav-item" key={value2.id}>
                                                            <Link className="nav-link" to={'/category/' + value2.url}>{value2.nameUz}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    }



                            </li>
                        )
                    })
                }

            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        mainMenus: state.menus.mainMenus
    }
}

export default connect(mapStateToProps, { getMainMenus })(NavbarNav);