import React from 'react'

const TasklistNum = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen h-[20%]">
      <div className="rounded-xl w-3/12 py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold text-center text-white bg-transparent">
          {data.taskCount.newTask}
        </h2>
        <h3 className="text-xl font-medium text-white text-center">New Task</h3>
      </div>{" "}
      <div className="rounded-xl w-3/12 py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-semibold text-center text-white bg-transparent">
          {data.taskCount.completed}
        </h2>
        <h3 className="text-xl font-medium text-white text-center">
          Completed Task
        </h3>
      </div>{" "}
      <div className="rounded-xl w-3/12 py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold text-center text-white bg-transparent">
          {data.taskCount.active}
        </h2>
        <h3 className="text-xl font-medium text-white text-center">
          Active Task
        </h3>
      </div>
      <div className="rounded-xl w-3/12 py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold text-center text-white bg-transparent">
          {data.taskCount.failed}
        </h2>
        <h3 className="text-xl font-medium text-white text-center">
          Failed Task
        </h3>
      </div>
    </div>
  );
}

export default TasklistNum