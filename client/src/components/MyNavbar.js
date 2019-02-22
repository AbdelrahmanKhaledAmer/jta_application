import React, { Component } from 'react';
import { Navbar, Container, NavbarBrand, NavItem, Nav } from 'reactstrap';

class MyNavbar extends Component {
    state = {
        loggedIn: false
    }

    logout = () => {
        this.setState({ loggedIn: false });
        localStorage.setItem("token", null);
        window.location = "/";
    }

    loggedOutElems = () => {
        return (
            <React.Fragment>
                < NavItem >
                    <div onClick={this.props.reg} className="MyNavLink">
                        Sign up
                    </div>
                </NavItem >
                <NavItem>
                    <div onClick={this.props.out} className="MyNavLink">
                        Log in
                    </div>
                </NavItem>
            </React.Fragment>
        );
    }

    loggedInElems = () => {
        return (
            <React.Fragment>
                < NavItem >
                    <div onClick={this.props.vew} className="MyNavLink">
                        View All Posts
                    </div>
                </NavItem >
                < NavItem >
                    <div onClick={this.props.pos} className="MyNavLink">
                        Make A Post
                    </div>
                </NavItem >
                < NavItem >
                    <div onClick={this.logout} className="MyNavLink">
                        Log Out
                    </div>
                </NavItem >
            </React.Fragment>
        );
    }

    navItems = () => {
        if (this.state.loggedIn) {
            return this.loggedInElems();
        }
        return this.loggedOutElems();
    }

    componentDidMount() {
        let token = localStorage.getItem("token");
        if (token === "null") {
            this.setState({ loggedIn: false });
        } else {
            this.setState({ loggedIn: true });
        }
    }

    render() {
        return (
            <div>
                {/*Reactstrap's Navbar component*/}
                <Navbar dark color="dark">
                    {/*Container component to put our navbar elements in*/}
                    <Container>
                        {/*The "title" of the Navbar*/}
                        <NavbarBrand href="/">
                            JTA MERN Application
                        </NavbarBrand>
                        {/*The container that will hold the navbar links*/}
                        <Nav>
                            {this.navItems()}
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default MyNavbar;