import React, { Component } from 'react';
import { fetchPost } from '../actions/index'; 
import { connect } from 'react-redux';
import moment from 'moment';
import hljs from 'highlight.js';
import FontAwesome from 'react-fontawesome';

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

class PostShow extends Component {

  componentDidMount(){
    this.props.fetchPost(this.props.params.id);
  }

  render(){

    if(!this.props.posts)
      return <div className="spinner"><FontAwesome name="circle-o-notch" size="4x" spin={true}/></div>;

    return(

      <div className="container" >
        <div className="container-show">
          <h2>{this.props.posts.title}</h2>
          <h5 className="author-show"><span className="author-span">Created on {moment(this.props.posts.createdAt).format('MMM-DD-YYYY')}</span></h5>       
          <div className="fill" dangerouslySetInnerHTML={{__html: md.render(this.props.posts.content) } } />  
          <hr className="long"/>
        </div>
      </div>

    );

  }

}

function mapStateToProps({posts}){
  return { posts: posts.post };
}

export default connect(mapStateToProps, {fetchPost})(PostShow);
