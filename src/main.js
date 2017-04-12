/**
 * Created by Veronika Stoyanova on 10.4.2017 г..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('root')
    );
});