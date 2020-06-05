import '../styles/hero.scss'
import Link from 'next/link'

import NavBar from './navbar'
import ExpBar from './expBar'
import HeroImg from './heroImg'
import SearchBar from './searchBar';
import HeroRightBox from './hero-right-box';
import GuideMe from './guideMe'

const Hero = () => (
  <section className="hero">
    <div className="hero-head">
      <NavBar />
    </div>

    <div className = "hero-body">
			<br></br>
			<SearchBar />

			<div className = "columns is-centered">
				<div className  = "column">
					<ExpBar />
				</div>
				
				<div className = "column">
					<HeroRightBox />
				</div>
			</div>
    </div>
  </section>



	
)

export default Hero
// &emsp; &ensp;