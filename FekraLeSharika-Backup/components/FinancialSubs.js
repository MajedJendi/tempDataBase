import '../styles/subCategories.scss'
import Link from 'next/link'

// https://image.flaticon.com/icons/svg/2942/2942269.svg

const FinancialSubs = () => (
<section className = "expBar">
    <br></br>

    <div className ="tile is-ancestor">
        <div className ="tile is-parent">
            <Link href="/About">
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Billing</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="https://image.flaticon.com/icons/svg/2943/2943183.svg"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>

        <div className ="tile is-parent">
            <Link href="/About">
                <article className ="tile is-child box">
                    <div class="columns is-centered">
                        <p className ="title is-centered">Financing</p>
                    </div>
                    <div class="columns is-centered">
                        <figure class="image is-64x64 is-vcentered">
                            <img class="img" src="https://image.flaticon.com/icons/svg/2942/2942269.svg"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>

        <div className ="tile is-parent">
            <article className ="tile is-child box">
                <div class="columns is-centered">
                    <p className ="title is-centered">Fundraising</p>
                </div>
                <div class="columns is-centered">
                    <figure class="image is-64x64 is-vcentered">
                        <img class="img" src="https://image.flaticon.com/icons/svg/2871/2871553.svg"></img>
                    </figure> 
                </div>
            </article>
        </div>

        <div className ="tile is-parent">
            <article className ="tile is-child box">
                <div class="columns is-centered">
                    <p className ="title is-centered">Sales</p>
                </div>
                <div class="columns is-centered">
                    <figure class="image is-64x64 is-vcentered">
                        <img class="img" src="https://image.flaticon.com/icons/svg/2898/2898482.svg"></img>
                    </figure> 
                </div>
            </article>
        </div>
        
    </div>

    <div className="tile is-ancestor">
        <div className="tile is-parent">
            <article className ="tile is-child box">
                <div class="columns is-centered">
                    <p className ="title is-centered">Payment Solutions</p>
                </div>
                <div class="columns is-centered">
                    <figure class="image is-64x64 is-vcentered">
                        <img class="img" src="https://image.flaticon.com/icons/svg/840/840046.svg"></img>
                    </figure> 
                </div>
            </article>
        </div>

        <div className ="tile is-parent is-6">
            <article className ="tile is-child box">
                <div class="columns is-centered">
                    <p className ="title is-centered">Sale Funnels</p>
                </div>
                <div class="columns is-centered">
                    <figure class="image is-64x64 is-vcentered">
                        <img class="img" src="https://image.flaticon.com/icons/svg/1878/1878319.svg"></img>
                    </figure> 
                </div>
            </article>
        </div>
    </div>
</section>
)
export default FinancialSubs










{/* <div class="columns is-multiline is-mobile">
    <div class="column is-one-quarter">
        <div className = "box has-text-centered">
            Media
        </div>
    </div>

    <div class="column is-one-quarter">
        <div className = "box has-text-centered">
            Marketing
        </div>
    </div>

    <div class="column is-one-quarter">
        <div className = "box has-text-centered">
            Financial
        </div>
    </div>
    
    <div class="column is-one-quarter">
        <div className = "box has-text-centered">
            Workflow
        </div>
    </div>

    <div class="column is-half">
        <div className = "box has-text-centered">
            Idea Validation
        </div>
    </div>

    <div class="column is-one-quarter">
        <div className = "box has-text-centered">
            Knowledge
        </div>
    </div>

    <div class="column is-one-quarter">
        <div className = "box has-text-centered">
            Events
        </div>
    </div>

    <div class="column is-one-quarter">
        <div className = "box has-text-centered">
            Customer Interaction
        </div>
    </div>

    <div class="column">
        <div className = "box has-text-centered">
            Websites & Apps
        </div>
    </div>

    <div class="column is-one-quarter">
        <div className = "box has-text-centered">
           Guide Me
        </div>
    </div>

</div> */}