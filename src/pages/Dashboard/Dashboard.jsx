import { useEffect } from "react";
import water from "../../assets/images/footprint.svg";
import steps from "../../assets/images/humidity_low.svg";
import calories from "../../assets/images/local_fire_department.svg";
import { useAuth } from "../../utils/AuthProvider";
import "./Dashboard.scss";

export default function Dashboard() {
  const { authToken } = useAuth();
  useEffect(() => {
    if (!authToken) {
      window.location.href = "/login";
    }
  }, [authToken]);
  return (
    <>
      <div className="dashboard">
        <div>
          <h3>Mes Objectifs</h3>
          <div className="section-container">
            <div className="card">
              <div className="card__row">
                <img src={calories} alt="calories" />
                <div>
                  <p>59 k/cal</p>
                  <span>Calories</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__row">
                <img src={steps} alt="empreintes de pas" />
                <div>
                  <p>10.2 k</p>
                  <span>Pas</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__row">
                <img src={water} alt="goutte d'eau" />
                <div>
                  <p>1.5 l</p>
                  <span>Eau</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-3">Mes Séances</h3>
          <div className="row">
            <div className="col">
              <div className="card text-white p-0">
                <img
                  src="https://www.basic-fit.com/dw/image/v2/BDFP_PRD/on/demandware.static/-/Library-Sites-basic-fit-shared-library/default/dw526eff58/training-hot/Fitness%20suport%20header.jpg?sw=1440&sfrm=jpeg"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card text-white p-0">
                <img
                  src="https://www.basic-fit.com/dw/image/v2/BDFP_PRD/on/demandware.static/-/Library-Sites-basic-fit-shared-library/default/dw526eff58/training-hot/Fitness%20suport%20header.jpg?sw=1440&sfrm=jpeg"
                  class="card-img"
                  alt="..."
                />
                <div class="card-img-overlay">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card text-white p-0">
                <img
                  src="https://www.basic-fit.com/dw/image/v2/BDFP_PRD/on/demandware.static/-/Library-Sites-basic-fit-shared-library/default/dw526eff58/training-hot/Fitness%20suport%20header.jpg?sw=1440&sfrm=jpeg"
                  class="card-img"
                  alt="..."
                />
                <div class="card-img-overlay">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card text-white p-0">
                <img
                  src="https://www.basic-fit.com/dw/image/v2/BDFP_PRD/on/demandware.static/-/Library-Sites-basic-fit-shared-library/default/dw526eff58/training-hot/Fitness%20suport%20header.jpg?sw=1440&sfrm=jpeg"
                  class="card-img"
                  alt="..."
                />
                <div class="card-img-overlay">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='section-container'>
                        <div className="card">
                            <h3>Cardio</h3>
                            <p>40 min</p>
                            <p>27/09/2024 à 23:59</p>
                        </div>
                    </div> */}
        </div>
        <div>
          <h3>Mon Historiques</h3>
          <div className="section-container">
            {/* <div className="card">
              <h3>Fitness</h3>
              <p>1h</p>
              <p>23/09/2024 à 13:30</p>
            </div> */}
            <div className="row">
              <div className="col">
                <div class="card p-1">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card p-1">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card p-1">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card p-1">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
