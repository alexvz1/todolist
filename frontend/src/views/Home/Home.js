import React from 'react';
import TaskForm from '../../components/forms/taskForm';
import TaskList from '../../components/List/TaskListCard';

export class Home extends React.Component {

  state = {
    data: [],
    guardando: false
  }

  async componentDidMount(){
    await this.fetchTask()
  }

  fetchTask = async () => {
    let res = await fetch('http://localhost:5001/api/')
    let data = await res.json();
    this.setState({data:data.items});
  }

  changeStatus = async (id) => {
    let res = await fetch('http://localhost:5001/api/change/'+id)
    let data = await res.json();
    if(data.status === 'ok'){
      this.fetchTask();
    }
  }

  delete = async (id) => {
    let res = await fetch('http://localhost:5001/api/delete/'+id)
    let data = await res.json();
    if(data.status === 'ok'){
      this.fetchTask();
    }
  }

  newTask = async (data) => {
    this.setState({guardando: true});
    try {
      let confing = {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      let res = await fetch('http://localhost:5001/api', confing)
      let json = await res.json();
      this.setState({guardando: false});
      if(json.status === 'ok'){
        this.fetchTask();
      }
    } catch(err) {
      this.setState({guardando: false});
    }
  }

  handleSubmit = (data) => {
    this.newTask(data);
  }

  render() {
    let ShowForm;
    if (!this.state.guardando) {
      ShowForm = <TaskForm handleSubmit={this.handleSubmit}></TaskForm>;
    } else {
      ShowForm = <p>Guardando...</p>;
    }
    return (
      <div>
        <div className="px-2">
          <div className="flex -mx-2">
            <div className="w-4/12 px-2">
              {ShowForm}
            </div>
            <div className="w-8/12 px-16 pt-5 bg-gray-100 min-h-screen">
              <TaskList 
                list={this.state.data} 
                changeStatus={this.changeStatus}
                delete={this.delete}
              >
              </TaskList>
            </div>
     
          </div>
        </div>    
      </div>
    );
  }
}

export default Home;