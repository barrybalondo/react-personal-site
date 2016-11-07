import React, { Component } from 'react';
import { fetchPosts } from '../actions/index'; 
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import hljs from 'highlight.js';
import _ from 'lodash/string'


// Refactor later
const md = require('markdown-it')({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});



class PostsIndex extends Component {


  componentDidMount() {
    this.props.fetchPosts();
  }

  


  renderProjects(post){
    return (
        <div className="container-content" key={post._id}>
          
          <h2><Link to={`/post/${post._id}`}>{post.title}</Link></h2>
          
          <h5><span className="short">Created on {post.createdAt.slice(0,10)}</span></h5>

            <p>
              { _.truncate(post.content, {
                'length': 180,
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

  //        {this.props.posts.map(this.renderProjects)}


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