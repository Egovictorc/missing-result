import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { TPost } from "../../types";

const Blog: React.FC<TPost> = ( {slug, frontmatter}) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a style={{ padding: ".5rem", display: "block" }}>
        <Typography variant="body2">{frontmatter.title}</Typography>
        <small>{frontmatter.date}</small>
      </a>
    </Link>
  );
};

export default Blog;
