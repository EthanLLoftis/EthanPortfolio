import React from "react";
import "../styles/app.css";
import {Card, CardContent, ListItem, ListItemText, ListItemIcon} from "@material-ui/core";
import { List } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
// import Divider from '@mui/material/Divider';
import {Typography} from "@mui/material";

export default function ProjCard(props){
    return (
        <div id='projWrap' class='card'>
            <Card id="projCard">
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="white">
                        Projects
                    </Typography>
                    <ListItem alignItems="flex-start">
                        <ListItemText class='listText' primary='3D Space Explorer | Tiger Hacks 2021 Hackathon 1st Place'/>
                    </ListItem>
                        <List>
                            <ListItem component='a' href="https://github.com/EthanLLoftis/SolarExplorer" target='_blank'>
                                <ListItemIcon>
                                    <CircleIcon style={{color: 'white', fontSize: 12}}/>
                                </ListItemIcon>
                                <ListItemText style={{color: 'white'}} primary='Click Here To View Repository'/>
                            </ListItem>
                        </List>
                </CardContent>
            </Card>
        </div>
    );
}