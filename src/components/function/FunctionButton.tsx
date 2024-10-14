import '../../css/function/FunctionButton.css';

const FunctionButton = () => {

    return (
        <div id="FunctionButton" >
            <button type="button" onClick={()=>alert('hi')}>
                <img src="icons/icon_search.png" alt="검색" width='30px' height='30px'/>
            </button>
        </div>
    );
}

export default FunctionButton;