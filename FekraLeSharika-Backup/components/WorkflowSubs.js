import '../styles/subCategories.scss'
import Link from 'next/link'

const WorkflowSubs = () => (
<section className = "expBar">
    <div className ="tile is-ancestor">
 
        <div className ="tile is-parent">
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">Task Management</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/Workflow/TaskManagement.png"></img>
                    </figure> 
                </div>
            </article>
        </div>

        <div className ="tile is-parent">
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">Productivity</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/Workflow/Productivity.png"></img>
                    </figure> 
                </div>
            </article>
        </div>
        
    </div>

    <div className="tile is-ancestor">
        <div className="tile is-parent">
            <article className ="tile is-child box">
                <div className ="columns is-centered">
                    <p className ="title is-centered">Schedulers</p>
                </div>
                <div className ="columns is-centered">
                    <figure className ="image is-64x64 is-vcentered">
                        <img className ="img" src="../static/FlatIcons/Workflow/Schedulers.png"></img>
                    </figure> 
                </div>
            </article>
        </div>

        <div className ="tile is-parent">
            <Link href="/About">
                <article className ="tile is-child box">
                    <div className ="columns is-centered">
                        <p className ="title is-centered">Webinars</p>
                    </div>
                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/Workflow/Webinars.png"></img>
                        </figure> 
                    </div>
                </article>
            </Link>
        </div>
        
    </div>
</section>
)
export default WorkflowSubs