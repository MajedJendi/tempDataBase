import '../styles/subCategories.scss'
import Link from 'next/link'

const FinancialSubs = () => (
<section className = "expBar">
    <div className ="tile is-ancestor">
        <div className ="tile is-parent">
            <Link href="/About">
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Billing</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/Financial/Billing.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>

        <div className ="tile is-parent">
            <Link href="/About">
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Financing</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/Financial/Financing.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>

        <div className ="tile is-parent">
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">Fundraising</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/Financial/Fundraising.png"></img>
                    </figure> 
                </div>
            </article>
        </div>

        <div className ="tile is-parent">
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">Sales</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/Financial/Sales.png"></img>
                    </figure> 
                </div>
            </article>
        </div>
        
    </div>

    <div className="tile is-ancestor">
        <div className="tile is-parent">
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">Payment Solutions</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/Financial/PaymentSolutions.png"></img>
                    </figure> 
                </div>
            </article>
        </div>

        <div className ="tile is-parent is-6">
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">Sale Funnels</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/Financial/SaleFunnels.png"></img>
                    </figure> 
                </div>
            </article>
        </div>
    </div>
</section>
)
export default FinancialSubs










{/* <div className ="columns is-multiline is-mobile">
    <div className ="column is-one-quarter">
        <div className = "box has-text-centered">
            Media
        </div>
    </div>

    <div className ="column is-one-quarter">
        <div className = "box has-text-centered">
            Marketing
        </div>
    </div>

    <div className ="column is-one-quarter">
        <div className = "box has-text-centered">
            Financial
        </div>
    </div>
    
    <div className ="column is-one-quarter">
        <div className = "box has-text-centered">
            Workflow
        </div>
    </div>

    <div className ="column is-half">
        <div className = "box has-text-centered">
            Idea Validation
        </div>
    </div>

    <div className ="column is-one-quarter">
        <div className = "box has-text-centered">
            Knowledge
        </div>
    </div>

    <div className ="column is-one-quarter">
        <div className = "box has-text-centered">
            Events
        </div>
    </div>

    <div className ="column is-one-quarter">
        <div className = "box has-text-centered">
            Customer Interaction
        </div>
    </div>

    <div className ="column">
        <div className = "box has-text-centered">
            Websites & Apps
        </div>
    </div>

    <div className ="column is-one-quarter">
        <div className = "box has-text-centered">
           Guide Me
        </div>
    </div>

</div> */}