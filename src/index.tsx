import React from 'react';
import ReactDOM from 'react-dom';

// A valid Component using React Top Level API

const Component = () => {
    return React.createElement(
        'main',
        {},
        React.createElement('h1', { id: 'title' }, 'Who is the king of Ktatala?'),
    );
};

ReactDOM.render(<Component/>,document.getElementById('root'));