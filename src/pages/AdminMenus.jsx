import React, { useEffect } from 'react';
import AdminLayout from '../components/AdminLayout.jsx';
import SaveLoader from '../components/SaveLoader.js';
import { Modal, ModalBody, ModalFooter, NavItem } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { updateState, saveMenu, getMenu, deleteMenu, getMainMenus } from '../redux/actions/menusAction.js';
const AdminMenus = (props) => {

    useEffect(() => {
        props.getMenu();
        props.getMainMenus();
    }, [])

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    return (
        <AdminLayout history={props.history.location}>

            <button type="button" className="btn d-block ml-auto btn-success"
                onClick={() => props.updateState({
                    open: !props.open, submenu: false 
                })}>Add</button>


            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Name (uz)</th>
                        <th>Name (ru)</th>
                        <th>Name (en)</th>
                        <th>url</th>
                        <th>submenu</th>
                        <th>parentmenu</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.menus.map((value, index) => {
                            return (
                                <tr key={value.id}>
                                    <td><b>{index + 1}.</b></td>
                                    <td>{value.nameUz}</td>
                                    <td>{value.nameRu}</td>
                                    <td>{value.nameEn}</td>
                                    <td>{value.url}</td>
                                    <td>{value.submenu ? 'submenu' : 'submenu emas'}</td>
                                    <td>{value.parentMenuName}</td>
                                    <td>
                                        <div className="d-flex">
                                            <button type="button" className="btn btn-primary mr-3" onClick={()=>props.updateState({open: true, selectedItem: value, url: value.url, submenu: value.submenu})}>Edit</button>
                                            <button type="button" className="btn btn-danger" onClick={()=>props.updateState({deleteModal: true, selectedIndex: value.id})}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Modal isOpen={props.open} toggle={() => props.updateState({ open: false, submenu: false })}>
                <AvForm onSubmit={props.saveMenu} model={props.selectedItem}>
                    <ModalBody>
                        {
                            props.selectedItem.id && 
                            <AvField name="id" type="text" className="d-none" />
                        }

                        <AvField required type="text" name="nameUz" label="Name (uz)" onChange={(e) => props.updateState({ url: generateUrl(e.target.value) })}></AvField>
                        <AvField required type="text" name="nameRu" label="Name (ru)"></AvField>
                        <AvField required type="text" name="nameEn" label="Name (en)"></AvField>

                        <AvField type="text" name="url" label="Url" value={props.url}></AvField>

                        <AvField type="checkbox" name="submenu" label="submenu" onChange={() => props.updateState({ submenu: !props.submenu })}></AvField>
                        {
                            props.submenu &&
                                <AvField type="select" name="parentId" label="Parent Menu">
                                    <option disabled>Please choose</option>
                                    { 
                                        props.mainMenus.map((value, index) => {
                                            return(
                                                <option value={value.id}>{value.nameUz}</option>
                                            )
                                        })
                                    }
                                </AvField>
                        }
                    </ModalBody>
                    <ModalFooter>
                        <button className={`btn btn-success  d-flex align-items-center justify-content-between ${props.loader && 'disabled'}`} type="submit" onClick={props.saveMenu}>
                          {props.loader &&  <SaveLoader/>} <span className={`${props.loader && 'ml-2'}`}>Save</span>
                        </button>
                        <button className="btn btn-danger" type="button" onClick={() => props.updateState({ open: false })}>cancel</button>
                    </ModalFooter>
                </AvForm>
            </Modal>
        
            <Modal isOpen={props.deleteModal} toggle={()=>props.updateState({deleteModal: false})}>
                <ModalBody>
                    Are you sure to delete this menu ?
                </ModalBody>
                <ModalFooter>
                        <button type="button" className={`btn btn-danger d-flex align-items-center ${props.loader && 'disabled'}`} onClick={props.deleteMenu}> {props.loader? <SaveLoader/> : 'Yes'}</button>
                        <button type="button" className="btn btn-secondary" onClick={() => props.updateState({ deleteModal: false })}>No</button>
                </ModalFooter>
            </Modal>
        </AdminLayout>
    );
};
const mapStateToProps = (state) => {
    return (
        {
            open: state.menus.open,
            url: state.menus.url,
            submenu: state.menus.submenu,
            menus: state.menus.menus,
            deleteModal: state.menus.deleteModal,
            selectedIndex: state.menus.selectedIndex,
            selectedItem: state.menus.selectedItem,
            mainMenus: state.menus.mainMenus,
            loader: state.menus.loader
        }
    )
}


export default connect(mapStateToProps, { updateState, saveMenu, getMenu, deleteMenu, getMainMenus })(AdminMenus);