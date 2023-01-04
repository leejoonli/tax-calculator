import {useRouteError} from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>ginga so hot</h1>
        </div>
    );
}

export default ErrorPage;