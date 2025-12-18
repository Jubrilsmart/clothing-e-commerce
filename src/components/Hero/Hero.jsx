import Slider from 'react-slick';
import image2 from "../../assets/website/african.png";
import image1 from "../../assets/website/girl.png";
import image3 from "../../assets/website/sale.png";

const ImageList = [
  {
    id: 1,
    img: image1,
    title: "Upto 50% off on all Men's wear",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident incidunt perferendis est voluptatibus in?"
  },
  {
    id: 2,
    img: image2,
    title: "Upto 50% off on all Kids wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, repellat temporibus cumque voluptas."
  },
  {
    id: 3,
    img: image3,
    title: "70% Sale on All Electronics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure voluptatem quidem iste."
  }
];

function Hero({ handleOrderPopup }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100/50 dark:bg-gray-950/50 dark:text-white duration-200">
      
      {/* Background */}
      <div className="h-[700px] w-[700px] bg-[var(--primary)] rotate-45 absolute -top-1/2 right-0 rounded-3xl"></div>

      {/* Slick wrapper MUST NOT be inside a flex container */}
      <div className="container pb-8 sm:pb-0 sm:px-2 mx-auto">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">

                {/* Text */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 sm:m-8 mx-auto">
                  <h1
                    data-aos='zoom-out'
                    data-aos-duration="500"
                    data-aos-once="true"
                   className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                  <p 
                    data-aos='zoom-out'
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-sm">{data.description}</p>
                  <div
                    data-aos='zoom-out'
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <button className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    onClick={() => handleOrderPopup()}
                    >
                    Order Now
                  </button>
                  </div>
                  
                </div>

                {/* Image */}
                <div className="order-1 sm:order-2 flex justify-center">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                  />
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
