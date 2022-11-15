import React from 'react';
import './advantage.css';
import Documents from '../../assets/document.png';
import Ceiling from '../../assets/ceiling.png';
import Windows from '../../assets/windows.png';
import Crane from '../../assets/crane.png';
import Tree from '../../assets/tree.png';
import Cctv from '../../assets/cctv.png';
import Parking from '../../assets/parking.png';
import Percentage from '../../assets/percentage.png';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Advantage = () => {
    return(
        <div className="Advantage" id="advantage">
            <ScrollAnimation animateIn='animate__slideInLeft'>
               <h2 className='main-title'>Наши преимущества</h2> 
               <p className='border-title'></p>
            </ScrollAnimation>
            <div className="list-of-benefits">
                <div className="benefit">
                    <div className="benefit-title">
                        <img src={Documents} alt="" className="benefit-icon" />
                        <h4 className="b-title">Разрешительные документы</h4>
                    </div>
                    <p className="benefit-desc">
                        Мы строим дома на собственных земельных участках 
                        исключительно на красной книге и предварительно получив 
                        все необходимые разрешительные документы
                    </p>
                </div>

                <div className="benefit">
                    <div className="benefit-title">
                        <img src={Ceiling} alt="" className="benefit-icon" />
                        <h4 className="b-title">Высота потолков 3,3 метра</h4>
                    </div>
                    <p className="benefit-desc">
                        Высокие потолки позволяют реализовать самые 
                        изящные дизайнерские решения
                    </p>
                </div>

                <div className="benefit">
                    <div className="benefit-title">
                        <img src={Windows} alt="" className="benefit-icon" />
                        <h4 className="b-title">Панорамные окна</h4>
                    </div>
                    <p className="benefit-desc">
                        ЖК Rich Home оснащён панорамным остеклением квартир с 
                        использованием окон из высококачественного алюминиевого 
                        профиля с немецкой гарнитурой
                    </p>
                </div>

                <div className="benefit">
                    <div className="benefit-title">
                        <img src={Crane} alt="" className="benefit-icon" />
                        <h4 className="b-title">Премиальные материалы</h4>
                    </div>
                    <p className="benefit-desc">
                        Фасад дома в  ЖК Rich Home отделан дорогим, надежным и 
                        долговечным керамогранитом. При строительстве мы используем 
                        бетон высокой прочности марки М-350, а также арматуру Российского
                        производства марки А-500
                    </p>
                </div>

                <div className="benefit">
                    <div className="benefit-title">
                        <img src={Tree} alt="" className="benefit-icon" />
                        <h4 className="b-title">Благоустройство</h4>
                    </div>
                    <p className="benefit-desc">
                        Детская площадка, зоны отдыха и воркаут зоны, обширное озеленение
                        территории позволяют жильцам наших домов жить комфортной и 
                        счастливой жизнью
                    </p>
                </div>

                <div className="benefit">
                    <div className="benefit-title">
                        <img src={Cctv} alt="" className="benefit-icon" />
                        <h4 className="b-title">Безопасность</h4>
                    </div>
                    <p className="benefit-desc">
                        Закрытая и охраняемая территория с круглосуточным 
                        видеонаблюдением обеспечивают безопасность для всей семьи
                    </p>
                </div>

                <div className="benefit">
                    <div className="benefit-title">
                        <img src={Parking} alt="" className="benefit-icon" />
                        <h4 className="b-title">Удобные паркинги</h4>
                    </div>
                    <p className="benefit-desc">
                        С подземным и гостевым паркингом, вы позабудете о проблеме парковки
                    </p>
                </div>

                <div className="benefit">
                    <div className="benefit-title">
                        <img src={Percentage} alt="" className="benefit-icon" />
                        <h4 className="b-title">Беспроцентная рассрочка</h4>
                    </div>
                    <p className="benefit-desc">
                        Вы можете приобрести квартиру с беспроцентной рассрочкой 
                        до 24-х месяцев
                    </p>
                </div>
            </div>
            <ScrollArrow />
        </div>
    )
}

export default Advantage;