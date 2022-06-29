import { Checkbox, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { ItemType, TaskType } from '../../../../../store/itemLists/types';
import { style } from './subTask.styles';

type Props = { item: TaskType };

export default function SubTask({ item }: Props) {
  // const [state, setState] = useState(item);

  return (
    <Container sx={style.container}>
      <div>
        <Typography sx={{ color: item.complete ? '#d2d2d2 ' : 'black' }} color="text.secondary">
          {item.task}
        </Typography>
      </div>
      <div>
        <Checkbox
        // onChange={() => {
        //     setState({
        //         ...state,
        //         listItem: state.listItem.map((task) =>
        //             task.id === item.id ? { ...task, complete: !task.complete } : task
        //         ),
        //     });
        // }}
        ></Checkbox>
      </div>
    </Container>
  );
}
