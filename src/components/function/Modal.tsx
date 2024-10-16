import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/function/Modal.css';
import { modalOpen, modalClose } from '../../slice/articleSlice';


const Modal = () => {

    const dispatch = useDispatch();

    const modalStatus = useSelector((state:any) => {
      return state.article.modalStatus;
    });
    
    const searchRef = useRef<HTMLDivElement|null>(null);

    useEffect(() => {

      const onCheckClickOutside = (e:MouseEvent) => {     
        if(modalStatus === true && searchRef.current && !searchRef.current.contains(e.target as Node))
          dispatch(modalClose(''));
      }

      document.addEventListener('mousedown', onCheckClickOutside);
      return () => {
        document.removeEventListener('mousedown', onCheckClickOutside);
      };
      
    },[searchRef])

    return (     
        <div ref={searchRef} className={`modal-content${modalStatus ? ' show' : ''}`}>
          <input type='text' defaultValue={''} placeholder='검색어 입력'></input>
          <button onClick={() => {dispatch(modalClose(''))}}>
            검색
          </button>
      </div> 
    )
  }

  export default Modal;