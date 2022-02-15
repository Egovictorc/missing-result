import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GithubProvider from "next-auth/providers/github";

import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";

import CredentialsProvider from "next-auth/providers/credentials";
import StudentService from "../../../services/StudentService";
import { number } from "yup/lib/locale";
import clientPromise from "../../../db";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    // https://next-auth.js.org/configuration/providers

    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: "Credentials",
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          // email: {
          //   label: "Email",
          //   type: "text",
          //   placeholder: "johndoe@gmail.com",
          // },
          password: {
            label: "Password",
            type: "password",
            placeholder: "johndoe@gmail.com",
          },
          matricno: {
            label: "Matricno",
            type: "number",
            placeholder: "11221212",
          },
        },

        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)
          // const { email, password } = credentials;
          // const email = credentials?  .email;
          console.log("credentials ", credentials);
          const matricno = credentials?.matricno;
          const password = credentials?.password;

          // console.log("email ", email);
          // console.log("password ", password);
          // console.log("req body ", req.body);
          if (!matricno || !password) {
            throw new Error("Please provide all details");
          }
          // if (!email || !password) {
          //   throw "/auth/signin?error=Please provide all details";
          // }
          try {
            const { data } = await StudentService.findStudentByMatricno(
              parseInt(matricno),
              password
            );
            // console.log("data.user ", data.user)
            // return data.user;
            return data.user._doc;
          } catch (err: any) {
            let error = err;
            const { data, statusText } = error.response;
            throw new Error(data.message);
          }
        },
      }),
      EmailProvider({
        server: {
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: process.env.EMAIL_SERVER_FROM,
      }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    pages: {
        // signIn: '/auth/signin',  // Displays signin buttons
        // signOut: '/auth/signout', // Displays form with sign out button
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // Used for check email page
        // newUser: null // If set, new users will be directed here on first sign in
        // signIn: '/auth/signin',
        verifyRequest: "/auth/verifyRequest",
        // error: "/auth/signin",
        error: "/auth/error",
      },
  });
}
