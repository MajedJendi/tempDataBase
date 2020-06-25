import '../styles/navbar.scss'
import Link from 'next/link'

const CustomerInteractionSubs = () => (

<section className = "expBar">
    <div className ="tile is-ancestor">
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Customer Interaction', subcategory: '/Emailing Tools'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Emailing Tools</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/CustomerInteraction/EmailingTools.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Customer Interaction', subcategory: '/Help Desk'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Help Desks</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/CustomerInteraction/HelpDesk.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Customer Interaction', subcategory: '/Networking'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Networking</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/CustomerInteraction/Networking.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Customer Interaction', subcategory: '/Outreach'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Outreach</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/CustomerInteraction/Outreach.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
    </div>


    <div className ="tile is-ancestor">
    <div className ="tile is-parent">
        <Link href={{ pathname: '/Resources', query: { category: 'Customer Interaction', subcategory: '/Telecom Systems'} }}>
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">Telecom Systems</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/CustomerInteraction/TeleCommunication.png"></img>
                    </figure> 
                </div>
            </article>
        </Link>
    </div>
    <div className ="tile is-parent is-6">
        <Link href={{ pathname: '/Resources', query: { category: 'Customer Interaction', subcategory: '/Customer Relationship Management'} }}>
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">Customer Relationship Management</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/CustomerInteraction/CRM.png"></img>
                    </figure> 
                </div>
            </article>
        </Link>
    </div>
    <div className ="tile is-parent">
        <Link href={{ pathname: '/Resources', query: { category: 'Customer Interaction', subcategory: '/User Chat'} }}>
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">User Chat</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/CustomerInteraction/UserChat.png"></img>
                    </figure> 
                </div>
            </article>
        </Link>
    </div>
    </div>

    <div className ="tile is-ancestor">
        <div className ="tile is-parent is-6">
            <Link href={{ pathname: '/Resources', query: { category: 'Customer Interaction', subcategory: '/Virtual Assistants'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Virtual Assistants</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/CustomerInteraction/VirtualAssistance.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Customer Interaction', subcategory: '/Blogging'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Blogging</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/CustomerInteraction/Blogging.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        <div className ="tile is-parent">
            <Link href={{ pathname: '/Resources', query: { category: 'Customer Interaction', subcategory: '/Newslettering'} }}>
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Newslettering</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/CustomerInteraction/Newslettering.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
    </div>

</section>
)
export default CustomerInteractionSubs
