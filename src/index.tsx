import React from 'react';
import ReactDOM from 'react-dom';

// Not a component, but a function that returns a string.
// Component should be a function that returns a JSX Element (React element under the hood).

// const BadComponent = () => {
//     return 'Hello World';
// }

// A valid component using JSX.

// const Component = () => {
//     return (
//         <main>
//             <h1 id="title">Who is the king of Ktatala?</h1>
//         </main>
//     );
// };

// A valid Component using React Top Level API

// const Component = () => {
//     return React.createElement(
//         'main',
//         {},
//         React.createElement('h1', { id: 'title' }, 'Who is the king of Ktatala?'),
//     );
// };

// A valid React Element

const reactElement = {
    $$typeof: Symbol.for('react.element'),
    type: 'main',
    key: null,
    ref: null,
    props: {
        children: {
            $$typeof: Symbol.for('react.element'),
            type: 'h1',
            key: null,
            ref: null,
            props:{
                id: 'title',
                children: 'Who is the king of Ktatala?'
            },
        }
    },
}

ReactDOM.render(reactElement,document.getElementById('root'));
