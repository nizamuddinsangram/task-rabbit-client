import { Link } from "react-router-dom";

const TaskListCard = ({ task }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={task.task_image_url} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        {task.task_title}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{task.task_creator.creator_name}</h2>
        <p>{task.completion_date}</p>
        <p>{task.payable_amount}</p>
        <p>{task.task_quantity}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/dashboard/taskDetails/${task._id}`}
            className="btn mb-2 btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskListCard;
