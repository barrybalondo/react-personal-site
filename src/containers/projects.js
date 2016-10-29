import React, { Component } from 'react';
import { fetchProjects } from '../actions/index'; 
//import  Loader  from 'halogen/PulseLoader'
import { connect } from 'react-redux';



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
      return <div>Loading</div>;
      //return <Loader className="spinner" color="#83878e" size="16px" margin="4px"/>; 
    
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