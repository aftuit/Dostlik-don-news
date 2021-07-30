import React, { useState } from 'react'
import Navbar from '../components/Navbar.js'
import NavbarNav from '../components/NavbarNav.js'
import MainCarousel from '../components/MainCarousel.js'
import Card from '../components/Card'
import SendReport from '../components/SendReport.js'
import CardTabs from '../components/CardTabs.js'
import Partners from '../components/Partners.js'
import Footer from '../components/Footer.js'
const Home = () => {

    const [data, setData] = useState([
        { id: 1, type: "camera", img: "/assets/images/card-img.png", icon: "/assets/icons/camera.svg", title: "'DO`STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." },
        { id: 2, type: "camera", img: "/assets/images/advert.png", icon: "/assets/icons/camera.svg", title: "'DO`STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." },
        { id: 3, type: "tube", img: "/assets/images/report.png", icon: "/assets/icons/tube.svg", title: "'DO`STLIKDONMAXSULOTLARI' AJ boshqaruv raisi..." }
    ])
    const [newData, setNewData] = useState(data)

    const setTabPane = (type) => {
        setData(newData.filter(value => type === 'all'? value: value.type === type))
        setNewData(newData)
    } 

    return (
        <div>
            <header>
                <Navbar />
                <NavbarNav />
                <MainCarousel />
            </header>

            <main>
                <div className="news-wrapper">
                    <div className="news-content d-flex justify-content-between align-items-center">
                        <h1>Yangiliklar</h1>
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


                    <div className="news-content cor d-flex justify-content-between align-items-center">
                        <h1>Korxonamiz yangiliklari</h1>
                        <div className="button-wrap d-flex">
                            <button type="button" className="btn mr-1">{'<'}</button>
                            <button type="button" className="btn ml-1">{'>'}</button>
                        </div>
                    </div>

                    <div className="row  mt-4">
                        <div className="col-4">
                            <Card img="/assets/images/advert.png" title="E'lon" info="“O‘zdonmaxsulot” aksiyadorlik kompaniya tizim korxonalari tomonidan istisno tarikasida maxalliy..." />
                        </div>
                        <div className="col-4">
                            <Card img="/assets/images/card-img.png" title="Eksport qiluvchi tadbirkorlik 
                                    subektlariga..." info="'DO`STLIKDONMAXSULOTLARI' AJ ning
                                    aksiyadorlari diqqatiga! 2020-yil 27-mart
                                    kuni soat 9:00 dan..." />
                        </div>
                        <div className="col-4">
                            <Card img="/assets/images/report.png" title="'DO`STLIKDONMAXSULOTLARI' AJ
                                    boshqaruv raisi..." info="'DO`STLIKDONMAXSULOTLARI' AJ
                                    boshqaruv raisi..." />
                        </div>
                    </div>


                </div>

                <SendReport />
                <div className="news-wrapper">
                    <div className="news-content d-flex justify-content-between align-items-center">
                        <h1>Media</h1>
                    </div>
                    <ul className="sections nav mt-3">
                        <li className="nav-item"><a href="#one" className="nav-link" onClick={()=>setTabPane("all")} >Barchasi</a></li>
                        <li className="nav-item"><a href="#two" className="nav-link" onClick={()=>setTabPane("camera")} >Foto galeriya</a></li>
                        <li className="nav-item"><a href="#three" className="nav-link" onClick={()=>setTabPane("tube")} >Video galeriya</a></li>
                    </ul>

                    <div className="tab-contents mt-4">
                        <div className="row bottom">

                            {
                                data.map(value => {
                                    return (
                                        <div className="col-4" key={value.id}>
                                            <CardTabs data = {value} />
                                        </div>
                                    )
                                })
                            }
                        </div>
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
    )
}
export default Home