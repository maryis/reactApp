import React from 'react';

export const Home = (props) => {

    document.title='صفحه اصلی'
    console.log(props.history);
    return (
        <p>
            This is Home Page
            {props.history}
        </p>
    )
}

