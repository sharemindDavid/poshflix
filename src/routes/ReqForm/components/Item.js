import React from "react";

function Item({ genre, title, date, user, updatestatus }) {
    return (
        <tr>
            <td>{genre}</td>
            <td>{title}</td>
            <td>{date}</td>
            <td>{user}</td>
            <td>{updatestatus}</td>
        </tr>
    );
}

export default Item;
