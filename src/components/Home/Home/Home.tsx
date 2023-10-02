
import CompanyProjects from '../CompanyProjects/CompanyProjects';
import CompanyMembers from '../CompanyMembers/CompanyMembers';
import OfficeTodo from '../../OfficeTodo/OfficeTodo'
import { DarkmodeCounter } from '../../../features/darkmode/DarkmodeCounter';
import Counter from '../../../features/counter/Counter';

import RocketList from '../../Graphql/RocketUi/RocketList';
import Histories from '../../Graphql/RocketUi/Histories/Histories';
// import Count from '../../Count/Count';
// import { Counter } from '../../../features/counter/Counter';


const Home = () => {
      return (
            <div className='mt-16 mb-16'>
                  <section>

                        <h1 className='text-center font-bold text-2xl underline'>Company Projects</h1>
                        <CompanyProjects />

                  </section>
                  <h1 className='text-center font-bold text-2xl underline'>Company Members</h1>
                  <section>
                        <CompanyMembers />
                  </section>

                  <OfficeTodo />
                  {/* <Count/> */}
                  {/* <Counter/> */}

                  <section>

                        <DarkmodeCounter />
                  </section>

                  <section>
                        <Counter />
                  </section>

                  <section>
                        <RocketList />
                  </section>
                  <section>
                        <Histories/>
                  </section>

            </div>
      );
};

export default Home;