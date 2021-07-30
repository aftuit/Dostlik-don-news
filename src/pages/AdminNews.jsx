import React, { useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { updateNewsState, saveNews, getFile, getData, deleteNews } from '../redux/actions/newsAction';
import { getSubMenus } from '../redux/actions/menusAction';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { API_PATH } from '../tools/constants';
import SaveLoader from '../components/SaveLoader';
const AdminNews = (props) => {

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    useEffect(()=>{
        props.getSubMenus();
        props.getData();
    }, [])

    const saveFile = (e) => {
        let data = new FormData();
        data.append("file" , e.target.files[0])
        props.getFile(data);
    }

    return (

        <AdminLayout history = {props.history.location}>

            <button className="btn btn-success d-block ml-auto" onClick={()=>props.updateNewsState({openModal: true})}>Add news</button>

            <div className="row">
            {
                props.newsCard.map((value, index) => 
                        <div className="col-4  mt-3" key={value.id}>
                            <div className="card">
                                <div className="card-header">
                                    <h5>{value.titleUz}</h5>
                                </div>
                                <div className="card-body">
                                    <img className="w-100 h-25" src={API_PATH + "file/get/" + value.photo.id} alt="" />
                                    <p>{value.descriptionUz}</p>
                                    <p>Link-menu: <b>{ value.menu.nameUz }</b></p>
                                </div>

                                <div className="card-footer d-flex justify-content-between">
                                    <button className="btn btn-primary" onClick={()=>props.updateNewsState({ selectedItem: value, openModal: true, url: value.url, photo: value.photo.id })}>Edit</button>
                                    <button className="btn btn-danger" onClick={()=>props.updateNewsState({ deleteModal: true, selectedIndex: value.id })}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
            }
            </div>

            <Modal isOpen={props.openModal} toggle={() => props.updateNewsState({openModal: false, selectedItem: {}})}>
                <AvForm onSubmit={props.saveNews} model={props.selectedItem}>
                    <ModalBody>
                        {
                            props.selectedItem.id &&
                            <AvField name="id" type="text" className="d-none" />
                        }

                        <AvField required label="Title (uz)" type="text" name="titleUz" onChange={(e) => props.updateNewsState({url: e.target.value})} />
                        <AvField required label="Description (UZ)" type="textarea" name="descriptionUz"></AvField>
                        
                        <AvField required label="Title (ru)" type="text" name="titleRu" />
                        <AvField required label="Description (RU)" type="textarea" name="descriptionRu"></AvField>

                        <AvField required label="Title (en)" type="text" name="titleEn" />
                        <AvField required label="Description (EN)" type="textarea" name="descriptionEn"></AvField>

                        <AvField  type="select" name="menu">
                            <option value="1">Choose link</option>
                            {
                                props.subMenus.map((value) => {
                                    return(
                                        <option value={value.id}>{value.nameUz}</option>
                                    )
                                })
                            }
                        </AvField> 

                        <AvField name="url" label="Url" value={generateUrl(props.url)}/>

                        <input type="file" accept=".png, .svg, .jpg, .jpeg" onChange={saveFile}/>
                        <div className="news_image">
                            <img src={API_PATH + 'file/get/' + props.photo} alt="" className="w-100 mt-3" />
                            {
                                props.photo.length > 0 &&
                                <div className="close-img" onClick={()=>props.updateNewsState({photo: ""})}>&times;</div>
                            }
                        </div>

                    </ModalBody>

                    <ModalFooter>
                        <button type="submit" className={`btn btn-primary ${props.loader && 'disabled'}`}>{props.loader? <SaveLoader/> : 'Save'}</button>
                        <button type="button" className="btn btn-secondary" onClick={()=>props.updateNewsState({openModal: false, selectedItem: {}})}>Cancel</button>
                    </ModalFooter>
                </AvForm>
            </Modal>
        
            <Modal isOpen={props.deleteModal}>
                <ModalBody>Are you sure to delete this list ?</ModalBody>
                <ModalFooter>
                    <button className={`btn btn-danger ${props.loader && 'disabled'}`} onClick={props.deleteNews}>{props.loader? <SaveLoader/> : 'Yes'}</button>
                    <button className="btn btn-secondary" onClick={()=>props.updateNewsState({deleteModal: false})}>No</button>
                </ModalFooter>
            </Modal>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        openModal: state.news.openModal,
        newsCard: state.news.newsCard,
        photo: state.news.photo,
        deleteModal: state.news.deleteModal,
        url: state.news.url,
        subMenus: state.menus.subMenus,
        selectedIndex: state.news.selectedIndex,
        selectedItem: state.news.selectedItem,
        loader: state.menus.loader
    }
}

export default connect(mapStateToProps, {updateNewsState, saveNews, getSubMenus, getFile, deleteNews, getData})(AdminNews);