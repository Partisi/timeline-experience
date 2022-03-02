import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { masterList } from '../Variables'

export default function HomePage() {

    const navigate = useNavigate()

    const [timePeriods] = useState(masterList)
    const [currentTimePeriod, setCurrentTimePeriod] = useState(masterList[0])

    return (
        <div id="home-page-container">
            <h1 className="main-title">A Timeline Experience</h1>
            <p className="sub-title">Made with ❤️ by Erol</p>
            <section className="time-period-container">
                <ul className="time-period-list">
                    {timePeriods.map((eachTimePeriod, index) => {
                        return (
                            <li key={index}>
                                <button
                                    className={currentTimePeriod.name === eachTimePeriod.name ? "active-bttn" : ""}
                                    onClick={() => { setCurrentTimePeriod(eachTimePeriod) }}>{eachTimePeriod.name}</button>
                            </li>
                        )
                    })}
                </ul>
            </section>

            <section id="main-time-period-info">
                <h2 className="time-period-name">{currentTimePeriod.name} Period</h2>
                <p className="time-period-period">{currentTimePeriod.period}</p>
                <div className="time-period-map-container">
                    <img src={currentTimePeriod.map} />
                    <div className="descriptions-container">
                        <p className="time-period-description">{currentTimePeriod.description1}</p>
                        <p className="time-period-description">{currentTimePeriod.description2}</p>
                        <p className="time-period-description">{currentTimePeriod.description3}</p>
                    </div>

                </div>

                <button className="time-period-enter-bttn" onClick={() => navigate(`/ecosystem?time_period=${currentTimePeriod.name}`)}>Enter</button>
            </section>

            <section className="citation-container">
                <p className="citation-title">Sources from</p>
                <ul className="citation-list">
                    <li><a href="https://www.britannica.com" target="_blank" rel="noreferrer">https://www.britannica.com</a></li>
                    <li><a href="https://www.cleanpng.com" target="_blank" rel="noreferrer">https://www.cleanpng.com</a></li>
                    <li><a href="https://www.nationalgeographic.com/animals" target="_blank" rel="noreferrer">https://www.nationalgeographic.com/animals</a></li>
                    <li><a href="https://www.sciencedirect.com" target="_blank" rel="noreferrer">https://www.sciencedirect.com</a></li>
                </ul>
            </section>
        </div>
    )
}
