import React from 'react';
import '../styles/CreateApiDb.css'
const CreateApiDb = () => {
    return (
        <div className="div-api-db">
            <label>created from: </label>
            <select>
                <option value="all">alls</option>
                <option value="api">api</option>
                <option value="database">database</option>
            </select>
        </div>
    );
};

export default CreateApiDb;