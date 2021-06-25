import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';

const About: NextPage = () => {
  console.log('ABOUT PAGE');

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">ABOUT PAGE HERE</div>
  );
};

export default About;
