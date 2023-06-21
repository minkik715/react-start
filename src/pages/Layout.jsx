import React from 'react';

function Layout({children}) {
    return (
        <>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </>

    );
}

export default Layout;