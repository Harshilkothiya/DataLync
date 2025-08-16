import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import aws from "../../assets/aws.jpeg";
import canva from "../../assets/canva.png";
import css from "../../assets/css2.png";
import dl from "../../assets/deep-learning.jpg";
import doker from "../../assets/doker.png";
import figma from "../../assets/figma2.png";
import firebase from "../../assets/firebase.png";
import flask from "../../assets/flask.jpeg";
import github from "../../assets/github.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import mat from "../../assets/matplot.png";
import mongo from "../../assets/mongo.png";
import next from "../../assets/nextjs.png";
import node from "../../assets/node3.png";
import nltk from "../../assets/nltk.png";
import numpy from "../../assets/numpy.png";
import pandas from "../../assets/pandas.png";
import powerbi from "../../assets/powerbi.png";
import python from "../../assets/python.png";
import react from "../../assets/react.svg";
import seaborn from "../../assets/seaborn.png";
import sklearn from "../../assets/sklearn.png";
import slack from "../../assets/slack.png";
import sql from "../../assets/sql.png";
import streamlit from "../../assets/streamlit.png";
import tailwind from "../../assets/Tailwind_CSS.png";
import tensorflow from "../../assets/tensorflow.png";

function Nav() {
  const [activeIndex, setActiveIndex] = useState(0); // First item active by default
  const [isPaused, setIsPaused] = useState(true); // Start paused so user has control
  const clickPauseRef = useRef(null);
  const menuItems = [
    "Frontend",
    "Backend",
    "Database",
    "Machine learning",
    "Data Science",
    "Cloud",
    "Project Managment",
  ];

  const images = {
    Frontend:[
        figma,canva,html,css,js,react,next,tailwind
    ],
    Backend:[
        node,python,flask
    ],
    Database:[
        mongo,sql,firebase
    ],
    "Machine learning":[
        python,streamlit,sklearn,tensorflow,nltk,dl
    ],
    "Data Science":[
        numpy,pandas,mat,seaborn,powerbi
    ],
    Cloud:[
        aws,doker
    ],
    "Project Managment":[
        slack,github
    ]
  };

  // Auto-rotate between menu items (only when not paused)
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % menuItems.length);
    }, 4000); // change every 4s (slower rotation)
    return () => clearInterval(id);
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (clickPauseRef.current) clearTimeout(clickPauseRef.current);
    };
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
    if (clickPauseRef.current) clearTimeout(clickPauseRef.current);
    clickPauseRef.current = setTimeout(() => setIsPaused(false), 8000); // Longer pause after user interaction
  };

  const activeItem = menuItems[activeIndex];
  const imageItem = images[activeItem] || [];

  return (
    <>
    <div
      className="navbar"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              onClick={() => handleClick(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div
      className="image-box"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
        {imageItem.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} className="gallery-img"/>
        ))}
    </div>
    </>
  );
}

export default Nav;
