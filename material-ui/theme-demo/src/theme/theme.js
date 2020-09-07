import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = (isDark) => {

    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: deepOrange,
            secondary: green,
        },
    });

    return theme
}


export default theme