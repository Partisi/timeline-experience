import React, { useEffect, useState } from 'react'
import Sketch from 'react-p5'
import { useNavigate } from 'react-router'
import { getUrlParameters } from '../FunctionBucket'
import { masterList } from '../Variables'

import TheDude from "../assets/thedude.png"

export default function EcosystemPage() {
    const navigate = useNavigate()
    const [currentPeriod, setCurrentPeriod] = useState(null)
    useEffect(() => {
        const urlParams = getUrlParameters(window.location.href)
        setCurrentPeriod(masterList.find(o => o.name === urlParams.time_period))

    }, [])

    const [viewingAnimal, setViewingAnimal] = useState(null)
    return (
        <div id="ecosystem-page-container">
            <button className="back-bttn" onClick={() => navigate('/')}>{`<`}</button>
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
            {!!viewingAnimal && (
                <section className="animal-info-container">
                    <div className="talk-bubble">

                        <div className="center-talk-info">
                            <img src={viewingAnimal.profileImg} width={240} height="auto" />
                            <div>
                                <p className="he-speaks">Mr. Pachycephalosaurus says...</p>
                                <h2>{viewingAnimal.name}</h2>
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


const SketchEcosystem = ({ viewingAnimal, currentPeriod, changeBottomInfo }) => {

    const [animalsVibing, changeAnimalsVibing] = useState([])
    const [backgroundImages, changeBackgroundImages] = useState([])

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
                p5.createCanvas(document.getElementById("app-main-container").clientWidth, 600)

                changeBackgroundImages([
                    p5.loadImage('./backgrounds/bg1.png'),
                    p5.loadImage('./backgrounds/bg2.png'),
                    p5.loadImage('./backgrounds/bg3.png'),
                ])


                // Eocene
                if (currentPeriod.name === "Eocene") {
                    changeAnimalsVibing([
                        ...populateAnimals("tapir", "./animals/tapir.png", "bot", 3, p5),
                        ...populateAnimals("deer", "./animals/deer.png", "bot", 1, p5),
                        ...populateAnimals("horse", "./animals/horse.png", "bot", 2, p5)
                    ])
                }

                // Jurassic
                if (currentPeriod.name === "Jurassic") {
                    changeAnimalsVibing([


                        ...populateAnimals("apatosaurus", "./animals/apatosaurus.png", "mid", 1, p5),
                        ...populateAnimals("archaeopteryx", "./animals/archaeopteryx.png", "top", 2, p5),

                        ...populateAnimals("allosaurus", "./animals/allosaurus.png", "bot", 3, p5),
                    ])
                }

                // Devonian
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



                let currentWidth = document.getElementById("app-main-container").clientWidth
                if (p5.width !== currentWidth) {
                    p5.resizeCanvas(currentWidth, 500)
                }

                animalsVibing.forEach(eachAnimal => {
                    eachAnimal.display(p5)
                })

                p5.imageMode('center')

            }}
            mouseClicked={(p5) => {
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

class Animal {
    constructor(p5, key, location, image, imagePath, changeBottomInfo) {
        this.key = key
        this.location = location
        this.imagePath = imagePath
        this.changeBottomInfo = changeBottomInfo

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

        this.x = p5.random(this.xBoundaries.s, this.xBoundaries.f)
        this.y = p5.random(this.yBoundaries.s, this.yBoundaries.f)

        this.lastX = this.x


        this.speedX = p5.random(1.1, 1.4)
        this.speedY = p5.random(0.5, 1)

        this.xNoiseOffset = p5.random(0, 1000)
        this.yNoiseOffset = p5.random(1000, 2000)

        this.scale = 0.2
        this.image = image

    }

    roam(p5) {
        let xMovement = p5.map(p5.noise(this.xNoiseOffset), 0, 1, -this.speedX, this.speedX)
        let yMovement = p5.map(p5.noise(this.yNoiseOffset), 0, 1, -this.speedY, this.speedY)

        this.xNoiseOffset += 0.003
        this.yNoiseOffset += 0.003

        this.lastX = this.x
        this.x += xMovement
        this.y += yMovement

        if (this.x > this.xBoundaries.f || this.x < this.xBoundaries.s) {
            this.speedX = this.speedX * -1;
        }
        if (this.y > this.yBoundaries.f || this.y < this.yBoundaries.s) {
            this.speedY = this.speedY * -1;
        }
    }
    detectClick(p5) {
        if (p5.dist(p5.mouseX, p5.mouseY, this.x, this.y) <= this.image.width / 20) {
            this.changeBottomInfo(this.key, this.imagePath)
        } else {
            return false
        }
        return true
    }
    display(p5) {
        p5.noStroke()

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


        this.roam(p5)
    }
}