import React from "react";
import { Box, Typography } from "@mui/material";
import { Skills, personalInfo, education, Exprience } from "./dummyData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// also show salary
// resume pdf download

export default function HomePage() {
  const navigate = useNavigate();
  const isLoggedIn = window.localStorage.getItem("token");

  return (
    <Box style={{ padding: "2% 5%" }}>
      <div className="App">
        <motion.h1
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
          style={{ color: "red", fontSize: "24px" }}
        >
          In Progress. For any issue and updated Info, Please Download Resume.
        </motion.h1>
      </div>
      <Typography sx={{ fontWeight: "bold", fontSize: "54px" }}>
        Rahul Sharma
      </Typography>
      <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
        MERN Full Stack Developer
      </Typography>
      <Box>
        {personalInfo?.map((item) => (
          <Box className="d-flex">
            <Typography
              style={{
                textAlign: "end",
                width: "100px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {item?.field}
            </Typography>
            <Typography
              style={{
                textAlign: "start",
                marginLeft: "20px",
                fontSize: "18px",
              }}
            >
              {["LinkedIn", "Git"]?.includes(item?.field) ? (
                <a href={item?.info} target="_blank">
                  {item?.info}
                </a>
              ) : item?.field === "Contact" && !isLoggedIn ? (
                <Box
                  onClick={() => navigate("/")}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  Login Required
                </Box>
              ) : (
                item?.info
              )}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box>
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            borderBottom: "2px solid black",
            maxWidth: "20%",
            textAlign: "left",
            margin: "15px auto 15px 0px",
          }}
        >
          Industry Experience
        </Typography>

        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "start",
            fontSize: "18px",
          }}
        >
          {Exprience?.map((item) => {
            return (
              <Box className="mt-2 mb-2">
                <Box className="d-flex ">
                  <Typography className="mr-3 font-weight-bold">
                    {item?.organization}
                  </Typography>
                  <Typography className="text-success font-weight-bold">
                    {item?.duration}
                  </Typography>
                </Box>
                <Box className="ml-3 text-left">
                  <Typography>
                    <span className="font-weight-bold">Role:</span>
                    {item?.status}
                  </Typography>
                  <Typography className="font-weight-bold">Skills:</Typography>
                  <ul>
                    {item?.responsibilities?.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box>
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            borderBottom: "2px solid black",
            maxWidth: "5%",
            textAlign: "left",
            margin: "15px auto 15px 0px",
          }}
        >
          Skills
        </Typography>

        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {Skills?.map((item) => {
            return (
              <Box
                style={{
                  width: "200px",
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={item?.imageLink}
                  alt={item?.name}
                  style={{ width: "50px" }}
                />
                <Typography>{item?.name}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box>
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            borderBottom: "2px solid black",
            maxWidth: "18%",
            textAlign: "left",
            margin: "15px auto 15px 0px",
          }}
        >
          Education Qualification
        </Typography>
        {education?.map((item) => (
          <>
            <Box className="d-flex">
              <Typography
                style={{
                  marginRight: "10px",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {item?.education}
              </Typography>
              <Typography
                style={{
                  marginRight: "20px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "grey",
                }}
              >
                {" "}
                {item?.year}
              </Typography>
            </Box>
            <ul>
              <li style={{ textAlign: "left", fontSize: "18px" }}>
                {item?.achievement[0]}
              </li>
            </ul>
            {/* <Typography></Typography> */}
          </>
        ))}
      </Box>
    </Box>
  );
}
