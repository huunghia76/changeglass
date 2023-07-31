import React from 'react'

const ChangeState = ({ data, onChange }) => {
    const handelClick = (e) => {
        onChange && onChange(e)
    }

    return (
        <div>
            <img
                className='glasses__item'
                src={data.url}
                alt=''
                onClick={() => handelClick(data)}
            />
        </div>
    )
}

export default ChangeState
