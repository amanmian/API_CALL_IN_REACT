import Box from "../component/box.js";
import * as actionCreator from "../actions/index.js";
import {connect} from "react-redux";
import React from 'react';


class Boxcon extends React.Component
{
    render()
    {
        return(
            <Box handleClick={this.props.loadColor} color={this.props.color}> </Box>
        );
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps,actionCreator)(Boxcon)
