import { connect } from "react-redux"
import { Input } from "./Input";
import { enterTextCreator } from "../../state/edit-text-reducer";

const mapStateToProps = (state: any) => {
  return{
    edit: state.edit,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return{
    convertText: (text: string) => {
      let action = enterTextCreator(text)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)