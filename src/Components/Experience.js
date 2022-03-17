import React from "react";
import "../styles/app.css";
import {Card, CardContent, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { List } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import {Typography} from "@mui/material";
// import Divider from '@mui/material/Divider';

export default function ExpCard(props){
    return (
        <div id="expWrap" class='card'>
            <Card id="expCard" style={{overflow: 'auto'}}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="white">
                        Experience
                    </Typography>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemText class='listText' primary='Software Developer Intern Summer 2021 | ABC Fitness Solutions'/>
                        </ListItem>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleIcon style={{color: 'white', fontSize: 12}}/>
                                </ListItemIcon>
                                <ListItemText class='listText' primary='Worked with my mentor and project manager to redesign an event enrollment app.'/>
                            </ListItem>
                            <ListItem>
                            <ListItemIcon>
                                    <CircleIcon style={{color: 'white', fontSize: 12}}/>
                                </ListItemIcon>
                                <ListItemText class='listText' primary='Used React, javascript, html, css, and other React frameworks to make a dynamic web app.'/>
                            </ListItem>
                        </List>
                        <ListItem alignItems="flex-start">
                            <ListItemText class='listText' primary='Software Engineer Intern Summer 2022 | Hy-Vee'/>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </div>
    );
}