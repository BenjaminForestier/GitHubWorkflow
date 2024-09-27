import water from '../../assets/images/footprint.svg'
import steps from '../../assets/images/humidity_low.svg'
import calories from '../../assets/images/local_fire_department.svg'
import './Dashboard.scss'

export default function Dashboard() {
    return (
        <>
            <div className='dashboard'>
                <h2>Dashboard</h2>
                <div>
                    <h3>Mes Séances</h3>
                    <div className='section-container'>
                        <div className="card">
                            <h3>Cardio</h3>
                            <p>40 min</p>
                            <p>27/09/2024 à 23:59</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Mes Objectifs</h3>
                    <div className='section-container'>
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
                    <h3>Mon Historiques</h3>
                    <div className='section-container'>
                        <div className="card">
                            <h3>Fitness</h3>
                            <p>1h</p>
                            <p>23/09/2024 à 13:30</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
