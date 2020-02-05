import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from '../redux/actions'


class PostList extends Component{
    componentDidMount() {
        this.props.fetchPosts()
        
    }
    render() {
        return (
            <h1>Post List</h1>
        )
    }
}
export default connect(null, {fetchPosts})(PostList)