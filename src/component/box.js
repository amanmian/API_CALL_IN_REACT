import React from 'react';

class Box extends React.Component
{
    render()
    {
        return(
            <div style={{backgroundColor:"$(this.props.color)"}} className="container">
                <button onClick={() => {this.props.handleClick()}}>Change Color</button>
            </div>
        )
    }
}

export default Box;