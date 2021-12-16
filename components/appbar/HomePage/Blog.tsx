import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Blog: React.FC<{
    title: string;
    date: string
}> = ({ title, date }) => {
  return (
    <Link href={`/blog/${title}`} passHref>
      <a style={{ padding: ".5rem", display: "block" }}>
        <Typography variant="body2">{title}</Typography>
        <small>{date}</small>
      </a>
    </Link>
  );
};

export default Blog;
