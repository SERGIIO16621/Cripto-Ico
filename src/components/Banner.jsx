import { Container, Row, Col, Button } from "react-bootstrap";
import tel from "../../public/tel.png";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiDogecoin, SiLitecoin, SiRipple } from "react-icons/si";
import crypto from "../../public/icons/crypto.svg";
import { Slider } from "./Slider";
export const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row className="aling-items-center">
          <Col xs={12} md={6} xl={5}>
            <h1>Cryptocurrency Exchange</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              nesciunt excepturi. Odit id quasi harum sit autem tempore dolore
              aspernatur cumque cum iure! Cumque placeat illo doloribus dolorum
              voluptatibus quaerat?
            </p>
            <Button className="button-get-started">Get Started</Button>
          </Col>

          <Col xs={12} md={6} xl={4}>
            <img src={tel} alt="app" className="img-banner"></img>
          </Col>
        </Row>
        <div className="coins-icons">
          <a href="#">
            <span className="coin-icon">
              {" "}
              <FaBitcoin />{" "}
            </span>
            <span>Bitcoin</span>
          </a>
          <a href="#">
            <span className="coin-icon">
              {" "}
              <FaEthereum />{" "}
            </span>
            <span>Ethereum</span>
          </a>
          <a href="#">
            <span className="coin-icon">
              {" "}
              <SiLitecoin />{" "}
            </span>
            <span>Litecoin</span>
          </a>
          <a href="#">
            <span className="coin-icon">
              {" "}
              <SiRipple />{" "}
            </span>
            <span>Ripple</span>
          </a>
          <a href="#">
            <span className="coin-icon">
              {" "}
              <SiDogecoin />{" "}
            </span>
            <span>Dogecoin</span>
          </a>
          <a href="#">
            <img src={crypto}></img>
            <span>Crypto</span>
          </a>
        </div>
        {/* <Slider /> */}
      </Container>
    </section>
  );
};
