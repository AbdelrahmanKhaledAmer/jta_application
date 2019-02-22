import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions.js'

import PropTypes from 'prop-types';

class PostsPage extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    proptypes = {
        getPosts: PropTypes.func.isRequired,
        post: PropTypes.object.isRequired
    }

    render() {
        const posts = this.props.post.data;
        return (
            <div>
                {posts.map((post) => (
                    <div>
                        <br />
                        <Container style={{ border: 1 + 'px solid grey', borderRadius: 5 + 'px' }}>
                            <br />
                            <h3>{post.title}</h3>
                            <hr />
                            <p>{post.description}</p>
                        </Container >
                        <br />
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    };
};

export default connect(mapStateToProps, { getPosts })(PostsPage);