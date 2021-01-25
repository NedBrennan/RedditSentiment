import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Grid, Typography } from '@material-ui/core'

const post = (props) => {
    return (
        <Grid
        key={props.post.id}
        container
        item
        xs={9}
        spacing={1}
      >
            <Accordion>
                <AccordionSummary>
                    <Typography variant='h6'>
                        {props.post.title}    
                    </Typography>   
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.post.selftext}    
                    </Typography>  
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}

export default post