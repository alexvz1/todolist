import * as React from 'react';

export class TaskListCard extends React.Component {
  render() {
    return (
       <>
         {this.props.list.map((task,key) => {
            return (
              <div key={key} className="border rounded w-full py-2 px-4 my-2 bg-white shadow-md hover:shadow-lg">
                <div className="px-2">
                  <div className="flex -mx-2">
                    <div className="w-9/12 px-2">
                      <div className="text-blue-800 font-bold text-xl mb-0">
                        <span className={"" + (task.status === true ? 'line-through text-green-600' : '')}>{task.title}</span>
                      </div>
                      <p className="text-gray-700 text-base"><span className={"" + (task.status === true ? 'line-through text-green-600' : '')}>{task.description}</span></p>
                    </div>
                    <div className="w-3/12 px-2 flex items-center border-l">
                      <button  onClick={() => this.props.changeStatus(task._id)} className={"flex-0 mx-1 text-xs py-1 px-3 border " + (task.status === false ? 'bg-transparent hover:bg-green-500 text-green-700 border-green-500  hover:text-white rounded' : ' bg-transparent hover:bg-blue-700 text-blue-700 border-blue-700 hover:text-white rounded')}>
                        {task.status === true ? 'Regresar' : 'Realizada'}
                      </button>
                      <button  onClick={() => this.props.delete(task._id)} className="flex-0 mx-1 bg-transparent hover:bg-red-500 text-red-700  hover:text-white text-xs py-1 px-3 border border-red-500 hover:border-transparent rounded">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
         })}
       </>
    );
    }
  }

  export default TaskListCard;