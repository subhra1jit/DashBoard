import TwoTabs from "../molecules/TwoTabs";

const Modal = ({ close, setUser }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="modal-overlay fixed inset-0 bg-black opacity-40"
          onClick={() => close()}
        ></div>
        <div className="modal-container bg-white  max-w-md w-11/12 mx-auto rounded shadow-lg z-50">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-xl font-bold">Add new Profile</p>
              <button
                className="modal-close cursor-pointer z-50"
                onClick={() => close()}
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <TwoTabs setUser={setUser} close={close} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
