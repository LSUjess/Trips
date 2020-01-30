import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Welcome to trip managers</h1>
                <p>Use this manager to manager your trips, by:</p>
                <ul>
                    <li>Add a new trip </li>
                    <li>update a trip </li>
                    <li>Delete a trip </li>
                    <li>Show all trips </li>

                </ul>
            </div>
        );
    }
}
