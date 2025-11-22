const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[100]">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg font-semibold">{message}</p>
      </div>
    </div>
  );
};

export default Popup;
