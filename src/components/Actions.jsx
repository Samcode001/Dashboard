import React from "react";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RvHookupOutlinedIcon from "@mui/icons-material/RvHookupOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Box, Typography } from "@mui/material";
const Actions = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          //   gap: "1rem",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
          borderRadius: "2rem",
          width: "820px",
          height: "74px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // borderLeft: "1px solid gray",
          }}
        >
          <div>
            <LabelOutlinedIcon sx={{ fontSize: "20px" }} />
          </div>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            Create Indents
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <LocalShippingOutlinedIcon sx={{ fontSize: "20px" }} />
          </div>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            Add Vehicle
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <RvHookupOutlinedIcon sx={{ fontSize: "20px" }} />
          </div>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            Add Trailer
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <PersonOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
          </div>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            Add Driver
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <LocalShippingOutlinedIcon sx={{ fontSize: "20px" }} />
          </div>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            Add Indents
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Actions;
