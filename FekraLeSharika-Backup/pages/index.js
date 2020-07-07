import '../styles/stylesheet.scss'
import '../styles/utility.scss'
import Head from '../components/head'
import Link from 'next/link'
import LandingPage from "../components/LandingPage";
import Resources from "../components/resources.js";


const Index = () => (
  <div>
    <Head title="Shadow - Experience what it's really like to be a college student" />
    
    <LandingPage />
   </div>
)

export default Index



  // Marketing
  // <Link href={{ pathname: '/page', query: { category: 'Websites and Apps', subcategory: '/Domains'} }}><a>Websites and Apps</a></Link>
  // <Link href={{ pathname: '/page', query: { category: 'Websites and Apps', subcategory: '/Hosting'} }}><a>Websites and Apps</a></Link>
  // <Link href={{ pathname: '/page', query: { category: 'Websites and Apps', subcategory: '/Mockups'} }}><a>Websites and Apps</a></Link>
  // <Link href={{ pathname: '/page', query: { category: 'Websites and Apps', subcategory: '/Monitoring'} }}><a>Websites and Apps</a></Link>
  // <Link href={{ pathname: '/page', query: { category: 'Websites and Apps', subcategory: '/Pop ups'} }}><a>Websites and Apps</a></Link>
  // <Link href={{ pathname: '/page', query: { category: 'Websites and Apps', subcategory: '/Site Builders'} }}><a>Websites and Apps</a></Link>
  // <Link href={{ pathname: '/page', query: { category: 'Websites and Apps', subcategory: '/Site Support'} }}><a>Websites and Apps</a></Link>
  // <Link href={{ pathname: '/page', query: { category: 'Websites and Apps', subcategory: '/Stock Photos'} }}><a>Websites and Apps</a></Link>
  // <Link href={{ pathname: '/page', query: { category: 'Websites and Apps', subcategory: '/Templates'} }}><a>Websites and Apps</a></Link>
  // <Link href={{ pathname: '/page', query: { category: 'Websites and Apps', subcategory: '/Writing Tools'} }}><a>Websites and Apps</a></Link>


