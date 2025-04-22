import img from "../../assets/images/freshcart.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../context/userContext";

export default function Navbar() {
  let { isLogin, setLogin } = useContext(userContext);
  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("userToken");
    setLogin(null);
    navigate("/login");
  }

  return (
    <nav className="bg-dark-subtle px-3 shadow-sm">
      <div className="d-flex flex-column flex-lg-row justify-content-between">
        <div className="logo d-flex flex-wrap">
          <img src={img} width="50" alt="logo" />

          {isLogin ? (
            <ul className="d-flex flex-column flex-lg-row  list-unstyled p-3">
              <li>
                <NavLink to={""} className="text-decoration-none p-2">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"carts"} className="text-decoration-none p-2">
                  Carts
                </NavLink>
              </li>
              <li>
                <NavLink to={"brands"} className="text-decoration-none p-2">
                  Brands
                </NavLink>
              </li>
            </ul>
          ) : null}
        </div>

        <div className="social">
          {!isLogin ? (
            <ul className="d-flex flex-column flex-lg-row p-3 list-unstyled">
              <li>
                <NavLink to={"register"} className="text-decoration-none p-2">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink to={"login"} className="text-decoration-none p-2">
                  Login
                </NavLink>
              </li>

              <li>
                <i className="fab fa-facebook px-1"></i>
                <i className="fab fa-youtube px-1"></i>
                <i className="fab fa-instagram px-1"></i>
              </li>
            </ul>
          ) : (
            <ul className="d-flex flex-column flex-lg-row p-3 list-unstyled">
              <li>
                <NavLink className="p-2 text-decoration-none">
                  <span
                    onClick={() => {
                      logOut();
                    }}
                  >
                    Logout
                  </span>
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
