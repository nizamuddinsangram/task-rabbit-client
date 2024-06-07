const Modal = ({ onClose, submission }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Submission Details</h3>
        <p>
          <strong>Worker Name:</strong> {submission?.workerInfo?.worker_name}
        </p>
        <p>
          <strong>Worker Email:</strong> {submission?.workerInfo?.worker_email}
        </p>
        <p>
          <strong>Task Title:</strong> {submission?.task_title}
        </p>
        <p>
          <strong>Payable Amount:</strong> {submission?.payment_amount}
        </p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
