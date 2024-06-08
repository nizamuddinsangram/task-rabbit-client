import { useEffect } from "react";

const NotificationPopup = ({ notifications, onClose }) => {
  // Hide the popup when clicking anywhere on the page
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".notification-popup-overlay") === null) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-80">
        <div className="flex justify-between items-center px-4 py-2 bg-gray-200 rounded-t-lg">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <ul>
            {notifications.map((notification, index) => (
              <li key={notification._id} className="py-2">
                {index + 1}. {notification.message}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end p-2 bg-gray-200 rounded-b-lg">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
