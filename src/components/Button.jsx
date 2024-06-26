import React from 'react'

const Button = ({ title, styles }) => {
    return (
        <button className={styles}>
            {title}
        </button>
    )
}

export default Button