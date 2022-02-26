import { styled, Button as MuiButton } from '@mui/material';

// TODO : Figure out how to make styled components in TypeScript
export const Button = styled(MuiButton)(({ theme }) => ({
    // color: theme.palette.custom.black,
    // backgroundColor: theme.palette.custom.main,
    // fontWeight: 700,
    // '&:hover':{
    //     backgroundColor: theme.palette.secondary.dark,
    //     color: theme.palette.mode === 'light'
    //         ? theme.palette.custom.white
    //         : theme.palette.custom.black
    // }
}));