import '../styles/guideMe.scss'

import Link from 'next/link'

const ResourcesFeed = () => (
<div>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>My custom Bulma website</title>
        <link rel="stylesheet" href="../css/guideMe.css"></link>
    </head>

    <section className = "guideMe">
        <div className="tile is-ancestor">

            <div className ="tile is-parent">
                <a className = "First">
                    <Link href="/About">
                        <article className ="tile is-child">
                            <div className ="content">
                                <p className ="title">Early Stages</p>
                                <br></br>
                                <p className ="subtitle">1</p>
                                <figure className = "img is-128x128">
                                    <img src="https://image.flaticon.com/icons/svg/2394/2394073.svg" height="150" width="150"></img>
                                </figure>
                                <div className="content">
                                    First things first, you need to make sure that your startup idea is actually valid and solves an actual existing problem. This section will guide you in the right direction to find an answer to this question
                                </div>
                            </div>
                        </article>
                    </Link>
                </a>
            </div>

        </div>
    </section>
</div>
)

export default ResourcesFeed
