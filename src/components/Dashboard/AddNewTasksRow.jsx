import { Link } from "react-router-dom";

const AddNewTasksRow = ({ task, handleDelete }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={task?.image_url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold"></div>
          </div>
        </div>
      </td>
      <td>{task?.task_title}</td>
      <td>
        <Link
          to={`/dashboard/myTaskUpdate/${task?._id}`}
          className="btn btn-sm"
        >
          Update
        </Link>
      </td>
      <th>
        <button
          onClick={() => handleDelete(task?._id)}
          className="btn btn-ghost btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default AddNewTasksRow;
