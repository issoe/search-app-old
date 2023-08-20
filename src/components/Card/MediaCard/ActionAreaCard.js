import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const myText = require('./text.jpg')
const myImage = require('./image.jpg')

export default function ActionAreaCard({ name, mode }) {

    const renderContent = () => {
        if (mode === 'text') {
            return (
                <CardMedia
                    component="img"
                    height="140"
                    image={myText}
                    alt="green iguana"
                />
            );
        } else if (mode === 'image') {
            return (
                <CardMedia
                    component="img"
                    height="140"
                    image={myImage}
                    alt="green iguana"
                />
            );
        }
        return null; // Render nothing if mode is not recognized
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                {renderContent()}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}