import React, { useEffect, useState } from 'react'
import Sketch from 'react-p5'
import { useNavigate } from 'react-router'
import { getUrlParameters } from '../FunctionBucket'
import { masterList } from '../Variables'

import horse from "../assets/animals/horse.jpeg"

export default function EcosystemPage() {
    const navigate = useNavigate()
    const [currentPeriod, setCurrentPeriod] = useState(null)
    useEffect(() => {
        console.log("Mounting..")
        const urlParams = getUrlParameters(window.location.href)
        console.log(urlParams)
        console.log(masterList)
        console.log(urlParams.time_period)
        setCurrentPeriod(masterList.find(o => o.name === urlParams.time_period))

    }, [])
    return (
        <div>
            <h1>Ecosystem Page</h1>
            <button onClick={() => navigate('/')}>Back</button>
            {!!currentPeriod && (
                <section>
                    <h1>{currentPeriod.name}</h1>
                    <div id="app-main-container" />
                    <SketchEcosystem currentPeriod={currentPeriod} />
                </section>
            )}
        </div>
    )
}


const SketchEcosystem = ({ currentPeriod }) => {

    const [images, setImages] = useState([])

    const [animalsVibing, changeAnimalsVibing] = useState([])

    function populateAnimals(amount, p5) {
        let bubbleQuant = amount
        let newAnimalsVibing = []
        for (let i = 0; i < bubbleQuant; i++) {
            newAnimalsVibing.push(new Animal(p5))
        }
        changeAnimalsVibing([...newAnimalsVibing])
    }
    return (
        <Sketch
            setup={(p5) => {
                p5.createCanvas(document.getElementById("app-main-container").clientWidth, 500)
                // p5.loadImage("", img => {
                //     setImages([...images].concat(img))
                //     p5.redraw()
                // });
                populateAnimals(100, p5)

            }}
            draw={(p5) => {
                p5.background("black")
                let currentWidth = document.getElementById("app-main-container").clientWidth
                if (p5.width !== currentWidth) {
                    p5.resizeCanvas(currentWidth, 500)
                }

                p5.circle(50, 50, 50)

                animalsVibing.forEach(eachAnimal => {
                    eachAnimal.display(p5)
                    if (eachAnimal.x - 100 >= p5.width) { // resets to start
                        eachAnimal.startUp(p5)
                    }
                })

                // if (images.length > 0) {
                //     p5.image(images[0], 100, 100)
                // }
            }}
        />
    )
}

class Animal {
    constructor(p5) {
        this.startUp(p5)
    }
    startUp(p5) {
        this.color = {
            r: p5.random(1, 255),
            g: p5.random(1, 100),
            b: p5.random(50, 100),
        }
        this.x = p5.random(0, p5.width)
        this.y = p5.random(0, p5.height)
        this.size = p5.random(50, 100)
        this.speedX = p5.random(-1.5, 1.5)
        this.speedY = p5.random(-1.5, 1.5)
    }
    display(p5) {
        p5.noStroke()
        p5.fill(this.color.r, this.color.g, this.color.b)
        
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > p5.width || this.x < 0) {

            this.speedX *= -1;

        }
        if (this.y > p5.height || this.y < 0) {

            this.speedY = this.speedY * -1;

        }
    }
}