import React from 'react'
import { Introduction, Greetings } from '../styled'

export default function Home() {
  return (
    <div>
      <WelcomeBanner />
      <Introduction>

        <Greetings>
          <h1>Hello</h1>
          <h1>world,</h1>
          <h1>I'm</h1>
          <h1>Paulo</h1>
        </Greetings>

        <h3>I'm a Front End Web Developer. </h3>
        <p>This is my website, please feel welcomed to browse through it and learn more about me &amp; my work. Thank you for your time, enjoy!
        And maybe you can help me improve my skills. If you have any feedback or ways that I can work on, you can always contact me, hit me up!
        Always open to your guys’ point of views.</p>
        <div className="">
          <a href="https://github.com/paubonilla" target="_blank" rel="noopener noreferrer">View Github</a>
        </div>
      </Introduction>
    </div >
  )
}
export const WelcomeBanner = () => {
  return (
    <div>
      <section className="banner-section">
        <div className="scroll text">
          <h2 className="text-greetings">
            Hello <span>Bonjour </span>你好 <span>สวัสดี </span>
            Ciao <span>こんにちわ </span>Olá <span>שָׁלוֹם </span>
            Kumusta  <span>안영 </span>Hola <span>Namastē </span>
          </h2>
        </div>
      </section>
    </div>
  )
}