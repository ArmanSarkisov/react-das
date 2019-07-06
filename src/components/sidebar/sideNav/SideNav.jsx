import React from 'react';
import s from './SideNav.module.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class SideNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    render() {
        return (
            <>
                <Dropdown group isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
                    <DropdownToggle caret>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        ...
                    </DropdownMenu>
                </Dropdown>

                <Dropdown isOpen={this.state.dropdownOpen}  size="lg" toggle={this.toggle}>
                    <DropdownToggle caret>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        ...
                    </DropdownMenu>
                </Dropdown>

                <Dropdown group isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
                    <DropdownToggle caret>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        ...
                    </DropdownMenu>
                </Dropdown>
            </>
        )
    }
}

export default SideNav; 