import React from 'react'
import { styled, Box } from '@mui/system'
import ShoppingCart from '../../ShoppingCart/ShoppingCart'
import { themeShadows } from 'app/components/MatxTheme/themeColors'
import { topBarHeight } from 'app/utils/constant'


const TopbarRoot = styled('div')(({ theme }) => ({
    top: 0,
    zIndex: 96,
    transition: 'all 0.3s ease',
    boxShadow: themeShadows[8],
    height: topBarHeight,
}))

const TopbarContainer = styled(Box)(({ theme }) => ({
    padding: '8px',
    paddingLeft: 18,
    paddingRight: 20,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 14,
        paddingRight: 16,
    },
}))


const Layout1Topbar = () => {
    return (
        <TopbarRoot>
            <TopbarContainer>
                <Box display="flex">
                </Box>
                <Box display="flex" alignItems="center">
                    <ShoppingCart />
                </Box>
            </TopbarContainer>
        </TopbarRoot>
    )
}

export default React.memo(Layout1Topbar)
