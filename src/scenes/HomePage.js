import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { masterList } from '../Variables'

export default function HomePage() {

    const navigate = useNavigate()

    const [timePeriods] = useState(masterList)
    const [currentTimePeriod, setCurrentTimePeriod] = useState(masterList[0])

    return (
        <div>
            <h1>This is the home page</h1>
            <section>
                <ul>
                    {timePeriods.map((eachTimePeriod, index) => {
                        return (
                            <li key={index}>
                                <button onClick={() => { setCurrentTimePeriod(eachTimePeriod) }}>{eachTimePeriod.name}</button>
                            </li>
                        )
                    })}
                </ul>
            </section>

            <section>
                <h2>{currentTimePeriod.name}</h2>
                <h2>{currentTimePeriod.period}</h2>
                <div>
                    <img src={currentTimePeriod.map} />
                </div>
                <div>
                    <p>{currentTimePeriod.description}</p>
                </div>
                <button onClick={() => navigate(`/ecosystem?time_period=${currentTimePeriod.name}`)}>Enter</button>
            </section>
        </div>
    )
}
