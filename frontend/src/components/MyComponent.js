import React, { useState, useEffect } from "react";

function MyComponent() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://error-boundary-app-backend-production.up.railway.app/api/data")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data.");
                }
                return response.json();
            })
            .then((data) => setData(data.message))
            .catch((err) => setError(err.message));
    }, []);

    if (error) {
        throw new Error(error);
    }

    return (
        <div>
            <h2>MyComponent</h2>
            <p>{data}</p>
        </div>
    );
}

export default MyComponent;
