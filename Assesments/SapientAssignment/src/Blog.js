import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
const Blog = (props) => {
  return (
    <Paper elevation={3} style={{ padding: "10px", marginBottom: "10px" }}>
      <h3>{`"${props.blog.title}"`}</h3>
      {`Sent By ${props.blog.author}`}
    </Paper>
  );
};
export default Blog;
