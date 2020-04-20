import React, {ReactNode} from "react";
import './TodoTemplate.scss';

/**
 * resolve undefined prop type; https://stackoverflow.com/a/55372465/361100
 */
interface IProps {
    children: ReactNode;
    // any other props that come into the component
}

const TodoTemplate = ({ children }: IProps) => {
    return(
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;
