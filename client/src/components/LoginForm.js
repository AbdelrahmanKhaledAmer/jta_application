import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { login } from '../actions/authActions.js'

import PropTypes from 'prop-types';


class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    proptypes = {
        login: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(user, this.props.succ);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="email" >
                            Email
                        </Label>
                        <Input type="text" name="email" id="email" placeholder="e.g. mail@domain.com" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                            Password
                        </Label>
                        <Input type="password" name="password" id="password" placeholder="e.g. password" onChange={this.onChange} />
                    </FormGroup>
                    <Button>Log In</Button>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, { login })(LoginForm);