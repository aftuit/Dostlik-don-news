import React from 'react';
import Navbar from '../components/Navbar';
import NavbarNav from '../components/NavbarNav';
import Society from '../components/Society';
import Media from '../components/Media.js';
import ReportCard from '../components/ReportCard';
import Card from '../components/Card';
import Footer from '../components/Footer';
const Inform = () => {
    return (
        <div>
            <header>
                <Navbar />
                <NavbarNav />
            </header>
            <main>
                <div className="wrapper news-wrapper">
                    <div className="row">
                        <div className="col-8">
                            <Society />
                        </div>

                        <div className="col-4">
                            <Media />

                            <ReportCard />

                        </div>
                    </div>

                    <div className="news-content cor d-flex justify-content-between align-items-center">
                        <h1>So'nggi yangiliklar</h1>
                        <div className="button-wrap d-flex">
                            <button type="button" className="btn mr-1">{'<'}</button>
                            <button type="button" className="btn ml-1">{'>'}</button>
                        </div>
                    </div>


                    <div className="row mt-4">
                        <div className="col-4">
                            <Card img="/assets/images/card-img1.png" title="E'lon" info="“O‘zdonmaxsulot” aksiyadorlik kompaniya tizim korxonalari tomonidan istisno tarikasida maxalliy..." />
                        </div>
                        <div className="col-4">
                            <Card img="/assets/images/report.png" title="Eksport qiluvchi tadbirkorlik 
                                    subektlariga..." info="'DO`STLIKDONMAXSULOTLARI' AJ ning
                                    aksiyadorlari diqqatiga! 2020-yil 27-mart
                                    kuni soat 9:00 dan..." />
                        </div>
                        <div className="col-4">
                            <Card img="/assets/images/card-img.png" title="'DO`STLIKDONMAXSULOTLARI' AJ
                                    boshqaruv raisi..." info="'DO`STLIKDONMAXSULOTLARI' AJ
                                    boshqaruv raisi..." />
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>

        </div>
    );
};


export default Inform;