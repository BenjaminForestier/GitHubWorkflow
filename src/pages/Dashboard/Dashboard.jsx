import water from '../../assets/images/footprint.svg'
import steps from '../../assets/images/humidity_low.svg'
import calories from '../../assets/images/local_fire_department.svg'
import './Dashboard.scss'

export default function Dashboard() {
    return (
        <>
            <div className='dashboard'>
                <div>

                    <h2>Mes Séances</h2>
                    <div className='training-container'>
                        <div className="card">
                            <h3>Cardio</h3>
                            <p>40 min</p>
                            <p>27/09/2024 à 23:59</p>
                        </div>
                    </div>
                </div>
                <div>

                    <h2>Mes Objectifs</h2>
                    <div className='goal-container'>
                        <div className="card">
                            <div className='card__row'>
                                <img src={calories} alt="calories" />
                                <div>
                                    <p>59 k/cal</p>
                                    <span>Calories</span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className='card__row'>
                                <img src={steps} alt="empreintes de pas" />
                                <div>
                                    <p>10.2 k</p>
                                    <span>Pas</span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className='card__row'>
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

                    <h2>Mon Historiques</h2>
                    <div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
