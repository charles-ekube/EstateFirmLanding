import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropertyCards from "../cards/PropertyCards";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="arrowRight"
            onClick={onClick}
        >
            <EastIcon />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='arrowLeft' onClick={onClick} >
            <KeyboardBackspaceIcon />
        </div>
    );
}

const BestPropertyCarousel = (props) => {

    const { properties } = props

    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div style={{ paddingTop: '30px' }}>

            <Slider {...settings}>
                {properties.map((item) => (
                    <div key={item._id}>
                        <PropertyCards
                            type={'Featured'} leaseType={'For Rent'} price={item.price} background={item.gallery[0]}
                            sqft={'480'} baths={'4'} beds={'4'} location={item.friendlyAddress} detailsSubTitle={item.propertyTitle}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                ))}
                {/* <div>
                        <PropertyCards
                            leaseType={'For Sale'} price={'$3000'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            leaseType={'For Rent'} price={'$3000'} background={HomeTwo}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            leaseType={'For Sale'} price={'$3000'} background={HomeThree}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            leaseType={'For Rent'} price={'$3000'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            leaseType={'For Sale'} price={'$3000'} background={HomeFour}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            leaseType={'For Rent'} price={'$3000'} background={HomeTwo}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            leaseType={'For Sale'} price={'$3000'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            leaseType={'For Rent'} price={'$3000'} background={HomeThree}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div> */}
            </Slider>
        </div>
    );
}

export default BestPropertyCarousel;