import React from "react";
import Slider from "react-slick";
import classes from "./NewMembers.module.css";

const Members = () => {
  var settings = {
    className: "center",
    centerMode: true,
		centerPadding: "60px",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 4,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2200,
    arrows: true
  };
  return (
    <div className={classes.container}>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <style>{cssstyle}</style>
    <Slider {...settings}>
	    {/*덩어리의 시작*/}
      <div>
        <div className={classes.base}>
          <img src="img/aboutus/2.png" alt="2" />
		  {/*알록달록 윗배경 - 1~7까지 사진 있으니, 간격 고려해서 띄엄띄엄 써주시면 좋을거같습니다. */}
          <img className={classes.profileImg} src="img/aboutus/HJ_1.png" alt="HJ" />
		  {/*인물사진 기입하는 곳 (크기 상관없음) */}
          <div className={classes.text}>
            <h1>Hojung Son</h1>
		{/*이름*/}
            <h2>CEO</h2>
		{/*직책*/}
          </div>
        </div>
      </div>
	     {/*덩어리의 끝*/}
      <div>
        <div className={classes.base}>
          <img src="img/aboutus/1.png" alt="1" />
          <img className={classes.profileImg} src="img/aboutus/MS.png" alt="HJ" />
          <div className={classes.text}>
            <h1>Myungseon Ryou</h1>
            <h2>CTO</h2>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.base}>
          <img src="img/aboutus/3.png" alt="3" />
          <img className={classes.profileImg} src="img/aboutus/SH.png" alt="HJ" />
          <div className={classes.text}>
            <h1>Seohyun Yoon</h1>
            <h2>R&D Director</h2>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.base}>
          <img src="img/aboutus/4.png" alt="4" />
          <img className={classes.profileImg} src="img/aboutus/C.png" alt="HJ" />
          <div className={classes.text}>
            <h1>Cheong Lee</h1>
            <h2>App Developer</h2>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.base}>
          <img src="img/aboutus/5.png" alt="5" />
          <img className={classes.profileImg} src="img/aboutus/HJ_2.png" alt="HJ" />
          <div className={classes.text}>
            <h1>Hyunjae Lee</h1>
            <h2>Engineer</h2>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.base}>
          <img src="img/aboutus/3.png" alt="3" />
          <img className={classes.profileImg} src="img/aboutus/YA.png" alt="YA" />
          <div className={classes.text}>
            <h1>Yoona Kim</h1>
            <h2>Designer</h2>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.base}>
          <img src="img/aboutus/6.png" alt="6" />
          <img className={classes.profileImg} src="img/aboutus/WH.png" alt="HJ" />
          <div className={classes.text}>
            <h1>Wonhyeong Ryu</h1>
            <h2>Marketer</h2>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.base}>
          <img src="img/aboutus/7.png" alt="7" />
          <img className={classes.profileImg} src="img/aboutus/HS.png" alt="HJ" />
          <div className={classes.text}>
            <h1>Hyeongseok Kim</h1>
            <h2>Designer & Sub Developer</h2>
          </div>
        </div>
      </div>
    </Slider>
    </div>
  );
};

const cssstyle = `
.slick-prev {
  transform:translate(-10%,-50%)
}
.slick-next:before, .slick-prev:before {
  color: #1e3257;
  font-size: 3vmin;
}
`

export default Members;
