import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { IconButton, Tooltip } from '@mui/material';


export default function Footer(){

    return(
        <div id='footerWrap'>
            <h1>
                <a target='_blank' rel="noreferrer" href="mailto:ethan.l.loftis@gmail.com?
                subject=subject text">
                    Ethan.L.Loftis@gmail.com
                </a>
            </h1>
            <span id='icons'>
                <Tooltip title='GitHub'>
                    <IconButton aria-label='GitHub.com' onClick={() => window.open('https://github.com/EthanLLoftis')}>
                        <GitHubIcon id='git' sx={{ fontSize: 40}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='LinkedIn'>
                    <IconButton aria-label='LinkedIn.com' onClick={() => window.open('https://linkedin.com/in/EthanLoftis')}>
                        <LinkedInIcon id='linked' sx={{ fontSize: 40}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Resume'>
                    <IconButton onClick={() => window.open('https://docs.google.com/document/d/1IzGjaKoam7e_oFzjrJSVKUf_O3_EYah__Bds-Gjm8wA/edit?usp=sharing')}>
                            <DownloadIcon id='resume' sx={{ fontSize: 40}}/>
                    </IconButton>
                </Tooltip>
            </span>
            <br/>
            <span id='copyRight'>Created By Ethan Loftis</span>
        </div>
    );
}