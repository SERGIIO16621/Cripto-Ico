import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiDogecoin, SiLitecoin, SiRipple } from "react-icons/si";
import crypto from "../../public/icons/crypto.svg";
import Carousel from "react-bootstrap/Carousel";

export const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="#">
          <div className="icon-carousel">
            <span className="coin">
              <FaBitcoin />
            </span>
            <span className="text-slider">Bitcoin</span>
          </div>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#">
          <div className="icon-carousel">
            <span className="coin">
              <FaEthereum />
            </span>
            <span className="text-slider">Ethereum</span>
          </div>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#">
          <div className="icon-carousel">
            <span className="coin">
              <SiLitecoin />
            </span>
            <span className="text-slider">Litecoin</span>
          </div>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#">
          <div className="icon-carousel">
            <span className="coin">
              <SiRipple />
            </span>
            <span className="text-slider">Ripple</span>
          </div>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#">
          <div className="icon-carousel">
            <span className="coin">
              {" "}
              <SiDogecoin />{" "}
            </span>
            <span className="text-slider">Dogecoin</span>
          </div>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#">
          <div className="icon-carousel">
            <span className="coin">
              <img src={crypto} className="img-coin-crypto"></img>
            </span>
            <span className="text-slider">Crypto</span>
          </div>
        </a>
      </Carousel.Item>
    </Carousel>
  );
};
