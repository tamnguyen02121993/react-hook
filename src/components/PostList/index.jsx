import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss'
PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: []
}

function PostList(props) {
    const { posts } = props;
    return (
        <div className="post-list">
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PostList;