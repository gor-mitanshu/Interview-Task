import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const AddVisitors = () => {
  const [formData, setFormData] = useState({
    project_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    current_locality: "",
    occupation: "",
    other_occupation: "",
    source_type: "",
    other_source_type: "",
    budget_from: "",
    budget_to: "",
    inquiry_for: "",
    bhk: "",
    remarks: "",
    priority: "",
    interested_property: "",
    brokers_id: "",
    user_id: "",
    title: "",
    date: "",
    time: "",
    assign_to: "",
    mobile_code: "",
    phone2: "",
    Inquiry_date: "",
    dob: "",
    anniversary_date: "",
    cast_type: "",
    project_status_type: "",
    source_type_sub_category: "",
    visitor_id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Project ID"
              name="project_id"
              value={formData.project_id}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Current Locality"
              name="current_locality"
              value={formData.current_locality}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Other Occupation"
              name="other_occupation"
              value={formData.other_occupation}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Source Type"
              name="source_type"
              value={formData.source_type}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Other Source Type"
              name="other_source_type"
              value={formData.other_source_type}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Budget From"
              name="budget_from"
              value={formData.budget_from}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Budget To"
              name="budget_to"
              value={formData.budget_to}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Inquiry For"
              name="inquiry_for"
              value={formData.inquiry_for}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="BHK"
              name="bhk"
              value={formData.bhk}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              minRows={3}
              fullWidth
              label="Remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Priority"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Interested Property"
              name="interested_property"
              value={formData.interested_property}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Brokers ID"
              name="brokers_id"
              value={formData.brokers_id}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="User ID"
              name="user_id"
              value={formData.user_id}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Assign To"
              name="assign_to"
              value={formData.assign_to}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Mobile Code"
              name="mobile_code"
              value={formData.mobile_code}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Phone 2"
              name="phone2"
              value={formData.phone2}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Inquiry Date"
              name="Inquiry_date"
              value={formData.Inquiry_date}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="DOB"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Anniversary Date"
              name="anniversary_date"
              value={formData.anniversary_date}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Cast Type"
              name="cast_type"
              value={formData.cast_type}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Project Status Type"
              name="project_status_type"
              value={formData.project_status_type}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Source Type Sub Category"
              name="source_type_sub_category"
              value={formData.source_type_sub_category}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Visitor ID"
              name="visitor_id"
              value={formData.visitor_id}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddVisitors;
