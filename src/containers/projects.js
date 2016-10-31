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
      <div>
        <div className="container-content" key={project.name}>
          <h2><a href={project.html_url}>{project.name}</a></h2>
          <p>{project.description}</p>
        </div>
        <hr/>
      </div>
    );
  }

  render() {

    if(!this.props.projects)
      return <div className="spinner"><FontAwesome name="circle-o-notch" size="4x" spin="true"/></div>;

    return (

      <div>
        <div className="container">
          {this.props.projects.map(this.renderProjects)}
        </div>
      </div>

    );
  }
  


}

function mapStateToProps({projects}){
  return { projects };
}

export default connect(mapStateToProps, { fetchProjects })(Projects);