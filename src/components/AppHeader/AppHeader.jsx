import { Col, Container, Row } from "react-bootstrap";
import { FaBitcoin } from "react-icons/fa6";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import route from "../../routes/route.json";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Headroom from "react-headroom";

const AppHeader = () => {
  const { contextLogoutHandler, isAuth, user } = useContext(AuthContext);

  const logoutHandler = () => {
    contextLogoutHandler();
  };

  return (
    <>
      <Headroom>
        <Container fluid className="navbar-hero">
          <Row className="navBar d-flex justify-content-between align-items-center px-md-5 px-2">
            <Col xs={7} md={4}>
              <NavLink to={route.HOME} className="link">
                <div className="d-flex justify-content-start align-items-center logo-heading">
                  <FaBitcoin className="fs-4 me-2" />
                  <h3 className="mt-2 fs-5">Coin Place</h3>
                </div>
              </NavLink>
            </Col>
            <Col
              xs={4}
              className="d-md-flex justify-content-evenly align-items-center d-none menu"
            >
              <span>
                <NavLink to={route.HOME} className="link">
                  Home
                </NavLink>
              </span>
              <span>
                <NavLink to={route.ABOUT} className="link">
                  About
                </NavLink>
              </span>
              <span>
                <NavLink to={route.CONTACT_US} className="link">
                  Contact Us
                </NavLink>
              </span>
            </Col>
            <Col
              xs={5}
              md={4}
              className="d-flex justify-content-end align-items-center"
            >
              <h6 className="me-4 mt-2 nav-username">{user}</h6>
              {isAuth && (
                <NavLink className="link">
                  <LuLogOut className="fs-4 log-btn" onClick={logoutHandler} />
                </NavLink>
              )}
              {!isAuth && (
                <NavLink to={`/${route.LOGIN}`} className="link">
                  <LuLogIn className="fs-4 log-btn" />
                </NavLink>
              )}
            </Col>
          </Row>
        </Container>
      </Headroom>
    </>
  );
};

export default AppHeader;
