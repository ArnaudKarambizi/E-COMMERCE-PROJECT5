import React from "react";

export default function ProductFilter(props) {
    return (
        // SETTING THE ONCHANGE EVENT handler ON THE SELECT FORM

        <select
            name="select"
            id="select"
            className="select-products"
            onChange={props.selectFilter}
            value={props.selectValue}
        >
            <option value="default">Select by Type</option>
            <option value="chair">Chair</option>
            <option value="sofa">Sofa</option>
            <option value="table">Table</option>
        </select>
    );
}
