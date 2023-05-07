const ModalLogin = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null;
  return (
    <div>
      <div className="fixed left-0 top-0 h-[100vh] w-[100vw] bg-black/20 backdrop-blur-lg" />
      <div aria-hidden="true" className="fixed inset-0 flex items-center justify-center">
        <div className="relative max-h-full w-full max-w-2xl">
          <div className="relative rounded-lg bg-white shadow">
            <div className="flex items-start justify-between rounded-t border-b p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
              <button
                onClick={() => onClose()}
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-6 p-6">{children}</div>

            <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
