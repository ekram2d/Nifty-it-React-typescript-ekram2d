
import CompanyProjects from '../CompanyProjects/CompanyProjects';
import CompanyMembers from '../CompanyMembers/CompanyMembers';
import OfficeTodo from '../../OfficeTodo/OfficeTodo'


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

                  <OfficeTodo/>
                  

            </div>
      );
};

export default Home;