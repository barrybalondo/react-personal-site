import React, { Component } from 'react';
import { fetchProjects } from '../actions/index'; 
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';


class Projects extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjects(project){
    return (
        <div className="container-content" key={project.name}>
          <h2><a href={project.html_url} target="_blank">{project.name}</a></h2>
          <h5><span className="short">Created on {project.created_at.slice(0,10)}</span></h5>
          <p>{project.description}</p>
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
          {this.props.projects.map(this.renderProjects)}
          <div className="container-content">
            <a href="https://github.com/barrybalondo?tab=repositories" target="_blank">
              <button className="myButton">CHECK MORE ></button>
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