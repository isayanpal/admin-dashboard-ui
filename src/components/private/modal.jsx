export const Modal = () => {
  return (
    <div>
      {/* Modal Toggle */}
      <label
        htmlFor="me-modal-toggle"
        className="cursor-pointer px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 transition"
      >
        No JS Modal
      </label>

      {/* Hidden Checkbox Toggle */}
      <input type="checkbox" id="me-modal-toggle" className="hidden peer" />

      {/* Modal Background */}
      <div
        className="fixed inset-0 z-40 hidden peer-checked:block bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      ></div>

      {/* Modal Container */}
      <div
        className="fixed inset-0 items-center justify-center z-50 hidden peer-checked:flex"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg relative"
          tabIndex="-1"
        >
          {/* Close Button */}
          <label
            htmlFor="me-modal-toggle"
            className="absolute top-2 right-3 text-zinc-500 hover:text-zinc-800 cursor-pointer text-xl"
          >
            &times;
          </label>

          {/* Modal Content */}
          <h2 id="modal-title" className="text-2xl font-semibold mb-2">
            👋 Hello, I'm Sayan
          </h2>
          <p className="text-zinc-600">
            I'm a passionate developer who loves building responsive and
            beautiful user interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};
