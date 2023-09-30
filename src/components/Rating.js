import React from 'react'
import PropTypes from 'prop-types';

const Rating = ({value,text,color}) => {
    return (
        <div className='rating'>
            <span> <i style={{color:color}} className='fas fa-star'></i>{value}({text}) </span>
            <p></p>
        </div>
    )
}

Rating.defaultProps ={
    color:'#00000'
}
Rating.prototypes={
    value:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    color:PropTypes.string,
}
export default Rating
