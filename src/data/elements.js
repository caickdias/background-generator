import { Circle } from "react-konva"

const elements = {
    'circle': {
        id: (Math.random() * 10000).toString(),
        type: Circle,
        fill: 'red',
        radius: 50,
        draggable: true,
      }
}

export default elements;