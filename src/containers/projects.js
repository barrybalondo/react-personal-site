import React, { Component } from 'react';
import { fetchProjects } from '../actions/index'; 
import { connect } from 'react-redux';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash/string'


class Projects extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjects(project){
    return (
        <div className="container-content container-list" key={project.name}>
          <h2><a href={project.html_url} target="_blank">{project.name}</a></h2>
          <h5 className="author"><span className="author-span">Created on {moment(project.created_at).format('MMM-DD-YYYY')}</span></h5>
          <div className="fill" />
          <p>
              { _.truncate(project.description, {
                'length': 200,
                'separator': ' '
              })}
          </p>
          <br/>
          <a href={project.html_url} target="_blank">
            <button className="myButton">GOTO GIT ></button>
          </a>  

          <hr className="long"/>
        </div>
    );
  }

  render() {

    if(!this.props.projects)
      return <div className="spinner"><FontAwesome name="circle-o-notch" size="4x" spin={true}/></div>;

    return (

      <div>
        <div className="container">

          <div className="container-show">
            <h2 className>My Projects!</h2>
            <br/>
            <p>
              These are a few of my projects. A random collection of sorts. Some projects are attempts 
              to make a fully functional web app, while some are small apps that I built to try out features or frameworks.
            </p>
            <p>
              All of my projects are a joy to me and I treasure all of them. My first website I made a year 
              ago still resides in my repository. You can check some of my projects out below.
            </p>
            <br/>
            <hr className="long"/>
          </div>

          {this.props.projects.map(this.renderProjects)}
          <div className="container-content container-list">
            <h2>Check my repo for more!</h2>
            <a href="https://github.com/barrybalondo?tab=repositories" target="_blank">
              <button className="myButton">CHECK REPO ></button>
            </a>
          </div>
        </div>
        
      </div>

    );
  }
  
}

function mapStateToProps({projects}){
  return { projects };
}

export default connect(mapStateToProps, { fetchProjects })(Projects);