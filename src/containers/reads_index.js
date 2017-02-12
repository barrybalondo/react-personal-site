import React, { Component } from 'react';
import { fetchReads } from '../actions/index'; 
import { connect } from 'react-redux';
import moment from 'moment';
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
          <h5 className="author"><span className="author-span">Created on {moment(read.createdAt).format('MMM-DD-YYYY')} by {read.author}</span></h5>
          <div className="fill" />
          <p>
              { _.truncate(read.preview, {
                'length': 200,
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