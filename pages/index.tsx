import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import ResponsiveAppBar from "../components/appbar/ResponsiveAppBar";
import { Academy } from "../components/HomePage";

import ArticleIcon from "@mui/icons-material/Article";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import FeedIcon from "@mui/icons-material/Feed";
import { Container, Grid } from "@mui/material";

//node modules
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Blog from "../components/HomePage/Blog";
import Carousel from "../components/HomePage/Carousel";

// react-slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TPost } from "../types";

const academy = [
  { title: "ORACLE Academy", meta: "Enrol Today", icon: SchoolIcon },
  {
    title: "Best in CISCO Academy",
    meta: "First in Professional",
    icon: EmojiEventsIcon,
  },
  { title: "IBM Academy", meta: "Enroll Today", icon: SchoolIcon },
  { title: "FUTO News", meta: "Read All News", icon: ArticleIcon },
  { title: "Upcoming Events", meta: "Read All News", icon: AnnouncementIcon },
  {
    title: "Executive Short courses",
    meta: "Advanced Diploma Certificates",
    icon: FeedIcon,
  },
];
const Home: NextPage<{
  posts: TPost[];
}> = ({ posts }) => {
  return (
    <Layout>
      <Container maxWidth={"xl"}>
        <Grid container component="main" justifyContent="space-around">
          <Grid item xs={11} md={6}>
            <Carousel />
          </Grid>

          {/* blog titles */}
          <Grid item xs={11} md={4} p={1} sx={{ backgroundColor: "#c1d6b3" }}>
            {posts.map(({ slug, frontmatter }) => (
              <Blog slug={slug} frontmatter={frontmatter} key={slug} />
            ))}
          </Grid>
        </Grid>

        <Container maxWidth="lg" sx={{mb: 5}}>
          <Grid container justifyContent="center" spacing={5} my={2}>
            {academy.map(({ title, meta, icon }) => (
              <Grid xs={11} sm={5} lg={4} item key={title}>
                <Academy title={title} meta={meta} Icon={icon} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join("posts", file), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);

    return { frontmatter, slug };
  });

  return {
    props: { posts },
  };
};
