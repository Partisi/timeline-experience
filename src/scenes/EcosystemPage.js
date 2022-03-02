import React, { useEffect, useState } from 'react'
import Sketch from 'react-p5'
import { useNavigate } from 'react-router'
import { getUrlParameters } from '../FunctionBucket'
import { masterList } from '../Variables'
import TheDude from "../assets/thedude.png"

/**
 * Renders the main ecosystem page (the in depth look at a specific period of time)
 * @returns 
 */
export default function EcosystemPage() {
    const navigate = useNavigate() // navigation redirects

    // Stores the current period that the user selected
    const [currentPeriod, setCurrentPeriod] = useState(null)

    // Breaks down the url params and gets the desired time period
    useEffect(() => {
        const urlParams = getUrlParameters(window.location.href)
        setCurrentPeriod(masterList.find(o => o.name === urlParams.time_period))
    }, [])

    // Handles if a popup is open for an animal's information
    const [viewingAnimal, setViewingAnimal] = useState(null)

    return (
        <div id="ecosystem-page-container">
            <button className="back-bttn" onClick={() => navigate('/')}>{`<`}</button>

            {/* Makes sure there is a current period that is being viewed */}
            {!!currentPeriod && (
                <section className="ecosystem-container">
                    <h2 className="time-period-name">{currentPeriod.name} Period</h2>
                    <p className="time-period-period">{currentPeriod.period}</p>
                    <div id="app-main-container" />
                    <SketchEcosystem
                        currentPeriod={currentPeriod}
                        viewingAnimal={viewingAnimal}
                        changeBottomInfo={(animalClicked, profileImg) => {
                            setViewingAnimal(
                                {
                                    ...currentPeriod.animals.find(o => o.name.toLowerCase() === animalClicked.toLowerCase()),
                                    profileImg: profileImg,
                                }
                            )
                        }}
                    />
                </section>
            )}

            {/* Makes sure a specific animals information is being viewed */}
            {!!viewingAnimal && (
                <section className="animal-info-container">
                    <div className="talk-bubble">

                        <div className="center-talk-info">
                            <img src={viewingAnimal.profileImg} width={240} height="auto" />
                            <div>
                                <p className="he-speaks">Mr. Pachycephalosaurus says...</p>
                                <h2 className="viewing-animal-name">{viewingAnimal.name}</h2>
                                <p>{viewingAnimal.description}</p>
                            </div>
                        </div>
                        <div className="right-point-1"></div>
                        <div className="right-point-2"></div>
                        <div className="right-point-3"></div>

                        <button className="exit-popup" onClick={() => setViewingAnimal(null)}>X</button>
                    </div>
                    <div className="the-dude-container">
                        <img
                            src={TheDude}
                        />
                    </div>

                </section>
            )}
        </div>
    )
}

/**
 * Sketch container for the ecosystem.
 * Takes in the current viewingAnimal (if exists), the current period, and function to handle changing animal
 * @returns 
 */
const SketchEcosystem = ({ viewingAnimal, currentPeriod, changeBottomInfo }) => {

    // Main List of animal objects in ecosystem
    const [animalsVibing, changeAnimalsVibing] = useState([])

    // Background images
    const [backgroundImages, changeBackgroundImages] = useState([])

    // Populates the ecosystem sketch with teh appropiate animals
    function populateAnimals(key, image, location, amount, p5) {
        let newAnimalsVibing = []
        for (let i = 0; i < amount; i++) {
            newAnimalsVibing.push(new Animal(p5, key, location, p5.loadImage(image), image, changeBottomInfo))
        }
        return newAnimalsVibing
    }

    return (
        <Sketch
            setup={(p5) => {

                // Creates canvas and sets its reference point
                p5.createCanvas(document.getElementById("app-main-container").clientWidth, 600)

                // Gets the background assets
                changeBackgroundImages([
                    p5.loadImage('./backgrounds/bg1.png'),
                    p5.loadImage('./backgrounds/bg2.png'),
                    p5.loadImage('./backgrounds/bg3.png'),
                ])

                // Eocene period
                if (currentPeriod.name === "Eocene") {
                    // updates the animals on sketch with the appropiate animals, the quantity, and its image assets
                    changeAnimalsVibing([
                        ...populateAnimals("tapir", "./animals/tapir.png", "bot", 3, p5),
                        ...populateAnimals("deer", "./animals/deer.png", "bot", 1, p5),
                        ...populateAnimals("horse", "./animals/horse.png", "bot", 2, p5)
                    ])
                }

                // Jurassic period
                if (currentPeriod.name === "Jurassic") {
                    changeAnimalsVibing([
                        ...populateAnimals("apatosaurus", "./animals/apatosaurus.png", "mid", 1, p5),
                        ...populateAnimals("archaeopteryx", "./animals/archaeopteryx.png", "top", 2, p5),
                        ...populateAnimals("allosaurus", "./animals/allosaurus.png", "bot", 3, p5),
                    ])
                }

                // Devonian period
                if (currentPeriod.name === "Devonian") {
                    changeAnimalsVibing([
                        ...populateAnimals("eurypterid", "./animals/eurypterids.png", "mid", 1, p5),
                        ...populateAnimals("conodont", "./animals/conodont.png", "bot", 2, p5),
                        ...populateAnimals("dipnoi", "./animals/dipnoi.png", "mid", 2, p5),

                    ])
                }
            }}
            
            draw={(p5) => {
                p5.background("#85fffd")
                
                // Sets the background images depending on the current time period
                p5.imageMode('corner')
                if (currentPeriod.name === "Eocene") {
                    p5.image(backgroundImages[0], 0, 0, p5.width, p5.height)
                }
                if (currentPeriod.name === "Jurassic") {
                    p5.image(backgroundImages[1], 0, 0, p5.width, p5.height)
                }
                if (currentPeriod.name === "Devonian") {
                    p5.image(backgroundImages[2], 0, 0, p5.width, p5.height)
                }

                // Resizes the canvas if screen width changes (works but buggy)
                let currentWidth = document.getElementById("app-main-container").clientWidth
                if (p5.width !== currentWidth) {
                    p5.resizeCanvas(currentWidth, 500)
                }

                // Displays all current animals in ecosystem
                animalsVibing.forEach(eachAnimal => {
                    eachAnimal.display(p5)
                })
                p5.imageMode('center')

            }}
            mouseClicked={(p5) => {
                // Handles if any animals are clicked, if so, updates the viewingAnimal
                let isClicked = false
                if (!!viewingAnimal) { return }
                for (var i = 0; i < [...animalsVibing].reverse().length; i++) {
                    if (isClicked === true) { break }
                    isClicked = [...animalsVibing].reverse()[i].detectClick(p5)
                }
            }}

        />
    )
}

