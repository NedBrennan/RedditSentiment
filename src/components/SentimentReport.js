import React from 'react'
import { Accordion, AccordionSummary, Grid, Typography } from '@material-ui/core'

const Sentiment = (props) => {
    return (
        <Grid
        key={props.Sentiment.id}
        container
        item
        xs={3}
        spacing={1}
      >
          <Accordion>
              <AccordionSummary>
                  <Typography variant='h5'>
                      {props.Sentiment.sentiment}
                  </Typography>
              </AccordionSummary>
          </Accordion>
          </Grid>
    )
}

export default Sentiment