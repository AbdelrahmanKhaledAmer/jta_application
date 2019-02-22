import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { signup } from '../actions/authActions.js'

import PropTypes from 'prop-types';

class RegisterForm extends Component {
    state = {
        email: '',
        password: '',
        name: ''
    }

    proptypes = {
        signup: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        }

        this.props.signup(user);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name">
                            Name
                        </Label>
                        <Input type="text" name="name" id="name" placeholder="First name or handle" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">
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
                    <Button>Sign up</Button>
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

export default connect(mapStateToProps, { signup })(RegisterForm);