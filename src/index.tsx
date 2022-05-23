import React from 'react';
import ReactDOM from 'react-dom';

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
