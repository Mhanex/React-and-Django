import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
        onClick={handleShow} 
        className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4"
      >
        + Add Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                props.newEmployee(name, role, img);
                setName('');
                setRole('');
                setImg('');
                handleClose();
            }}
            id="editmodal" 
            className="w-full max-w-sm"
        >
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                        Full Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        placeholder="Jane Doe"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="name" 
                        type="text"  
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
                        Role
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input 
                        placeholder="Designation"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="role" 
                        type="text" 
                        value={role}
                        onChange={(event) => {
                            setRole(event.target.value);
                        }}
                        />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="imgurl">
                        Image URL
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input 
                        placeholder="https://imageurl.jpg"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="imgurl" 
                        type="text" 
                        value={img}
                        onChange={(event) => {
                            setImg(event.target.value);
                        }}
                        />
                </div>
            </div>
        </form>
        </Modal.Body>

        <Modal.Footer>
          <button 
            className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleClose}
          >
                Close
          </button>
          <button 
            form="editmodal" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"

          >
                + Add
          </button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default AddEmployee;