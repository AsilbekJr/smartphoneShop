import React from 'react'
import {
    DarkLightModed,    
    MaterialUISwitch,
    MyTopNavbar,
    TopContact,
    TopContactItem,
  } from "./../../styles/Navbar";
  import FormControlLabel from "@mui/material/FormControlLabel";
import { Telegram, Call } from "@mui/icons-material";
import { Divider, Typography } from '@mui/material';
const TopNavbar = () => {
  return (
    <>
     <MyTopNavbar>
          <DarkLightModed>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }}  />}
            />
          </DarkLightModed>
          <TopContact>
            <TopContactItem>
              <Telegram fontSize="small" />
              <Typography
                sx={{
                  fontSize: "14px",
                  padding: "0 0 0 5px",
                  fontWeight: "700",
                }}
                variant="h8"
              >
                @MrDeveloper
              </Typography>
            </TopContactItem>
            <Divider color={"white"} orientation="vertical" flexItem />
            <TopContactItem>
              <Call fontSize="small" />
              <Typography
                sx={{
                  fontSize: "14px",
                  padding: "0 0 0 5px",
                  fontWeight: "700",
                }}
                variant="h8"
              >
                +998997397157
              </Typography>
            </TopContactItem>
          </TopContact>
        </MyTopNavbar>
    </>
  )
}

export default TopNavbar