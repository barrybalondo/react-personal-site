import React, { Component } from 'react';
import { fetchPosts } from '../actions/index'; 
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash/string'

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderProjects(post){
    return (
        <div className="container-content" key={post._id}>
          <h2><Link to={`/post/${post._id}`}>{post.title}</Link></h2>   
          <h5 className="author"><span className="author-span">Created on {post.createdAt.slice(0,10)}</span></h5>
          <div className="fill" />

            <p>
              { _.truncate(post.content, {
                'length': 200,
                'separator': ' '
              })}
            </p>
            
          <br/>
          <Link to={`/post/${post._id}`}>
            <button className="myButton">READ MORE ></button>
          </Link>        
          <hr className="long"/>       
        </div>
    );
  }


  render() {

    if(!this.props.posts)
      return <div className="spinner"><FontAwesome name="circle-o-notch" size="4x" spin={true}/></div>;

    return (

      <div>
        <div className="container container-list">
          {this.props.posts.map(this.renderProjects)}
        </div>
      </div>

    );
  }

}

function mapStateToProps({posts}){
  return { posts: posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);