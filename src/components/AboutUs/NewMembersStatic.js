import React from "react";
import classes from "./NewMembersStatic.module.css";

const Members = () => {
  return (
    <div className={classes.container}>
        <div>
          <div className={classes.base}>
            <img src="img/aboutus/2.png" alt="2" />
            <img
              className={classes.profileImg}
              src="img/aboutus/HJ_1.png"
              alt="HJ"
            />
            <div className={classes.text}>
              <h1>Hojung Son</h1>
              <h2>CEO</h2>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.base}>
            <img src="img/aboutus/1.png" alt="1" />
            <img
              className={classes.profileImg}
              src="img/aboutus/MS.png"
              alt="HJ"
            />
            <div className={classes.text}>
              <h1>Myungseon Ryou</h1>
              <h2>CTO</h2>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.base}>
            <img src="img/aboutus/3.png" alt="3" />
            <img
              className={classes.profileImg}
              src="img/aboutus/SH.png"
              alt="HJ"
            />
            <div className={classes.text}>
              <h1>Seohyun Yoon</h1>
              <h2>R&D Director</h2>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.base}>
            <img src="img/aboutus/4.png" alt="4" />
            <img
              className={classes.profileImg}
              src="img/aboutus/C.png"
              alt="HJ"
            />
            <div className={classes.text}>
              <h1>Cheong Lee</h1>
              <h2>App Developer</h2>
            </div>
          </div>
        </div>
            <div>
                <div className={classes.base}>
                    <img src="img/aboutus/5.png" alt="5" />
                    <img
                    className={classes.profileImg}
                    src="img/aboutus/HJ_2.png"
                    alt="HJ"
                    />
                    <div className={classes.text}>
                    <h1>Hyunjae Lee</h1>
                    <h2>Engineer</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.base}>
                    <img src="img/aboutus/3.png" alt="3" />
                    <img
                    className={classes.profileImg}
                    src="img/aboutus/YA.png"
                    alt="YA"
                    />
                    <div className={classes.text}>
                    <h1>Yoona Kim</h1>
                    <h2>Designer</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.base}>
                    <img src="img/aboutus/6.png" alt="6" />
                    <img
                    className={classes.profileImg}
                    src="img/aboutus/WH.png"
                    alt="HJ"
                    />
                    <div className={classes.text}>
                    <h1>Wonhyeong Ryu</h1>
                    <h2>Marketer</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.base}>
                    <img src="img/aboutus/7.png" alt="7" />
                    <img
                    className={classes.profileImg}
                    src="img/aboutus/HS.png"
                    alt="HJ"
                    />
                    <div className={classes.text}>
                    <h1>Hyeongseok Kim</h1>
                    <h2>Designer & Sub Developer</h2>
                    </div>
                </div>
            </div>
        </div>    
    // </div>
  );
};


export default Members;
