import React from "react";
import "../styles/app.css";
import {Card, CardContent, ListItem, ListItemText, ListItemIcon} from "@material-ui/core";
import { List } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import {Typography} from "@mui/material";

export default function TechCard(props){
    return (
        <div id='techWrap' class='card'>
          <Card id="techCard"  style={{overflow: 'auto'}}>
              <CardContent>
                  <Typography gutterBottom variant="h4" component="div" color="white">
                      Technologies
                  </Typography>
                    <List>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='C/C++'/>
                        </ListItem>
                        <ListItem alignItems="flex-start" divider>
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='jdk 8'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='html'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='css'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='javascript'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='jQuery'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='mySQL'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='php'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='git'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='React'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='intelliJ'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='gradle'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='maven'/>
                        </ListItem>
                        <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CircleIcon style={{color: 'white', fontSize: 12}}/>
                        </ListItemIcon>
                            <ListItemText class='listText' primary='ASM'/>
                        </ListItem>
                    </List>
              </CardContent>
          </Card>
        </div>
    );
}