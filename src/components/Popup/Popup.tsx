interface Props {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Popup = ({ title, children, isOpen, handleClose }: Props) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
            className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"
            onClick={handleClose}
          ></div>
          <div className="bg-white w-[90%] sm:w-4/5 lg:w-1/2 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto ">
            <div className="py-4 px-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                <button
                  className="text-black hover:black/50"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.293 5.293C5.683 4.902 6.316 4.902 6.707 5.293L12 10.586L17.293 5.293C17.684 4.902 18.316 4.902 18.707 5.293C19.098 5.683 19.098 6.316 18.707 6.707L13.414 12L18.707 17.293C19.098 17.684 19.098 18.316 18.707 18.707C18.316 19.098 17.684 19.098 17.293 18.707L12 13.414L6.707 18.707C6.316 19.098 5.683 19.098 5.293 18.707C4.902 18.316 4.902 17.684 5.293 17.293L10.586 12L5.293 6.707C4.902 6.316 4.902 5.683 5.293 5.293Z"
                    />
                  </svg>
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
