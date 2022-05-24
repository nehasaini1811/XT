import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [data, setData] = useState({
    currentIndex: 1,
    count: 0,
    pageSize: 20
  });

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=react")
      .then((res) => res.json())
      .then((output) => {
        //updatedOutput = output.filter()
        setBlogs(output?.hits);
      });
  }, []);
  return blogs.map((blog) => <Blog blog={blog} />);
};
export default BlogList;
