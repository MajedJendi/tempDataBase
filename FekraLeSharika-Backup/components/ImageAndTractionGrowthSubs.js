import '../styles/navbar.scss'
import Link from 'next/link'

const ImageAndTractionGrowthSubs = () => (

<section className = "expBar">
    <div className ="tile is-ancestor">
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Adies'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Advertising</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/ImageAndTraction/D.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Affiliate'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Affiliate</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/ImageAndTraction/Affiliate.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Graphic Design'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Graphic Design</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/ImageAndTraction/GraphicDesign.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Growth Hacking'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Growth Hacking</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/ImageAndTraction/GrowthHacking.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
    </div>


    <div className ="tile is-ancestor">
    <div className ="tile is-parent">
        <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Leads'} }}>
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">Leads</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/ImageAndTraction/Leads.png"></img>
                    </figure> 
                </div>
            </article>
        </Link>
    </div>
    <div className ="tile is-parent is-6">
        <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/List Building'} }}>
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">List Building</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/ImageAndTraction/ListBuilding.png"></img>
                    </figure> 
                </div>
            </article>
        </Link>
    </div>
    <div className ="tile is-parent">
        <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Listing Services'} }}>
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">Listing Services</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/ImageAndTraction/ListingServices.png"></img>
                    </figure> 
                </div>
            </article>
        </Link>
    </div>
    </div>




    <div className ="tile is-ancestor">
        <div className ="tile is-parent is-6">
            <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Pre-Launch Traction'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Pre-Launch Traction</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/ImageAndTraction/Pre-LaunchTraction.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Marketing'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Marketing</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/ImageAndTraction/Marketing.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Logos'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Logos</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/ImageAndTraction/Logos.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
    </div>

    <div className ="tile is-ancestor">
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Social Media'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Social Media</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/ImageAndTraction/SocialMedia.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Swag'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Swag</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/ImageAndTraction/Swag.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Traction'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Traction</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/ImageAndTraction/Traction.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Image and Traction Growth', subcategory: '/Video'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Video</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/ImageAndTraction/Video.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
    </div>
</section>
)
export default ImageAndTractionGrowthSubs
