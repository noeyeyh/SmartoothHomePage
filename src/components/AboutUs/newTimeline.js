import newTimelineCSS from './newTimeline.module.css'
import React from 'react'

function NewTimeline() {
    return (
        <div className={newTimelineCSS.base}>
            <div className={newTimelineCSS.content}>
                <img className={newTimelineCSS.linearSmartooth} src="img/aboutus/linearSmartoothS.png" alt="linear" />
                <div className={newTimelineCSS.lineVertical}></div>
                <ul>
                    <li className={newTimelineCSS.right} >
                        <h1 className={newTimelineCSS.title} >Timeline</h1>
                    </li>
{/*덩어리의 시작*/}
                    <li className={newTimelineCSS.right} >
                        {/*클래스 이름 left랑 right 번갈아서 추가하시면 됩니다.*/}
                        <img src="img/aboutus/point.png" alt="point" />
                            {/*옆에 붙어다니는 동그라미 (건드실 필요 없습니다.)*/}
                        <h2>2019.01</h2>
                            {/*날짜*/}
                        <h3 style={{marginLeft:"2vmin"}}>
                        - <b>Project Establishment</b>
                            {/*세부내용*/}
                        <br />
                        - Secured <b>Core technology</b>
                            {/*세부내용 2*/}
                        <br />
                        - Ventrue certification
                            {/*세부내용 3*/}
                        </h3>
                    </li>
{/*덩어리의 끝*/}
                    <li className={newTimelineCSS.left} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2019.05</h2>
                        <h3 style={{marginRight:"2vmin"}}>
                        - <b>NEST</b> selection by Korea Credit Guarantee Fund
                        </h3>
                    </li>
                    <li className={newTimelineCSS.right} >
                        <img src="img/aboutus/point.png" alt="point" />
                        <h2>2019.06</h2>
                        <h3 style={{marginLeft:"1.5vmin"}}>
                        - Securing Core technology
                        </h3>
                    </li>
                    <li className={newTimelineCSS.left} style={{}}>
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2019.09</h2>
                        <h3 style={{marginRight:"1.9vmin"}}>
                        - Investment from <b>Mashup Angels</b>
                        <br/>- Applying <b>Patent</b> for an Acidity sensor
                        </h3>
                    </li>
                    <li className={newTimelineCSS.right} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2019.11</h2>
                        <h3 style={{marginLeft:"2.9vmin"}}>
                        - <b>'Minister Award'</b> from <b>Korea Ministry of Science and ICT</b>
                        </h3>
                    </li>
                    <li className={newTimelineCSS.left} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2019.12</h2>
                        <h3 style={{marginRight:"2.8vmin"}}>
                        - Selected in <b>TIPS</b> program
                        </h3>
                    </li>
                    <li className={newTimelineCSS.right} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2020.02</h2>
                        <h3 className={newTimelineCSS.tooLong} style={{marginLeft:"1vmin"}}>
                        - <b>Prototype production and oral care education textbooks launch</b>
                            <br/>- Mobile App UI design
                        </h3>
                    </li>
                    <li className={newTimelineCSS.left} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2020.04</h2>
                        <h3 style={{marginRight:"1.2vmin"}}>
                        - App base Development
                        </h3>
                    </li>
                    <li className={newTimelineCSS.right} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2020.09</h2>
                        <h3 style={{marginLeft:"1vmin"}}>
                        - Pivot to <b>Optical</b> sensor from Acidity sensor, for price competitiveness
                        </h3>
                    </li>
                    <li className={newTimelineCSS.left} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2020.10</h2>
                        <h3 style={{marginRight:"1.8vmin"}}>
                        - Contracts with kindergarden
                        </h3>
                    </li>
                    <li className={newTimelineCSS.right} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2021.01</h2>
                        <h3 style={{marginLeft:"2.4vmin"}}>
                        - <b>Expansion to B2B Service</b>
                        <br/>- Disposable sensor <b>Manufacturing</b>
                        <br/>- <b>Mass-production</b> of optical sensor equipment
                        </h3>
                    </li>
                    <li className={newTimelineCSS.left} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2021.05</h2>
                        <h3 className={newTimelineCSS.tooLong} style={{marginRight:"2.2vmin"}}>
                        -Oral Care Education Demonstration service in Seocho Kindergarten
                        <br/>-<b>Working mockup Production</b>
                        </h3>
                    </li>
                    <li className={newTimelineCSS.right} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2021.10</h2>
                        <h3 style={{marginLeft:"2.4vmin"}}>
                        - <b>15,000 exclusive contracts</b> with early 
                        childhood education service corporation “DongSim”
                        </h3>
                    </li>
                    <li className={newTimelineCSS.left} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2021.11</h2>
                        <h3 style={{marginRight:"3.5vmin"}}>
                        - <b>App</b> development
                        </h3>
                    </li>
                    <li className={newTimelineCSS.right} >
                    <img src="img/aboutus/point.png" alt="point" />
                        <h2>2022.01</h2>
                        <h3 style={{marginLeft:"2vmin"}}>
                        - Applying <b>patent</b> for an optical sensor
                        </h3>
                    </li>
                </ul>
            </div>
            <div className={newTimelineCSS.lineHorizontal}></div>
        </div> 
    )
}

export default NewTimeline;
