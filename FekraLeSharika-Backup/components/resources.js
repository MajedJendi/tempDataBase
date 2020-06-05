import '../styles/resources.scss'

import Link from 'next/link'
import SingleResource from "./singleResource"

const Resources = () => (
    <div className="container">
        <div className="columns is-centered">
            <div className="column is-four-fifths">
                
                <div className="tile is-ancestor">
                    <SingleResource />

                    <SingleResource />

                    <SingleResource />
                </div>

                <div className="tile is-ancestor">
                    <SingleResource />

                </div>

            </div>
        </div>
    </div>
)

export default Resources
