import React from 'react';

function widthMobileSize(Component) {
    return class extends React.Component {
        state = {
            width:  window.innerWidth,
            height: window.innerHeight
        }
        constructor(props) {
            super(props);
            this.handleWindowResize = this.handleWindowResize.bind(this);
        }
        componentDidMount() {
            window.addEventListener('resize', this.handleWindowResize);
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.handleWindowResize);
        }
        handleWindowResize() {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        render() {
            console.log(this.state);
            return (
                <Component  {...this.props} {...this.state}/>
            )
        }
    }
}

export default widthMobileSize;