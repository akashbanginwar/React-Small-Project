import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Web Design','Web Development','Mobile Development']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required!');
    }else{
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
        title: this.refs.title.value="";
      });
    }
    e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h2>Add Project</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
                <div className="col-md-6">
                  <lable>Title</lable><br />
                  <input type="text" className="form-control" placeholder="Enter title here..." ref="title" />
                </div>
              </div>
            <br />
              <div className="row">
                <div className="col-md-6">
                  <lable>Category</lable><br />
                  <select ref="category" className="form-control">
                    {categoryOptions}
                  </select>
                 </div>
              </div>
            <br />
              <input type="submit" className="btn btn-primary" value="Submit" />
          </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;
