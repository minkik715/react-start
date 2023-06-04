import React from 'react';

function Child({name = "3", test, children}) {
    return (
        <div>
            {name}
            {test}
            {children}
        </div>
    );
}

export default Child;