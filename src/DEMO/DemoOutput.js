import React from 'react'

const DemoOutput = (props) => {
    return (
        <div>
            <p>{props.show ? 'this is new' : ''}</p>
        </div>
    ) 
}

export default React.memo(DemoOutput);