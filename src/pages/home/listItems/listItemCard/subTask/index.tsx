import { Checkbox, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { ItemType, TaskType } from '../../../../../store/itemLists/types';
import { style } from './subTask.styles';

type Props = { item: TaskType, onChange: (subTask: TaskType) => void };

export default function SubTask({ item, onChange }: Props) {

    return (
        <Container sx={style.container}>
            <div>
                <Typography sx={{ color: item.complete ? '#d2d2d2 ' : 'black' }} color="text.secondary">
                    {item.task}
                </Typography>
            </div>
            <div>
                <Checkbox
                    onChange={() => onChange({ ...item, complete: !item.complete })}
                ></Checkbox>
            </div>
        </Container >
    );
}
