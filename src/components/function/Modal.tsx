import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/function/Modal.css';
import { modalStateChange } from '../../slice/articleSlice';


const Modal = () => {

    const dispatch = useDispatch();
  

    const modalStatus = useSelector((state:any) => {
      return state.article.modalStatus;
    });

    //<div className='modal-overlay' onClick={modalClose}>

    return (
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <input type='text' placeholder='검색어 입력'></input>
          <button onClick={() => {dispatch(modalStateChange(''))}}>
            검색
          </button>
        </div>
    );
  };
   
  export default Modal;