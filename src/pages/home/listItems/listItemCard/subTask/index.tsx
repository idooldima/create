import { useState } from "react";
import { ItemType } from "../../../../../store/itemLists/types";

type Props = { item: ItemType };

export default function SubTask({ item }: Props) {
    const [state, setState] = useState(item);
    return (
        <div></div>
    )
}