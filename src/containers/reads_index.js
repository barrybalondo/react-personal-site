import React, { Component } from 'react';
import { fetchReads } from '../actions/index'; 
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash/string'



class ReadsIndex extends Component {

  componentDidMount() {
    this.props.fetchReads();
  }

   renderReads(read){
    return (
        <div className="container-content" key={read._id}>
          <h2><a href={read.url} target="_blank">{read.title}</a></h2>
          <h5><span className="short">Created on {read.createdAt.slice(0,10)} by {read.author}</span></h5>
          <p>
              { _.truncate(read.preview, {
                'length': 180,
                'separator': ' '
              })}
          </p>

          <br/>
          <a href={read.url} target="_blank">
            <button className="myButton">READ MORE ></button>
          </a>      

          <hr className="long"/>
        </div>
    );
  }


  render() {

    if(!this.props.reads)
      return <div className="spinner"><FontAwesome name="circle-o-notch" size="4x" spin={true}/></div>;


    return (

       <div>
        <div className="container container-list">
          {this.props.reads.map(this.renderReads)}
        </div>
      </div>

    );

  }

}

function mapStateToProps({reads}){
  return { reads };
}


export default connect(mapStateToProps, { fetchReads })(ReadsIndex);