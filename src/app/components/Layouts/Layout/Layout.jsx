import Footer from '../../Footer/Footer'
import LayoutTopbar from './LayoutTopbar'
import { AppSuspense } from 'app/components'
import Scrollbar from 'react-perfect-scrollbar'
import { styled, Box, useTheme } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutRoot = styled(Box)(({ theme }) => ({
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

const Layout = () => {
    const secondarySidebar = {
        show: true,
        fixed: true,
        theme: 'whiteBlue', // View all valid theme colors inside MUI Theme/themeColors.js
    }
    const topbarTheme = {
        theme: 'whiteBlue', // View all valid theme colors inside MUI Theme/themeColors.js  // View all valid theme colors inside MUI Theme/themeColors.js  
        fixed: true,
        show: true,
    }
    console.log(topbarTheme);


    const sidenavWidth = '0px'
    const theme = useTheme()

    const layoutClasses = `theme-${theme.palette.type}`

    return (
        <LayoutRoot className={layoutClasses}>

            <LayoutContainer
                width={sidenavWidth}
                secondarySidebar={secondarySidebar}
            >

                <LayoutTopbar fixed={true} className="elevation-z8" />


                <StyledScrollBar>
                    <Box flexGrow={1} position="relative">
                        <AppSuspense>
                            <Outlet />
                        </AppSuspense>
                    </Box>
                    <Footer />
                </StyledScrollBar>
            </LayoutContainer>
        </LayoutRoot>
    )
}

export default React.memo(Layout)
