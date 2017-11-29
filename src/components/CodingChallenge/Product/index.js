import React from 'react'

const Product = props => (
    <div className="col-md-4">
        <ul className="list-group">
            <li className="list-group-item">{props.product.category}</li>
            <li className="list-group-item">{props.product.title}</li>
            {props.product.weight && props.product.weight !==null && <li className="list-group-item">
                Weight: {props.product.weight}
                {props.product.size && <ul>
                    <li>Width: {props.product.size.width}</li>
                    <li>Length: {props.product.size.length}</li>
                    <li>Height: {props.product.size.height}</li>
                </ul>}
            </li>}

        </ul>
    </div>
)

export default Product