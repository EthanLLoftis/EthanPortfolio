import React from 'react';
import "../styles/app.css";
import {AppBar} from '@material-ui/core';
import {Button, ButtonGroup, ThemeProvider, Toolbar} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import $ from 'jquery';

import {
    showAbout,
    showCourses,
    showExp,
    showProj,
    showTech,
} from '../APIs/navFunctions';

export default function Navigation() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#212121'
            }
        }
    });

    $(function() {
        $('#bioWrap').show();
        $('#courseWrap').hide();
        $('#techWrap').hide();
        $('#expWrap').hide();
        $('#projWrap').hide();
    });

    return (
        <AppBar id="navBar" position="fixed">
            <ThemeProvider theme={theme}>
                <Toolbar disableGutters>
                        <ButtonGroup id='navButtons' size='large' variant='text' color='primary'>
                            <Button onClick={showAbout}>About</Button>
                            <Button onClick={showCourses}>Courses</Button>
                            <Button onClick={showTech}>Tech</Button>
                            <Button onClick={showExp}>Experience</Button>
                            <Button onClick={showProj}>Projects</Button>
                        </ButtonGroup>
                </Toolbar>
            </ThemeProvider>
        </AppBar>
    );
}