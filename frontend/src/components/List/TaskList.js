import * as React from 'react';

export class TaskList extends React.Component {
  render() {
    return (
      <table className=" rounded border-2 border-teal-500 w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">Tarea</th>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">Descripción</th>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map((task,key) => {
            return (
              <tr key={key}>
                <td className="border border-gray-400 px-4 py-2"><span className={"" + (task.status === true ? 'line-through text-green-600' : '')}>{task.title}</span></td>
                <td className="border border-gray-400 px-4 py-2"><span className={"" + (task.status === true ? 'line-through text-green-600' : '')}>{task.description}</span></td>
                <td className="border border-gray-400 px-4 py-2"> 
                  <button onClick={() => this.props.changeStatus(task._id)} className={"bg-transparent hover:text-white text-xs py-1 px-1 border hover:border-transparent rounded" + (task.status === true ? 'hover:bg-green-500 text-green-700 border-green-500' : 'hover:bg-yellow-500 text-yellow-700 border-yellow-500')}>
                    {task.status === true ? 'Desmarcar' : 'Marcar'}
                  </button>
                  <button onClick={() => this.props.delete(task._id)}  className="bg-transparent hover:bg-red-500 text-red-700  hover:text-white text-xs py-1 px-1 border border-red-500 hover:border-transparent rounded">
                    Eliminar
                  </button>
                </td>
              </tr>
              )
          })}
        </tbody>
      </table>
      );
    }
  }

  export default TaskList;