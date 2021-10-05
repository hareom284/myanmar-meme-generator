import { Resizable } from "re-resizable";
import Draggable from 'react-draggable';
import "../../custom.css"

const DisplayText = (props) => {


  return (
    <Draggable>


      <Resizable

        style={{
          border: "1px solid #c8aeef",
          margin: "30px",
        }}
        defaultSize={{
          width: 100,
          height: 60,
        }} >

        <span className="font-weight">
          {props.inputText}
        </span>
      </Resizable>
    </Draggable>

  )
}

export default DisplayText;