import Markdown from '../markdown';
import Section from '../section';

import data from 'raw-loader!./data.md';

const Terms = () => {
  return (
    <Section id="terms" title="Privacy Policy">
      <Markdown>{data}</Markdown>
    </Section>
  );
};

export default Terms;
