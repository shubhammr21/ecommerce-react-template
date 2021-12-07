import Footer from '../../Footer/Footer'
import Layout1Topbar from './Layout1Topbar'
import { MatxSuspense } from 'app/components'
import Scrollbar from 'react-perfect-scrollbar'
import { styled, Box, useTheme } from '@mui/system'
import React from 'react'
import { ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Layout1Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    background: theme.palette.background.default,
}))



const StyledScrollBar = styled(Scrollbar)(() => ({
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
}))

const LayoutContainer = styled(Box)(({ width, secondarySidebar }) => ({
    height: '100vh',
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
    verticalAlign: 'top',
    marginLeft: width,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    marginRight: secondarySidebar.open ? 50 : 0,
}))

const Layout1 = () => {
    const secondarySidebar = {
        show: true,
        fixed: true,
        theme: 'whiteBlue', // View all valid theme colors inside MatxTheme/themeColors.js
    }
    const topbarTheme = "whiteBlue"
    console.log(topbarTheme);


    const sidenavWidth = '0px'
    const theme = useTheme()

    const layoutClasses = `theme-${theme.palette.type}`

    return (
        <Layout1Root className={layoutClasses}>

            <LayoutContainer
                width={sidenavWidth}
                secondarySidebar={secondarySidebar}
            >
                <ThemeProvider theme={topbarTheme}>
                    <Layout1Topbar fixed={true} className="elevation-z8" />
                </ThemeProvider>

                <StyledScrollBar>
                    <Box flexGrow={1} position="relative">
                        <MatxSuspense>
                            <Outlet />
                        </MatxSuspense>
                    </Box>
                    <Footer />
                </StyledScrollBar>
            </LayoutContainer>
        </Layout1Root>
    )
}

export default React.memo(Layout1)
