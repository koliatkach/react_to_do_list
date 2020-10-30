import React from 'react';

function ListItem(props) {
    return (
        <li key={props.index}>{props.item}
            <div className = 'divButtonsPutDelete'>
                <button className = 'li_button done' >done</button>
                <button className = 'li_button delete' onClick = {props.onDelete}>delete</button>
            </div>
        </li>
    )

}

export default ListItem