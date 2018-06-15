import Layout from '../src/components/layout';
import Sessions from '../src/components/sessions';
import Workshops from '../src/components/workshops';
import Locations from '../src/components/locations';
import Diversity from '../src/components/diversity';
import Thanks from '../src/components/thanks';
import Quote from '../src/components/quote';

const PageIndex = () => {
  return (
    <Layout>
      <Sessions />
      <Quote />
      <Workshops />
      <Quote />
      <Locations />
      <Quote />
      <Diversity />
      <Thanks />
      <Quote />
    </Layout>
  );
};

export default PageIndex;
