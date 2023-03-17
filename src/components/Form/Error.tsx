import React from 'react';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Error = ({ children, onClose }: Props) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute bottom-7 w-4/5 flex">
      <button
        className="absolute top-1/2 -translate-y-1/2 right-0 px-2 py-1"
        onClick={onClose}
      >
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.293 5.293C5.683 4.902 6.316 4.902 6.707 5.293L12 10.586L17.293 5.293C17.684 4.902 18.316 4.902 18.707 5.293C19.098 5.683 19.098 6.316 18.707 6.707L13.414 12L18.707 17.293C19.098 17.684 19.098 18.316 18.707 18.707C18.316 19.098 17.684 19.098 17.293 18.707L12 13.414L6.707 18.707C6.316 19.098 5.683 19.098 5.293 18.707C4.902 18.316 4.902 17.684 5.293 17.293L10.586 12L5.293 6.707C4.902 6.316 4.902 5.683 5.293 5.293Z"
          />
        </svg>
      </button>
      {children}
    </div>
  );
};

export default Error;
