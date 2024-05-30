import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Box, Typography, Paper } from "@mui/material";

const data = [
  { name: "Upcoming", value: 50, color: "#4FD2B5" },
  { name: "Ongoing", value: 30, color: "#FFCB49" },
  { name: "Completed", value: 20, color: "#7464FF" },
];

const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);

const CustomLegend = ({ data }) => (
  <Box>
    {data.map((entry, index) => (
      <Box
        key={`legend-${index}`}
        display="flex"
        alignItems="center"
        mb={1}
        sx={{
          backgroundColor: entry.color,
          padding: "5px 10px",
          borderRadius: "0.8rem",
          boxShadow: "inset 140px -0px 1em 0.5em rgba(255,255,255,0.6)",
          //   width: "max-content",
        }}
      >
        {/* <Box
          sx={{
            width:"max-content",
            // height: 20,
            backgroundColor: entry.color,
            borderRadius: "50%",
            mr: 1,
            outline:"1px solid red"
          }}
        /> */}
        <Typography variant="body2" sx={{ fontWeight: "500" }}>
          {entry.name}
        </Typography>
        <Box ml="auto">
          <Typography variant="body2">{entry.value}</Typography>
        </Box>
      </Box>
    ))}
  </Box>
);

const OrdersChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <Paper elevation={3} sx={{ padding: 2, width: 300 }}>
      <Typography variant="h6" gutterBottom>
        Orders
      </Typography>
      <ResponsiveContainer
        width="100%"
        height={150}
        style={{ marginBottom: "5px" }}
      >
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#676666
            "
            fontSize="12px"
            fontWeight="400"
          >
            Total
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#000000"
            fontSize="16px"
            fontWeight="500"
          >
            123456
          </text>
        </PieChart>
      </ResponsiveContainer>
      <CustomLegend data={data} />
    </Paper>
  );
};

export default OrdersChart;
