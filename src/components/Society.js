import React, {useState} from 'react';
import like from "../icons/like.svg"
import dislike from "../icons/dislike.svg"
const Society = () => {

    const [liked1, setLiked1] = useState(dislike);
    const [liked2, setLiked2] = useState(dislike);
    const [isLiked1, setIsLiked1] = useState(true);
    const [isLiked2, setIsLiked2] = useState(true);

    const likeComment1 = () => {
        (isLiked1)?
            setLiked1(like): setLiked1(dislike);
        setIsLiked1(!isLiked1)        
    }

    const likeComment2 = () => {
        (isLiked2)?
            setLiked2(like): setLiked2(dislike);
        setIsLiked2(!isLiked2)        
    }

    return (
        <div className="container-society bg-white">
            <div className="society-cell d-flex justify-content-between align-items-center">
                <a href="#1" className="text-decoration-none font-weight-bold">Jamiyat haqida</a>
                <div className="date">
                    <img src="/assets/icons/date.svg" alt="" />
                    <span className="ml-1">16:48 / 12.11.20</span>
                </div>
                <div className="views">
                    <img src="/assets/icons/view.svg" alt="" />
                    <span className="ml-1">321</span>
                </div>
                <div className="comments">
                    <img src="/assets/icons/comment.svg" alt="" />
                    <span className="ml-1">100</span>
                </div>
            </div>


            <div className="pb-4 border-bottom">
                <h1>Eksport qiluvchi tadbirkorlik subektlariga!!!</h1>
                <p>
                    “O‘zdonmaxsulot” aksiyadorlik kompaniyasi tizim korxonalari tomonidan istisno
                    tariqasida maxalliy tadbirkorlik sub'ektlariga eksport qilish sharti bilan birja
                    savdolari orqali bug’doy sotilmoqda.
                    Bug’doy 2019 yil 1 sentyabrgacha 1 tonnasining boshlangich narxi qo‘shilgan qiymat
                    solig’isiz 1 610 000 so‘mdan, qo‘shilgan qiymat solig’ini xisobga olgan xolda 1 932 000 so‘mdan sotiladi.
                    Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini
                    qo‘llash natijasida xosil bo‘lgan qo‘shilgan qiymat soligining ortiqcha summasi Adliya vazirligi tomonidan 2016 yil 7 aprelda 2775-son bilan ro‘yxatga olingan Nizomga asosan qaytarib beriladi.
                </p>
            </div>

            <div className="comment-content">
                <div className="d-flex justify-content-between">
                    <h2>
                        Mavzuga izohlar
                    </h2>
                    <span>2 ta fikr</span>
                </div>

                <div className="d-flex justify-content-between mt-4">
                    <img src="/assets/images/comment-user.png" alt="" />

                    <textarea placeholder="Izoh qoldirishingiz mumkin"></textarea>
                </div>

                <div className="d-flex justify-content-between mt-4">
                    <img src="/assets/images/user-1.png" alt="" />

                    <div className="content" >
                        <h3>Nigina Karimova</h3>
                        <span className="span">Tushunmovchilik bo’yicha qayerga murojaat qilsam bo’ladi?</span>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <div className="d-flex">
                                <img src={liked1} alt="" onClick={likeComment1}/>
                                <span className="reply">javob qaytarish</span>
                            </div>
                            <p className="time m-0"> <span>15</span> daqiqa avval </p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-4">
                    <img src="/assets/images/user-2.png" alt="" />

                    <div className="content" >
                        <h3>Sahar Kenjayev</h3>
                        <span className="span">Tadbirkorlik sub'ektlariga “nol” darajali qo'shilgan soliq stavkasi</span>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <div className="d-flex">
                                <img src={liked2} alt="" onClick={likeComment2}/>
                                <span className="reply">javob qaytarish</span>
                            </div>
                            <p className="time m-0"> <span>2</span> soat avval </p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};


export default Society;