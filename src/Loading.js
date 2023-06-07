import React from 'react';

const Loading = ({ isLoading }) => {
    return isLoading ? (
        <div>
            Loading...
        </div>) : null;
}

export default Loading;