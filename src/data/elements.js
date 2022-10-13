import { Circle, Rect, Text } from "react-konva"

const elements = {
    'circle': {
        
        type: Circle,
        fill: 'red',
        radius: 50,
        draggable: true,        
      },
      'rect': {        
        type: Rect,
        fill: 'gray',
        width: 100,
        height: 50,
        draggable: true,
      },
      'text': {
        text: 'Text',
        type: Text,
        fontFamily: 'arial',
        fontSize: 36,
        fontStyle: 'normal',
        fill: 'black',
        draggable: true,
      }
}

export default elements;