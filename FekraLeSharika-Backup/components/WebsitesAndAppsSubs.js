import '../styles/navbar.scss'
import Link from 'next/link'

const WebsitesAndAppsSubs = () => (

<section className = "expBar">
    <div className ="tile is-ancestor">
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/A-B Testing'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">A/B Testing</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/AB-Testing.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Analytics'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Analytics</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/Analytics.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Automation'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Automation</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/Automation.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">

            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Conversion'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Conversion</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/Conversion.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
    </div>


    <div className ="tile is-ancestor">
    <div className ="tile is-parent">
        <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Development'} }}>
            <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Development</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/Development.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
    </div>
    <div className ="tile is-parent is-6">
        <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Domains'} }}>
            <article className ="tile is-child box">
                <div class="columns is-centered">
                    <p className ="title is-centered">Domains</p>
                </div>
                <div class="columns is-centered">
                    <figure class="image is-64x64 is-vcentered">
                        <img class="img" src="../static/FlatIcons/WebsitesAndApps/Domains.png"></img>
                    </figure> 
                </div>
            </article>
        </Link>
    </div>
    <div className ="tile is-parent">
        <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Hosting'} }}>
            <article className ="tile is-child box">
                <div class="columns is-centered">
                    <p className ="title is-centered">Hosting</p>
                </div>
                <div class="columns is-centered">
                    <figure class="image is-64x64 is-vcentered">
                        <img class="img" src="../static/FlatIcons/WebsitesAndApps/Hosting.png"></img>
                    </figure> 
                </div>
            </article>
        </Link>
    </div>
    </div>




    <div className ="tile is-ancestor">
        <div className ="tile is-parent is-6">
            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Mockups'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Mockups</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/Mockups.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Monitoring'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Monitoring</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/Monitoring.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Pop-Ups'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Pop-Ups</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/PopUps.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
    </div>

    <div className ="tile is-ancestor">
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Site Builders'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Site Builders</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/SiteBuilders.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Site Support'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Site Support</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/SiteSupport.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Stock Photos'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Stock Photos</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/StockPhotos.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Templates'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Templates</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/Templates.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>

        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Websites and Apps', subcategory: '/Writing Tools'} }}>
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Writing Tools</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="../static/FlatIcons/WebsitesAndApps/WritingTools.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
    </div>
</section>
)
export default WebsitesAndAppsSubs
