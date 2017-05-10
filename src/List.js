/**
 * Created by Veronika Stoyanova on 13.4.2017 г..
 */
import React from 'react';

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()}
                  value={number} />
    );
    return (
        <ul>{listItems}</ul>
    );
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const numbers = [1,2,3,4,5,6];
        return (
           <NumberList numbers={numbers}/>
        )
    }
}

export default List;