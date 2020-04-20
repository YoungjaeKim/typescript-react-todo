import React, {ReactChild, ReactNode} from "react";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import './TodoListItem.scss';

export type Todo = {
    id: number;
    text: string;
    checked: boolean;
}

type Props = {
    todo: Todo;
    onRemove: Function;
    onToggle: Function;
}

const TodoListItem = ( {todo, onRemove, onToggle}: Props ) => {
    const {id, text, checked} = todo;
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                <MdCheckBoxOutlineBlank/>
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;
