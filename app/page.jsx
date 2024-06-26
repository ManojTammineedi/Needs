import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
    Discover & share
      <br />
      <span className="green_gradient text-center"> Innovations and Insights </span>
    </h1>
    <p className="desc text-center">
      Needs is a Social-media platform for modern world to discover, create and
      share creative posts
    </p>

    <Feed />
  </section>
);

export default Home;
