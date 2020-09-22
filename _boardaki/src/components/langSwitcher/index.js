import React from "react";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { useIntl } from "react-intl";
import { supportedLangs } from "../../common/i18n/";


export default function LangSwitcher() {
    const { locale: lang } = useIntl(); // get the current set lang from Provider
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Button aria-controls="lang-menu" aria-haspopup="true" onClick={handleClick}>
                {supportedLangs[lang]}
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
                                    {supportedLangs[langCode]}
                                </Typography>
                            </MenuItem>
                        </a>
                    ))
                }
            </Menu>
        </>
    );
}

