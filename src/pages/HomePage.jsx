import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, CardActions, Container, Typography } from "@mui/material";
import OrdersChart from "../components/OrderCharts.jsx";
import Actions from "../components/Actions.jsx";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const HomePage = () => {
  return (
    <>
      <Container
        sx={{ backgroundColor: "rgba(255,255,255,0.8)", display: "flex" }}
      >
        {/* -------------------------------- Right COntent ---------------------------------- */}

        <Box
          sx={{
            width: "1020px",
            height: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "2.2rem",
                textDecoration: "bolder",
                fontWeight: "600",
              }}
            >
              DashBoard
            </Typography>

            <Box
              sx={{
                display: "flex",
                // gap: "8px",
                justifyContent: "space-evenly",
                alignContent: "center",
              }}
            >
              <SearchIcon sx={{ PaddingOutlined: "1px" }} />
              <NotificationsNoneOutlinedIcon
                sx={{ borderLeft: "1px solid gray" }}
              />
              <MoreVertIcon sx={{}} />
            </Box>
          </Box>

          {/* --------------------- Charts Cards --------------------------- */}

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* <Cards /> */}
            <OrdersChart />
            <OrdersChart />
            <OrdersChart />
            <OrdersChart />
          </Box>

          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBlock: "1rem",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <span>Quick Actions</span>
            {/* <span>View All</span> */}
          </Typography>
          <Box>
            <Actions />
          </Box>

          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBlock: "1rem",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <span>High Priority alerts (14)</span>
            <span>View All</span>
          </Typography>
          {/* ---------------------- Priorties section ---------------------------- */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "384px", height: "146px" }}>
              <Box sx={{ display: "flex", position: "relative" }}>
                <Box sx={{ width: "20px", height: "20px" }}>
                  <AccountBoxIcon sx={{ fontSize: "2.4rem" }} color="primary" />
                </Box>
                <Box sx={{ position: "relative", left: "20px" }}>
                  <Typography sx={{ fontSize: "14px" }}>
                    Driver Raised Concern
                  </Typography>
                  <Typography sx={{ fontSize: "10px" }}>
                    <span>Load No : 12454,</span>
                    <span>Bill To : RoaDo demo Bangalore</span>
                  </Typography>
                  <span
                    style={{
                      fontSize: "12px",
                      position: "absolute",
                      top: "0px",
                      right: "-17px",
                    }}
                  >
                    13 Fab 24
                  </span>
                </Box>
              </Box>
              <Typography sx={{ fontSize: "12px", marginTop: "1rem" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                facilis. Ratione possimus consequatur vitae eos nisi expedita
                quas voluptatibus? Ipsam, ad.
              </Typography>

              <CardActions sx={{ textAlign: "left" }}>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Box>

            <Box sx={{ width: "384px", height: "146px" }}>
              <Box sx={{ display: "flex", position: "relative" }}>
                <Box sx={{ width: "20px", height: "20px" }}>
                  <AccountBoxIcon sx={{ fontSize: "2.4rem" }} color="primary" />
                </Box>
                <Box sx={{ position: "relative", left: "20px" }}>
                  <Typography sx={{ fontSize: "14px" }}>
                    Driver Raised Concern
                  </Typography>
                  <Typography sx={{ fontSize: "10px" }}>
                    <span>Load No : 12454,</span>
                    <span>Bill To : RoaDo demo Bangalore</span>
                  </Typography>
                  <span
                    style={{
                      fontSize: "12px",
                      position: "absolute",
                      top: "0px",
                      right: "-17px",
                    }}
                  >
                    13 Fab 24
                  </span>
                </Box>
              </Box>
              <Typography sx={{ fontSize: "12px", marginTop: "1rem" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                facilis. Ratione possimus consequatur vitae eos nisi expedita
                quas voluptatibus? Ipsam, ad.
              </Typography>

              <CardActions sx={{ textAlign: "left" }}>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Box>
          </Box>
        </Box>

        {/* -------------------- Left COntent ------------------------------- */}

        <Box sx={{ padding: "1rem", marginBottom: "1rem" }}>
          <Typography sx={{ fontSize: "16px" }}>
            Todays Highlights (14)
          </Typography>
          <span style={{ fontSize: "12px" }}>19 Mar 2024</span>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                width: "155px",
                height: "83px",
                outline: "1px solid black",
                padding: "8px",
              }}
            >
              <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
                Income
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#148714", fontWeight: "500" }}
              >
                100000 CAD
              </Typography>
              <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
                2 payments received
              </Typography>
            </Box>
            <Box
              sx={{
                width: "155px",
                height: "83px",
                outline: "1px solid black",
                padding: "8px",
              }}
            >
              <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
                Expenses
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#D04141", fontWeight: "500" }}
              >
                50000 CAD
              </Typography>
              <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
                5 payments paid
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBlock: "1rem",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <span>Completed Activities (14)</span>
            <span>View All</span>
          </Typography>
          <Box>
            <Typography
              sx={{
                color: "gray",
                fontSize: "12px",
                fontWeight: "400",
                outline: "1px solid gray",
                padding: "7px",
              }}
            >
              <span style={{ color: "#1A3875" }}>Gurpreet Singh</span> (Dispatch
              team) has created{" "}
              <span style={{ color: "black" }}>Load No. I-I-AAA-1325</span>
            </Typography>
            <Typography
              sx={{
                color: "gray",
                fontSize: "12px",
                fontWeight: "400",
                outline: "1px solid gray",
                padding: "7px",
              }}
            >
              <span style={{ color: "#1A3875" }}>Aman</span> (Driver) Picked Up
              goods at Location_Name for
              <span style={{ color: "black" }}>Load No. I-I-AAA-1325</span>
            </Typography>
            <Typography
              sx={{
                color: "gray",
                fontSize: "12px",
                fontWeight: "400",
                outline: "1px solid gray",
                padding: "7px",
              }}
            >
              <span style={{ color: "#1A3875" }}>Gurpreet Singh</span> (Dispatch
              team) has created{" "}
              <span style={{ color: "black" }}>Load No. I-I-AAA-1325</span>
            </Typography>
            <Typography
              sx={{
                color: "gray",
                fontSize: "12px",
                fontWeight: "400",
                outline: "1px solid gray",
                padding: "7px",
              }}
            >
              <span style={{ color: "black" }}>Load No. I-I-AAA-1325</span> will
              start added by{" "}
              <span style={{ color: "#1A3875" }}>Gurpreet Singh</span>{" "}
            </Typography>
          </Box>

          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBlock: "1rem",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <span>Scheduled Activities (14)</span>
            <span>View All</span>
          </Typography>

          <Box>
            <Typography
              sx={{
                color: "gray",
                fontSize: "12px",
                fontWeight: "400",
                outline: "1px solid gray",
                padding: "7px",
              }}
            >
              <span style={{ color: "#1A3875" }}>Gurpreet Singh</span> (Dispatch
              team) has created{" "}
              <span style={{ color: "black" }}>Load No. I-I-AAA-1325</span>
            </Typography>
            <Typography
              sx={{
                color: "gray",
                fontSize: "12px",
                fontWeight: "400",
                outline: "1px solid gray",
                padding: "7px",
              }}
            >
              <span style={{ color: "#1A3875" }}>Aman</span> (Driver) Picked Up
              goods at Location_Name for
              <span style={{ color: "black" }}>Load No. I-I-AAA-1325</span>
            </Typography>
            <Typography
              sx={{
                color: "gray",
                fontSize: "12px",
                fontWeight: "400",
                outline: "1px solid gray",
                padding: "7px",
              }}
            >
              <span style={{ color: "#1A3875" }}>Gurpreet Singh</span> (Dispatch
              team) has created{" "}
              <span style={{ color: "black" }}>Load No. I-I-AAA-1325</span>
            </Typography>
            <Typography
              sx={{
                color: "gray",
                fontSize: "12px",
                fontWeight: "400",
                outline: "1px solid gray",
                padding: "7px",
              }}
            >
              <span style={{ color: "black" }}>Load No. I-I-AAA-1325</span> will
              start added by{" "}
              <span style={{ color: "#1A3875" }}>Gurpreet Singh</span>{" "}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
