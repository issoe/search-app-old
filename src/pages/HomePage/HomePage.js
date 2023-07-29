import Link from "@mui/material/Link";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GeneralHeader from "../../components/header/GeneralHeader";
import DefaultFooter from "../../components/footer/DemoFooter";
import ResponsiveAppBar from "../../components/header/ResponsiveAppBar";
// import { CardMedia } from "@mui/material";
import ActionAreaCard from "../../components/Card/MediaCard/ActionAreaCard";
// import { CardMedia } from "@mui/material";
// import { Grid } from "@mui/material";
import Grid from '@mui/material/Grid'; // Grid version 1
import { Container } from "@mui/material";



export default function HomePage() {
    return (
        <div style={{ height: "100vh" }}>
            {/* <GeneralHeader /> */}
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                // alignItems="center"
                style={{ height: "100%" }}
            >
                <ResponsiveAppBar />
                <Container fixed >
                    <Box sx={{ height: '100%' }}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <Link href="/text" >
                                <ActionAreaCard name={"Search by text"} />
                            </Link>
                            <Link href="/image" >
                                <ActionAreaCard name={"Search by image"} />
                            </Link>
                        </Grid>
                    </Box>
                </Container>
                <DefaultFooter />
            </Grid>
        </div>
    )
}