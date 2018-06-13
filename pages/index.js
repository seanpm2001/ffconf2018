import NavFull from '../src/components/nav-full';
import NavMain from '../src/components/nav-main';
import PreviousYears from '../src/components/previous-years';
import Sponsors from '../src/components/sponsors';

const PageIndex = () => (
  <div id="root">
    <NavFull />
    <NavMain />
    <PreviousYears />
    <Sponsors />
  </div>
);

export default PageIndex;
