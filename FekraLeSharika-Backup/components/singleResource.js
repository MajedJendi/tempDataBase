
import Link from 'next/link'

const SingleResource = () => (
    <div className="column is-4">
        <div className ="tile is-parent">
            <a className = "First">
                <Link href="/About">
                    <article className ="tile is-child">
                        <div className ="content">
                            <figure className = "img is-128x128">
                                <img src="https://image.flaticon.com/icons/svg/2394/2394073.svg" height="150" width="150"></img>
                            </figure>

                            <p className ="title">Early Stages</p>
                            <p className ="subtitle">1</p>
                            <div className="content">
                                First things first, you need to make sure that your startup idea is actually valid and solves an actual existing problem. This section will guide you in the right direction to find an answer to this question                                </div>
                            <nav className="level is-mobile">
                                <div className="level-left">
                                    <a className="level-item" aria-label="like">
                                        <span className="icon is-small">
                                        <i className="fas fa-heart" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </Link>
            </a>
        </div>
    </div>
)

export default SingleResource
