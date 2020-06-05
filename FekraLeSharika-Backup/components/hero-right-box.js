import '../styles/hero-right-box.scss'
import Link from 'next/link'


const HeroRightBox = () => (
    <section className = "HeroRightBox">
        <h1 className="title is-size-1 has-text-white">The world needs more startup creators</h1>
        <div className = "columns is-centered">
            <div className = "column">
                <br></br>
                <br></br>
                <h1 className="title is-size-1 has-text-white">Be One</h1>
            </div>

            <div className = "column">
                <figure className ="image is-10x10">
                        <img src="https://image.flaticon.com/icons/svg/1733/1733098.svg" alt="Image"></img>
                </figure>
            </div>
        </div>
    </section>
)

export default HeroRightBox
// &emsp; &ensp;