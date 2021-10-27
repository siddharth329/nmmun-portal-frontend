import React from 'react';
import BottomNavComponent from "../../components/bottom-nav/bottom-nav.component";

function LayoutContainer({children}) {
    return (
        <div className="layoutcontainer">
            {children}
            <BottomNavComponent/>
        </div>
    );
}

export default LayoutContainer;
