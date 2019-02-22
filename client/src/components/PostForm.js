import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { makePost } from '../actions/postActions.js';

import PropTypes from 'prop-types';

class PostForm extends Component {
    state = {
        title: "",
        description: ""
    }

    proptypes = {
        makePost: PropTypes.func.isRequired,
        post: PropTypes.object.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();

        let post = {
            title: this.state.title,
            description: this.state.description
        }

        console.log(post);
        this.props.makePost(post);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="Title" >
                            Title
                        </Label>
                        <Input type="text" name="title" id="title" placeholder="Post title" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="body">
                            Description
                        </Label>
                        <Input type="textarea" name="description" id="description" placeholder="Write your post body here" onChange={this.onChange} />
                    </FormGroup>
                    <Button>Post</Button>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    };
};

export default connect(mapStateToProps, { makePost })(PostForm);