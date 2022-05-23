import React from 'react';
import ReactDOM from 'react-dom';

// Not a component, but a function that returns a string.
// Component should be a function that returns a JSX Element (React element under the hood).

// const BadComponent = () => {
//     return 'Hello World';
// }

// A valid component using JSX.

const Component = () => {
    return (
        <main>
            <h1 id="title">Who is the king of Ktatala?</h1>
        </main>
    );
};


ReactDOM.render(<Component/>,document.getElementById('root'));
