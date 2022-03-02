import React, { useState } from 'react'
import Sketch from 'react-p5'
import { useNavigate } from 'react-router'
import { masterList } from '../Variables'

/**
 * Main Home page that also serves as landing.
 * Lets users select a time period to explore.
 * @returns 
 */
export default function HomePage() {
    const navigate = useNavigate()

    // The full list of time periods to choose from
    const [timePeriods] = useState(masterList)

    // Sets the initial viewing time period
    const [currentTimePeriod, setCurrentTimePeriod] = useState(masterList[0])

    // Loading for animations on map handling
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div id="home-page-container">
            {/* Top Header intro */}
            <h1 className="main-title">A Timeline Experience</h1>
            <p className="sub-title">Made with ❤️ by Erol</p>

            {/* Time period selections */}
            <section className="time-period-container">
                <ul className="time-period-list">
                    {timePeriods.map((eachTimePeriod, index) => {
                        return (
                            <li key={index}>
                                <button
                                    disabled={isLoading}
                                    className={currentTimePeriod.name === eachTimePeriod.name ? "active-bttn" : ""}
                                    onClick={() => { setCurrentTimePeriod(eachTimePeriod) }}>{eachTimePeriod.name}</button>
                            </li>
                        )
                    })}
                </ul>
            </section>

            {/* Bulk bottom info on time period with map*/}
            <section id="main-time-period-info">
                <h2 className="time-period-name">{currentTimePeriod.name} Period</h2>
                <p className="time-period-period">{currentTimePeriod.period}</p>
                <div className="time-period-map-container">
                    <div id="time-period-map">
                        <MapSketch
                            currentMapTitle={currentTimePeriod.name}
                            triggerAnimation={isLoading}

                            // Redirects after animation finished
                            handleRedirect={() => navigate(`/ecosystem?time_period=${currentTimePeriod.name}`)}
                        />
                    </div>

                    <div className="descriptions-container">
                        <p className="time-period-description">{currentTimePeriod.description1}</p>
                        <p className="time-period-description">{currentTimePeriod.description2}</p>
                        <p className="time-period-description">{currentTimePeriod.description3}</p>
                    </div>

                </div>

                {/* Initiates the map animation and redirects user*/}
                <button
                    className="time-period-enter-bttn"
                    disabled={isLoading}
                    onClick={() => setIsLoading(true)}>{isLoading ? "Exploring..." : "Enter"}</button>
            </section>

            {/* Citations */}
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

/**
 * Map sketch with animation
 * @returns 
 */
const MapSketch = ({ currentMapTitle, triggerAnimation, handleRedirect }) => {

    // Selection of maps for each time period
    const [maps, setMaps] = useState([])
    
    // For not rerunnign animation once begun
    const [animationStarted, setAnimationStarted] = useState(false)

    // The marker used in animation
    const [marker, setMarker] = useState(null)

    // Times a bit of a delay after marker reaches destination
    const [timer, setTimer] = useState({ current: 0, delay: 120 })

    return (
        <Sketch
            setup={(p5) => {
                p5.createCanvas(document.getElementById("time-period-map").clientWidth, 600).parent("time-period-map")

                // Loads in maps
                setMaps([
                    p5.loadImage('./maps/devonian.jpeg'),
                    p5.loadImage('./maps/jurassic.jpeg'),
                    p5.loadImage('./maps/eocene.jpeg'),
                ])
            }}
            draw={(p5) => {
                p5.background("#85fffd")
                p5.imageMode('corner')

                // Based on viewing time period, renders the appropiate map with animation ready
                let path = 0
                if (currentMapTitle.toLowerCase() === "eocene") {
                    p5.image(maps[2], 0, 0, p5.width, p5.height)
                    if (p5.width !== maps[2].width) { p5.resizeCanvas(maps[2].width, maps[2].height) }
                    path = 0
                }
                if (currentMapTitle.toLowerCase() === "jurassic") {
                    p5.image(maps[1], 0, 0, p5.width, p5.height)
                    if (p5.width !== maps[1].width) { p5.resizeCanvas(maps[1].width, maps[1].height) }
                    path = 1
                }
                if (currentMapTitle.toLowerCase() === "devonian") {
                    p5.image(maps[0], 0, 0, p5.width, p5.height)
                    if (p5.width !== maps[0].width) { p5.resizeCanvas(maps[0].width, maps[0].height) }
                    path = 2
                }
                
                // Makes sure animation is not running in loop
                if (animationStarted === false && triggerAnimation === true) {
                    setAnimationStarted(true)
                    setMarker(new Marker(path)) // sets the marker for first init
                }

                // If marker is working, lets display it
                if (!!marker) {
                    marker.display(p5)
                    if (marker.finished) { // once marker reaches final destination

                        // Times the delay for the marker before redirecting
                        if (timer.current >= timer.delay) { handleRedirect() }
                        else { setTimer({ current: timer.current + 1, delay: timer.delay }) }
                    }
                }
            }}
        />
    )
}

/**
 * Marker used for the map animation
 */
class Marker {
    constructor(path) {

        this.speed = 2

        // Based on the map displayed, create a path to follow
        if (path === 0) {
            this.coords = [
                { x: 0, y: 200 },
                { x: 100, y: 200 },
                { x: 100, y: 80 },
                { x: 200, y: 80 },
            ]
        }
        if (path === 1) {
            this.coords = [
                { x: 0, y: 50 },
                { x: 150, y: 50 },
                { x: 150, y: 180 },
                { x: 350, y: 180 },
            ]
        }
        if (path === 2) {
            this.coords = [
                { x: 0, y: 100 },
                { x: 150, y: 100 },
                { x: 150, y: 20 },
                { x: 360, y: 20 },
                { x: 360, y: 160 },
            ]
        }

        this.x = this.coords[0].x
        this.y = this.coords[0].y

        // Current position in the coord list
        this.currentPos = -1

        // Once the marker reaches its final destination
        this.finished = false

        // Handles back trail
        this.trail = []
    }

    // Creates the trail behind the marker for design
    makeTrail(p5) {
        this.trail.push({ x: this.x, y: this.y })
        for (var i = 0; i < this.trail.length; i++) {
            let p = this.trail[i];
            p5.fill('red')
            p5.ellipse(p.x, p.y, 4, 4);
        }
    }

    // Moves the marker by detecting current pos and adjusting to next coord point
    move() {
        // If at end destination
        if (this.x === this.coords[this.coords.length - 1].x &&
            this.y === this.coords[this.coords.length - 1].y) {
            this.finished = true
            return
        }

        // Right
        if (this.x < this.coords[this.currentPos + 1].x) {
            this.x += this.speed
        }
        // Down
        if (this.y < this.coords[this.currentPos + 1].y) {
            this.y += this.speed
        }
        // Left
        if (this.x > this.coords[this.currentPos + 1].x) {
            this.x -= this.speed
        }
        // Up
        if (this.y > this.coords[this.currentPos + 1].y) {
            this.y -= this.speed
        }

        // If marker has reached the next coord, move to following
        if (this.x === this.coords[this.currentPos + 1].x &&
            this.y === this.coords[this.currentPos + 1].y) {
            this.currentPos += 1
        }
    }

    // Main display
    display(p5) {
        p5.noStroke()
        this.makeTrail(p5)

        // Main Marker creation
        p5.fill('red')
        p5.ellipse(this.x, this.y, 18, 18)

        this.move()
    }
}