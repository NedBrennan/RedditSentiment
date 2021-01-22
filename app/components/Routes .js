import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Box, Button, AppBar} from '@material-ui/core'
import TickerSubmission from './TickerSubmission'

const Routes = () => {
    return (
        <Router>
        <Box>
            <AppBar>
                <Button href={'/'}>
                    Home
                </Button>
            </AppBar>
        </Box>
        <Box paddingTop='60px'>
            <Switch>
                <Route path='/' component={TickerSubmission} />
            </Switch>
        </Box>
        </Router>
    )
}

export default Routes