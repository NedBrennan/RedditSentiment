import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core'

const Sentiment = (props) => {
    return (
        <Grid
        key={props.Sentiment.id}
        container
        item
        xs={3}
        spacing={1}
      >
          <Card>
              <Box width='100px'>

              </Box>
              <CardContent display='flex' justifycontent='center'>
                  <Typography variant='h5'>
                      {props.Sentiment.sentiment}
                  </Typography>
              </CardContent>
          </Card>
          </Grid>
    )
}

export default Sentiment