/**
 * Animal class
 */
class Animal {
    constructor(p5, key, location, image, imagePath, changeBottomInfo) {
        this.key = key // animal name
        this.location = location // where on the canvas being displayed
        this.imagePath = imagePath
        this.changeBottomInfo = changeBottomInfo // handles for singel animal clicked

        // Boundaries for where an animal is allowed to roam
        this.xBoundaries = { s: 0, f: 0 }
        this.yBoundaries = { s: 0, f: 0 }
        switch (location) {
            case "top":
                this.xBoundaries = { s: 100, f: p5.width - 100 }
                this.yBoundaries = { s: 100, f: 200 }
                break
            case "mid":
                this.xBoundaries = { s: 200, f: p5.width - 200 }
                this.yBoundaries = { s: 310, f: 350 }
                break
            case "bot":
                this.xBoundaries = { s: 200, f: p5.width - 200 }
                this.yBoundaries = { s: 450, f: p5.height - 100 }
                break
            default:
                this.xBoundaries = { s: 100, f: p5.width - 100 }
                this.yBoundaries = { s: 100, f: p5.height - 100 }
        }

        // The animals position
        this.x = p5.random(this.xBoundaries.s, this.xBoundaries.f)
        this.y = p5.random(this.yBoundaries.s, this.yBoundaries.f)

        // Tracks the last x for out of bounds
        this.lastX = this.x

        // Speeds
        this.speedX = p5.random(1.1, 1.4)
        this.speedY = p5.random(0.5, 1)

        // Perlin noise handling for 'randomish' movement
        this.xNoiseOffset = p5.random(0, 1000)
        this.yNoiseOffset = p5.random(1000, 2000)

        // Scaling to make sizes more realistic and usable
        this.scale = 0.2
        this.image = image

    }

    // Handles animals moving around in ecosystem
    roam(p5) {

        // Adjusts the movements using perlin noise
        let xMovement = p5.map(p5.noise(this.xNoiseOffset), 0, 1, -this.speedX, this.speedX)
        let yMovement = p5.map(p5.noise(this.yNoiseOffset), 0, 1, -this.speedY, this.speedY)

        this.xNoiseOffset += 0.003
        this.yNoiseOffset += 0.003

        this.lastX = this.x
        this.x += xMovement
        this.y += yMovement

        // Checks for boundaries if animal has gone too far
        if (this.x > this.xBoundaries.f || this.x < this.xBoundaries.s) {
            this.speedX = this.speedX * -1;
        }
        if (this.y > this.yBoundaries.f || this.y < this.yBoundaries.s) {
            this.speedY = this.speedY * -1;
        }
    }

    // Detects if animal has been clicked
    detectClick(p5) {
        if (p5.dist(p5.mouseX, p5.mouseY, this.x, this.y) <= this.image.width / 20) {
            this.changeBottomInfo(this.key, this.imagePath)
        } else {
            return false
        }
        return true
    }

    // Main Display
    display(p5) {
        p5.noStroke()

        // Flips the image depending on which way the animal is facing
        let facingRight = true
        if (this.lastX < this.x) {
            facingRight = true
        } else {
            facingRight = false
        }
        p5.imageMode('center')
        if (facingRight) {
            p5.push();
            p5.scale(-1, 1)
            p5.image(this.image, -this.x, this.y, this.image.width * this.scale, this.image.height * this.scale)
            p5.pop();
        } else {
            p5.image(this.image, this.x, this.y, this.image.width * this.scale, this.image.height * this.scale)
        }

        // References the roaming func
        this.roam(p5)
    }
}