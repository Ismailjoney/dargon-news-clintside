import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>Here is our terms and conditrion</h2>
            <p>Go back to <Link to = '/regeister'>Regientrion</Link></p>
        </div>
    );
};

export default TermsAndCondition;