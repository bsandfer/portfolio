import { Box, Button, FormControl, Grid, Typography } from "@mui/material"
import React, { Component } from "react"

export default class YourComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copySuccess: false
    }
  }

  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
    this.setState({copySuccess: true})
  }

  render() {
    return (
      <Box margin={3}>
        
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="h3">Contact</Typography>
          </Grid>
        </Grid>

        <br></br>

        <Grid container justifyContent="center" spacing={3} padding={3}>

        <Grid item xs={10} md={8} lg={6}>
            <FormControl fullWidth>

              <textarea
                ref={(textarea) => this.textArea = textarea}
                value="bSandfer@gmail.com"        
              /> 
              <br></br>

              <Button variant="contained" onClick={() => this.copyCodeToClipboard()}>
                Copy my Email to clipboard
              </Button>
                  {
                    this.state.copySuccess ?
                    <Box style={{"color": "green"}}>
                      Success!
                    </Box> : null
                  }

            </FormControl>
          </Grid>

        </Grid>

      </Box>
    )
  }
}