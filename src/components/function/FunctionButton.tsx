import { useDispatch, useSelector } from 'react-redux';
import { modalOpen } from '../../slice/articleSlice';

import Modal from './Modal'

import '../../css/function/FunctionButton.css';

const FunctionButton = () => {

    const dispatch = useDispatch();

    return (
        <div id="FunctionButton" >
            <button type="button" onClick={() => dispatch(modalOpen(''))}>
                <img src="icons/icon_search.png" alt="검색" width='30px' height='30px'/>
            </button>
            <Modal />
        </div>
    );
}

export default FunctionButton;