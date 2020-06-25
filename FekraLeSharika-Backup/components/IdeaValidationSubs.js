import '../styles/subCategories.scss'
import Link from 'next/link'

const IdeaValidationSubs = () => (
<section className = "expBar">
    <div className ="tile is-ancestor">
 
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Idea Validation', subcategory: '/Forms'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Forms</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/IdeaValidation/Forms.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>

        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Idea Validation', subcategory: '/Legal'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Legal</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/IdeaValidation/Legal.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
    </div>

    <div className="tile is-ancestor">
        <div className="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Idea Validation', subcategory: '/Research'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Research</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/IdeaValidation/Research.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>

        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Idea Validation', subcategory: '/Competitor Research'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Competitor Research</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/IdeaValidation/CompetitorResearch.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>

        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Idea Validation', subcategory: '/Customer Discovery'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Customer Discovery</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/IdeaValidation/CustomerDiscovery.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>

    </div>
</section>
)
export default IdeaValidationSubs