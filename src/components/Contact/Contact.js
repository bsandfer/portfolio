import { Box, Grid, Typography } from "@mui/material"
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

          <Grid item>
              <div>
                <div>
                  <textarea
                    ref={(textarea) => this.textArea = textarea}
                    value="bSandfer@gmail.com"
                  />
                </div>
                <div>
                  <button onClick={() => this.copyCodeToClipboard()}>
                    Copy to Clipboard
                  </button>
                  {
                    this.state.copySuccess ?
                    <div style={{"color": "green"}}>
                      Success!
                    </div> : null
                  }
                </div>
              </div>
          </Grid>

        </Grid>

      </Box>
    )
  }
}