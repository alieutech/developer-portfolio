import Acomplishments from '../components/acomplishments/acomplishment';
import BgAnimation from '../components/backGroundAnimations/backGroundAnimation';
import Hero from '../components/hero/hero';
import Projects from '../components/projects/projects';
import Technologies from '../components/technologies/technologies';
import Timeline from '../components/timeLine/timeLine';
import { Layout } from '../layout/layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;