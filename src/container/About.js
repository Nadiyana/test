import React from "react";
import Slider from "react-slick";
import "./About.css";


const About =()=>{
   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2,
      cssEase: "linear"
    };
    return (<div className="box">
                  <h2> Улирлын онцлох</h2>
              <Slider {...settings}>
                    <div>
                      
                    </div>
                    <div className="box-1">
                       <img src="https://cdn.cody.mn/img/150350/300x0xwebp/ulirliin_ontslokh_angilal-gaduur_huwtsas.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
                       <p className="text"> Өвлийн спорт</p>
                       

                    </div>
                    <div className="box-1">
                       <img src="https://cdn.cody.mn/img/150351/300x0xwebp/owoldoo_beldey_angilal-owliin_gutal.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
                       <p className="text"> Гадуур хувцас</p>

                    </div>
                    <div className="box-1">
                       <img src="https://cdn.cody.mn/img/150352/300x0xwebp/owoldoo_beldey_angilal-agaar_tsewershuulegch.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
                       <p className="text">Өвлийн гутал</p>
                    </div>
                    <div className="box-1">
                       <img src="https://cdn.cody.mn/img/150866/300x0xwebp/huuhdiin_dulaan_tsamts.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
                       <p className="text">Агааржуулагч агаар цэвэршүүлэгч</p>
                    </div>
                    <div className="box-1">
                       <img src="https://cdn.cody.mn/img/150354/300x0xwebp/owoldoo_beldey_angilal-malgai_oroolt.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
                       <p className="text">Хүүхдийн дулаан хувцас</p>
                    </div>
                    
             </Slider>
           </div>
    );
};
export default About;