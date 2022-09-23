import {Outlet, Link} from 'react-router-dom'

const Root = () => {

    return(
        <main>
            <h1>React Routed Website</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                </ul>
            </nav>
            <article>
                <Outlet />
            </article>
        </main>
    )
}

export default Root