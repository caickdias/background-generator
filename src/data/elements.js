import { Circle, Rect, Text } from "react-konva"

const elements = {
    'circle': {
        id: (Math.random() * 10000).toString(),
        type: Circle,
        fill: 'red',
        radius: 50,
        draggable: true,        
      },
      'rect': {
        id: (Math.random() * 10000).toString(),
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