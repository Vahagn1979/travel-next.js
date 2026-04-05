"use client";

import {useState} from "react";
import {useNavbar} from "@/context/navbar";     
import styles from "./slider.module.css";

const Slider = ({data}) => {
    const {setShowNavbar} = useNavbar();

    const [currentSlide, setCurrentSlide] = useState(0);

    const previous = () => {
        const isFirstSlide = currentSlide === 0;
        const newSlide = isFirstSlide ? data.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    }

    const next = () => {
        const isLastSlide = currentSlide === data.length - 1;
        const newSlide = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    return (
        <div className={`${styles.slider}`} onClick={() => setShowNavbar(false)}    >
            {
                data.map((elem, index) => (
                    <div
                        key={elem.id}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
                        style={{backgroundImage: `url(${elem.img})`}}
                    >

                    <h1>{elem.title}</h1>
                    <p>{elem.description}</p>
                    </div>
                ))
            }

            <div className={styles.action}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/slider/arrow-left.svg"
                    alt="arrow-left"
                    onClick={previous}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/slider/arrow-right.svg"
                    alt="right-left"
                    onClick={next}
                />
            </div>

            <div className={styles.controls}>
                {
                    data.map((elem, index) => (
                        <span
                            className={`${index === currentSlide ? styles.active : "" }`}
                            key={elem.id}
                            onClick={() => setCurrentSlide(index)}
                        />

                    ))
                }
            </div>
        </div>
    );
};

export default Slider;