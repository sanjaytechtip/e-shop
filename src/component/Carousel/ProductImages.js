import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductImages = (props) => {
    //console.log(props)
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };

  return (
    <div className="card p-4">
                    <Carousel
                      showDots={true}
                      responsive={responsive}
                      ssr={true} // means to render carousel on server-side.
                      infinite={true}
                      //autoPlay={this.props.deviceType !== "mobile" ? true : false}
                      autoPlaySpeed={1000}
                      //keyBoardControl={true}
                      //customTransition="all .5"
                      transitionDuration={500}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      //deviceType={this.props.deviceType}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                    >
                      {props.img?.map((m, j) => {
                        return (
                          <img
                            key={j}
                            className="card-img-top"
                            src="/images/blank-img.png"
                            alt={props.title}
                            style={{
                              backgroundImage: `url(${m})`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          />
                        );
                      })}
                    </Carousel>
                    
                  </div>
  )
}

export default ProductImages
