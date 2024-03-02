import { useState } from "react"
import {
  Grommet,
  grommet,
  Grid,
  Header,
  Page,
  PageContent,
  PageHeader,
  ResponsiveContext,
  Text,
  Button,
  Box,
} from 'grommet'
import { deepMerge } from "grommet/utils"
import { Moon, Sun } from "grommet-icons"
import AppBar from './components/AppBar'
import CardTemplate from "./components/CardTemplate"

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
})

function App() {
  const [dark, setDark] = useState(false)

  return (
    <Grommet theme={theme} themeMode={dark ? "dark" : "light"} full>
      <Page>
        <AppBar>
          <Text size="Large">Michele Lonergan</Text>
          <Button
            a11yTitle={dark ? 'Switch to Light Mode' : 'Switch to dark mode'}
            icon={dark ? <Moon /> : <Sun />}
            onClick={() => setDark(!dark)}
            tip={{
                content: (
                  <Box
                    pad="small"
                    round="small"
                    background={dark ? "dark-1" : "light-3"}
                  >
                    {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  </Box>
                ),
                plain: true,
              }}
          />
        </AppBar>
        <PageContent>
          <PageHeader title="Welcome to Grommet!" />
          <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
            <CardTemplate title={"Card 1"} />
            <CardTemplate title={"Card 2"} />
            <CardTemplate title={"Card 3"} />
          </Grid>
        </PageContent>
      </Page>
    </Grommet>
  )
}

export default App
