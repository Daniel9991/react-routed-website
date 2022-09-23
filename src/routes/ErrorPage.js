import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError()
    console.error(error)

    return(
        <article>
            <p>Well, there was an error fetching that route.</p>
            <p>{error.statusText}</p>
            <p>{error.message}</p>
        </article>
    )
}

export default ErrorPage