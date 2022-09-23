import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from 'react-router-dom'

function App() {
	return (
		<Router>
            {/* Navigation */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>

            {/* Actual Pages */}
            <Routes>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Routes>
        </Router>
	)
}

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Contact = () => <h1>Contact</h1>


export default App