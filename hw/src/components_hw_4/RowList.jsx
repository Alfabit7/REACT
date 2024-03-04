import { Children } from 'react';

function RowList({ children }) {
    return (
        <div className="RowList">
            {Children.map(children, child =>
                <div className="Row">
                    {child}
                </div>
            )}
        </div>
    );
}
export default RowList;