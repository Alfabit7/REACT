import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./actions/themeAction.jsx";
import Button from '@mui/material/Button';

function SwitchTheme() {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch();

    React.useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (

        <div className="swithTheme">
            <p>Текущая тема {theme}</p>
            <Button variant={theme === 'light' ? 'contained' : 'outlined'} onClick={() => dispatch(toggleTheme())}>Изменить тему</Button>
        </div >
    );
}

export default SwitchTheme;

{/* <Provider store={store}>
<SwitchTheme />
</Provider> */}