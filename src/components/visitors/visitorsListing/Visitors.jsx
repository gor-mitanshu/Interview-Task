import React, { useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import { PersonAddAlt, Visibility } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Visitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenWithQuotes = localStorage.getItem("token");
        const tokenParts = tokenWithQuotes.split('"');
        const token = tokenParts[1];

        const response = await axios.post(
          `${process.env.REACT_APP_API}/api/visitors_listening`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && response.data.data) {
          setVisitors(response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "first_name",
      headerName: "First Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "last_name",
      headerName: "Last Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Inquiry_date",
      headerName: "Inquiry Date",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "header",
      description: "Actions",
      flex: 1,
      type: "actions",
      headerAlign: "center",
      align: "center",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Visibility color={"primary"} />}
          label="Delete"
          onClick={() => {
            navigate(`/visitors/visitor/${params.row.visitor_id}`);
          }}
        />,
      ],
    },
  ];
  const rows = visitors.map((visitor, key) => ({
    id: key + 1,
    visitor_id: visitor.id,
    project_id: visitor.project_id,
    first_name: visitor.first_name,
    last_name: visitor.last_name,
    phone: visitor.phone,
    occupation: visitor.occupation,
    priority: visitor.priority,

    email: visitor.email,
    phone_2: visitor.phone_2,
    Inquiry_date: visitor.Inquiry_date,
  }));

  return (
    <div>
      <Typography variant="h3" color="black" gutterBottom>
        Visitors
      </Typography>
      <Link to="/addvisitors">
        <Button
          variant="contained"
          color="primary"
          startIcon={<PersonAddAlt />}
          sx={{ marginBottom: "16px" }}
        >
          Add a Visitor
        </Button>
      </Link>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            density="comfortable"
            pageSize={7}
            components={{
              Toolbar: GridToolbar,
            }}
            scroll={{ x: true }}
          />
        </div>
      )}
    </div>
  );
};

export default Visitors;
