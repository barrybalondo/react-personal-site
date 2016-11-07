import React, { Component } from 'react';
import { fetchPosts } from '../actions/index'; 
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import hljs from 'highlight.js';

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


class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }


  renderProjects(post){
    return (
        <div className="container-content" key={post._id}>
          <h2>{post.title}</h2>
          <h5><span className="short">Created on {post.createdAt.slice(0,10)}</span></h5>
          <div dangerouslySetInnerHTML={{__html: md.render(post.content) } } />
          <hr className="long"/>
        </div>
    );
  }


  render() {


    if(!this.props.posts)
      return <div className="spinner"><FontAwesome name="circle-o-notch" size="4x" spin={true}/></div>;

    return (

      <div>
        <div className="container">
          {this.props.posts.map(this.renderProjects)}
        </div>
      </div>

    );
  }


}


function mapStateToProps({posts}){
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);