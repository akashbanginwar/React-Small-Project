import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    return (

        <li className="Project">
          <strong>{this.props.project.title}</strong>: {this.props.project.category}
          <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>
            <input type="submit" className="btn btn-danger" value="Delete" />
          </a>
        </li>


    );
  }
}

ProjectItem.propTypes = {
  projects: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
