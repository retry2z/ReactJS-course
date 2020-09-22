import React from "react";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Language } from '@material-ui/icons';

import { useIntl } from "react-intl";
import { supportedLangs } from "../../common/i18n/";


const LangSwitcher = ({ short }) => {
    const { locale: lang } = useIntl(); // get the current set lang from Provider
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                color="inherit"
                startIcon={!short && <Language />}
                aria-controls="lang-menu"
                onClick={handleClick}
            >

                {short ? (lang).toLocaleUpperCase() : supportedLangs[lang]}
            </Button>

            <Menu
                id="lang-menu"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleClose}
            >
                {
                    Object.keys(supportedLangs).map(langCode => (
                        <a key={langCode} href={`/${langCode}`}>
                            <MenuItem>
                                <Typography variant="body1">
                                    {short ? (langCode).toLocaleUpperCase() : supportedLangs[langCode]}
                                </Typography>
                            </MenuItem>
                        </a>
                    ))
                }
            </Menu>
        </>
    );
}

export default LangSwitcher