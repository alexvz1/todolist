import React from 'react';

class TaskForm extends React.Component {
  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name  = target.name;
    this.setState({[name]: value});
  };

  sendData = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
        <form onSubmit={this.sendData} className="bg-white px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                  Tarea
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                autoComplete="off" 
                placeholder=""
                name="task"
                onChange={this.handleChange }
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Descripción
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                autoComplete="off" 
                placeholder=""
                name="description"
                onChange={this.handleChange }
              />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Guardar
              </button>
            </div>
        </form>
    );
  }
}

export default TaskForm;