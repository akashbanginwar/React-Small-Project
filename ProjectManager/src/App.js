import React, { Component } from 'react';
import logo from './apps.png';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import Todos from './Components/Todos';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getProjects(){
    this.setState({
      projects: [
        {
          id:uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id:uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id:uuid.v4(),
          title: 'E-commerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="project-manager">
            <AddProject addProject={this.handleAddProject.bind(this)}/>
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        </div>
        <hr />
        <div className="todo-list">
            <Todos todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
