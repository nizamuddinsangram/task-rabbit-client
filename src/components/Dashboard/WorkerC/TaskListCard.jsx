const TaskListCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="" alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title"></h2>
        <p></p>
        <div className="card-actions justify-end">
          <button className="btn mb-2 btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskListCard;
