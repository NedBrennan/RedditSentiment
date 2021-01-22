import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'

const post = (props) => {
    return (
        <Grid
        key={props.post.id}
        container
        item
        xs={3}
        spacing={1}
        justify="center"
      >
            <Card>
                <CardContent>
                    <Typography>
                        {props.post.title}    
                    </Typography>   
                    <Typography>
                        {props.post.selftext}    
                    </Typography>  
                </CardContent>
            </Card>
        </Grid>
    )
}

export default post