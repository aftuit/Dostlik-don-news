import React, { useEffect } from 'react';
import Navbar from './Navbar';
import NavbarNav from './NavbarNav';
import Card from './Card';
import { connect } from 'react-redux';
import { getNewsByCategory } from '../redux/actions/newsAction';
import { API_PATH } from '../tools/constants';
import Partners from './Partners';
import Footer from './Footer';
import ReactReadMoreReadLess from "react-read-more-read-less";

const Category = (props) => {
    useEffect(() => {
        props.getNewsByCategory(props.match.params.url)
    }, []);

    return (
        <div>
            <Navbar />
            <NavbarNav />
            <main>
                <div className="news-wrapper">
                    {
                        props.categoryNews.length > 0 &&
                        <div className="news-content d-flex justify-content-between align-items-center">
                            <h1>
                                {

                                }
                            </h1>
                            <div className="button-wrap d-flex">
                                <button type="button" className="btn mr-1">{'<'}</button>
                                <button type="button" className="btn ml-1">{'>'}</button>
                            </div>
                        </div>
                    }

                    <div className="row">
                        {
                            props.categoryNews.map(value => {
                                return (
                                    <div className="col-4 mt-4" key={value.id}>
                                        <Card
                                            img={API_PATH + 'file/get/' + value.photo}
                                            title={value.titleUz}
                                            info={ <ReactReadMoreReadLess
                                                    charLimit={75}
                                                    readMoreText={false}>
                                                        {value.descriptionUz}
                                                    </ReactReadMoreReadLess> }
                                            time={value.createdAt.slice(-8, -3) + "/" + value.createdAt.slice(0, 10)}
                                            view={value.viewCount}
                                            comment={"15"}
                                        />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="row partners-row justify-content-center bg-white w-100" >
                    <div className="col m-0 p-0"> <Partners partnerLink="prezident.uz" img="/assets/icons/emblem.svg" title="O‘zbekiston Respublikasi  Prezidentining  rasmiy sayti" /> </div>
                    <div className="col m-0 p-0"> <Partners partnerLink="my.gov.uz" img="/assets/icons/my-gov.svg" title="Davlat interaktiv xizmatlari yagona portali" /> </div>
                    <div className="col m-0 p-0"> <Partners partnerLink="data.gov.uz" img="/assets/icons/data-gov.svg" title="O‘zbekiston Respublikasi  ichki ma'lummotlari portali" /> </div>
                    <div className="col m-0 p-0"> <Partners partnerLink="kids.edu.uz" img="/assets/icons/kids.svg" title="O‘zbekiston Respublikasi Maktabgacha Ta'lim Vazirligi" /> </div>
                    <div className="col m-0 p-0"> <Partners partnerLink="dostlik-don.uz" img="/assets/icons/logopid.svg" title="“O’ZDONMAHSULOT” aksiyadorli kompaniyasi" /> </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        categoryNews: state.news.categoryNews
    }
}

export default connect(mapStateToProps, { getNewsByCategory })(Category);