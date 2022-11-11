import React from 'react'
import "./services.css";
import monsterIndia from "../../assets/monsterIndia.webp";
import tripvilla from "../../assets/tripvilla.jpg";
import coshedule from "../../assets/coshedule.jpg"
import weather from "../../assets/weather.png"

const data =[
  {
    id:1,
    image: monsterIndia,
    title:"Gearbest Clone",
    about:"Gearbest is an e-commerce website. In this project we have built the features from sign-up to order placement. We used HTML, CSS and JavaScript and managed data with local storage.",
    description :"Tech-Stack : HTML,CSS & JavaScript",
    git:`https://github.com/jayvaish/Gearbest_Project`,
    netlify:`https://resplendent-gumption-3e50d7.netlify.app/`
  },
  {
    id:2,
    image: tripvilla,
    title:"Bluefly Clone",
    about:"Bluefly is the original online fashion retailer. Today, Bluefly is a fast growing, fashion marketplace offering 3,000+ brands across shoes, handbags, dresses, sportswear, cashmere and even diamonds. Bluefly's curated events bring you the best of the splurge and the steal all in one place and all at compelling discounts.",
    description :"Tech-Stack : React,Redux",
    git:`https://github.com/jayvaish/BlueFly-Project`,
    netlify:`https://prismatic-bombolone-568674.netlify.app/`
  },
  {
    id:3,
    image: coshedule,
    title:"Tripoto Clone",
    about:"Tripoto is an e-commerce website. In this project we have built the features from Log in Log out or sign-up to order placement. We used HTML, CSS and JavaScript and managed data with local storage.",
    description :"Tech-Stack : HTML,CSS & JavaScript",
    git:`https://github.com/jayvaish/Tripoto-Project`,
    netlify:`https://630b2882801d6f1f698c876e--taupe-klepon-f0f1db.netlify.app/index.html`
  },
  {
    id:3,
    image: weather,
    title:"Calculator app ",
    about:"Calculate basic functions such as addition, subtraction, divison & multipication",
    description :"Tech-Stack : HTML,CSS & JavaScript",
    git:`https://github.com/jayvaish/Calculator-Project`,
    netlify:`https://flourishing-fairy-33d047.netlify.app/`
  }
]

const Services = () => {
  return <section className='services container section' id="projects">
    <h3 className="section__title" id='project'>Projects </h3>

    <div className="services__container grid">
      {data.map (({id,image,title,about,description,git,netlify}) => {
        return(
        <div className='services__card'key={id}>
          <img src={image} alt="" className="services__img"/>
          <h3 className='services__title'>{title}</h3>
          <div className='ptagabout'>
          <p className='services__about'>{about}</p>
          <p className='services__description'>{description}</p>
          </div>
          <a href={git} className='services__github' >
          
          <i class="fa-brands fa-github fa-gitgit" id='fa-github' ></i>
          
          </a>
          
          <a href={netlify} className='services__netlify'>
          
          <i class="fa-solid fa-globe"></i>
         
          </a>
          
          
        </div>
      )
      })}
    </div>
  </section>
}

export default Services