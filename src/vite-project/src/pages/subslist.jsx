import React from "react";

function SubscriptionsList() {
    return (
        <React.Fragment>
            <h1>Subscription List:</h1>
            <table>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Start</th>
                    <th>End</th>
                </tr>
                <tr>
                    <td>user1</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>2021-01-01</td>
                    <td>2021-12-31</td>
                </tr>
                <tr>
                    <td>user1</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>2021-01-01</td>
                    <td>2021-12-31</td>
                </tr>
            </table>
        </React.Fragment>
    );
}

export default SubscriptionsList;