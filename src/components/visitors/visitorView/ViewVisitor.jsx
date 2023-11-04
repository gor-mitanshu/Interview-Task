import React, { useEffect, useState } from "react";
import { Typography, Grid, Paper, Box, Button } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ViewVisitor = () => {
  const [visitor, setVisitor] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getVisitor = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/visitors_details`,
        { visitor_id: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!!res) {
        setVisitor(res.data.data);
      }
    };
    getVisitor();
  }, [id]);

  const handleBack = () => {
    navigate("/visitors");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Visitor Details
      </Typography>
      <Button
        variant="contained"
        sx={{ marginBottom: "10px" }}
        color="primary"
        onClick={handleBack}
      >
        Back
      </Button>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6">
              Visitor ID: {visitor?.visitor_id}
            </Typography>
            <Typography variant="h6">
              Project ID: {visitor?.project_id}
            </Typography>
            <Typography variant="h6">
              First Name: {visitor?.first_name}
            </Typography>
            <Typography variant="h6">
              Last Name: {visitor?.last_name}
            </Typography>
            <Typography variant="h6">Phone: {visitor?.phone}</Typography>
            <Typography variant="h6">
              Occupation: {visitor?.occupation}
            </Typography>
            <Typography variant="h6">Priority: {visitor?.priority}</Typography>
            <Typography variant="h6">Email: {visitor?.email}</Typography>
            <Typography variant="h6">
              Other Occupation: {visitor?.other_occupation}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">
              Source Type: {visitor?.source_type}
            </Typography>
            <Typography variant="h6">
              Other Source Type: {visitor?.other_source_type}
            </Typography>
            <Typography variant="h6">
              Budget From: {visitor?.budget_from}
            </Typography>
            <Typography variant="h6">
              Budget To: {visitor?.budget_to}
            </Typography>
            <Typography variant="h6">
              Inquiry For: {visitor?.inquiry_for}
            </Typography>
            <Typography variant="h6">BHK: {visitor?.bhk}</Typography>
            <Typography variant="h6">Remarks: {visitor?.remarks}</Typography>
            <Typography variant="h6">
              Interested Property: {visitor?.interested_property}
            </Typography>
            <Typography variant="h6">
              Brokers ID: {visitor?.brokers_id}
            </Typography>
            <Typography variant="h6">User ID: {visitor?.user_id}</Typography>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6">Title: {visitor?.title}</Typography>
              <Typography variant="h6">Date: {visitor?.date}</Typography>
              <Typography variant="h6">Time: {visitor?.time}</Typography>
              <Typography variant="h6">
                Assign To: {visitor?.assign_to}
              </Typography>
              <Typography variant="h6">
                Mobile Code: {visitor?.mobile_code}
              </Typography>
              <Typography variant="h6">Phone 2: {visitor?.phone2}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                Inquiry Date: {visitor?.Inquiry_date}
              </Typography>
              <Typography variant="h6">DOB: {visitor?.dob}</Typography>
              <Typography variant="h6">
                Anniversary Date: {visitor?.anniversary_date}
              </Typography>
              <Typography variant="h6">
                Cast Type: {visitor?.cast_type}
              </Typography>
              <Typography variant="h6">
                Project Status Type: {visitor?.project_status_type}
              </Typography>
              <Typography variant="h6">
                Source Type Sub Category: {visitor?.source_type_sub_category}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default ViewVisitor;
