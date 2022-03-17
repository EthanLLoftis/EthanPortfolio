import React from "react";
import "../styles/app.css";
import {Card, CardContent, ListItem, ListItemText} from "@material-ui/core";
import { List } from '@mui/material';
import Divider from '@mui/material/Divider';
import {Typography} from "@mui/material";

export default function CourseCard(){
    return (
        <div id='courseWrap' class='card'>
          <Card id="courseCard" style={{overflow: 'auto'}}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" color="white">
                            Courses
                </Typography>
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemText class='listText' primary='Web Design'/>
                  </ListItem>
                  <Divider style={{background: 'white'}} component="li"/>
                  <ListItem alignItems="flex-start" divider>
                    <ListItemText class='listText' primary='Object Oriented Programming'/>
                  </ListItem>
                  <Divider style={{background: 'white'}} component="li"/>
                  <ListItem alignItems="flex-start">
                    <ListItemText class='listText' primary='Advanced Algorithm Design'/>
                  </ListItem>
                  <Divider style={{background: 'white'}} component="li"/>
                  <ListItem alignItems="flex-start">
                    <ListItemText class='listText' primary='C Programming'/>
                  </ListItem>
                  <Divider style={{background: 'white'}} component="li"/>
                  <ListItem alignItems="flex-start">
                    <ListItemText class='listText' primary='Database Applications and Information Systems'/>
                  </ListItem>
                  <Divider style={{background: 'white'}} component="li"/>
                  <ListItem alignItems="flex-start">
                    <ListItemText class='listText' primary='Unix Operating Systems'/>
                  </ListItem>
                  <Divider style={{background: 'white'}} component="li"/>
                  <ListItem alignItems="flex-start">
                    <ListItemText class='listText' primary='Assembly Language'/>
                  </ListItem>
                  <Divider style={{background: 'white'}} component="li"/>
                  <ListItem alignItems="flex-start">
                    <ListItemText class='listText' primary='IOS App Development'/>
                  </ListItem>
                  <Divider style={{background: 'white'}} component="li"/>
                  <ListItem alignItems="flex-start">
                    <ListItemText class='listText' primary='Software Engineering'/>
                  </ListItem>
                </List>
              </CardContent>
          </Card>
        </div>
    );
}