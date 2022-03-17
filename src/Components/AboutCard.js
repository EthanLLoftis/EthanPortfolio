import React from "react";
import "../styles/app.css";
import ethanImage from '../images/Bio.JPG';
import {Card, CardMedia, CardContent} from "@material-ui/core";
import {Typography} from "@mui/material";

export default function BioCard() {
    return (
        <div id='bioWrap'>
            <Card id="bioCard">
                    <CardMedia component="img"
                    height='430'
                    image={ethanImage}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="white">
                            Ethan Loftis
                        </Typography>
                        <Typography variant="body" color='white'>
                            Computer Science student at the University of Missouri-Columbia
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    );
}