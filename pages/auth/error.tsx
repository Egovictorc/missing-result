import { GetServerSideProps, GetStaticProps, NextPage } from "next";

const ErrorPage: NextPage = () => {
  return <div>error occured</div>;
};

export default ErrorPage;

export const getServerSideProps: GetServerSideProps = async function (context) {
  const { req, query } = context;
  const { referer, host } = req.headers;
  // console.log("headers ", req.headers);
  // console.log("referer ", req.headers.referer);

  console.log("query ", query);
  // console.log("req ", req);


  return {
   redirect: {
        // destination: `${referer}?error=${query.error}`,
        destination: `${process.env.NEXTAUTH_URL}/portal?error=${query.error}`,
        // destination: `${process.env.NEXTAUTH_URL}/auth/signin?error=${query.error}`,
        permanent: false
      },
  };
};
