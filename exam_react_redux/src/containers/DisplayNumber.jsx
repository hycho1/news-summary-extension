import DisplayNumber from "../components/DisplayNumber";
import { connect } from 'react-redux';

function mapStateToProps(state){
    return {
        number:state.number
    }
}

function mapDispatchToProps(){
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayNumber);