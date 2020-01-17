import React from "react";

interface iState {
    isHovering: any
}


class HoverText extends React.Component<{}, iState> {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        return (
            <div
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
            >
                {(this.state.isHovering ? <span style={{ color: "#038FDE", cursor: "pointer" }}>{this.props.children}</span> : <span>{this.props.children}</span>)}
            </div>
        );
    }
}



export default HoverText; 