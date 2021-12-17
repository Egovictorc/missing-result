import React from "react";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
//node modules
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ParsedUrlQuery } from "querystring";
import {marked} from "marked"

import Layout from "../../components/Layout";
import { Container, Typography } from "@mui/material";

const BlogPage: NextPage<{
  frontmatter: {
    title: string;
    date: string
  }, 
  content: string
}> = ({frontmatter, content}) => {
  return (
    <Layout>
      <Container maxWidth="lg">

          
          <Typography variant="h6">
            {frontmatter.title}
          </Typography>
          <Typography variant="caption">
            {frontmatter.date}
          </Typography>
          <div dangerouslySetInnerHTML={{__html: marked.parse(content)}} />
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = ({ params })=> {
  const { slug } = params as ParsedUrlQuery;

    const markdownWithMeta = fs.readFileSync(path.join("posts", `${slug}.md`), "utf-8");
    const { data: frontmatter, content } = matter(markdownWithMeta);

    console.log("content ", content)

  return {
    props: {
      frontmatter,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = (context) => {
  const filenames = fs.readdirSync(path.join("posts"), "utf-8");
  // console.log("files ", files);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
};
