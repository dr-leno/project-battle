import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/popular'>Popular</Link>
            <Link to='/battle'>Battle</Link>
        </div>
	)
}
export default ErrorPage;