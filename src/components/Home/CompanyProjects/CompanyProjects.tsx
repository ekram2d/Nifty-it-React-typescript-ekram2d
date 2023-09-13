import React from 'react';
import SingleProject from './SingleProject';

export type Projects = {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
  status: 'In Progress' | 'Completed' | 'On Hold' | 'Canceled';
  imageUrl: string;
};

const CompanyProjects = () => {
  const companyProjects: Projects[] = [
    {
      id: 1,
      name: 'Project A',
      description: 'This is the description of Project A.',
      startDate: new Date('2023-01-15'),
      endDate: new Date('2023-05-30'),
      status: 'Completed',
      imageUrl: 'https://i0.wp.com/devdevshow.com/wp-content/uploads/2022/03/image-3.png?resize=1536%2C1269&ssl=1',
    },
    {
      id: 2,
      name: 'Project B',
      description: 'This is the description of Project B.',
      startDate: new Date('2023-03-10'),
      endDate: null, // Ongoing project
      status: 'In Progress',
      imageUrl: 'https://horeca.digital-romandie.ch/wp-content/uploads/2018/11/desktop-1.jpg',
    },
    {
      id: 3,
      name: 'Project C',
      description: 'This is the description of Project C.',
      startDate: new Date('2023-02-20'),
      endDate: new Date('2023-04-15'),
      status: 'Completed',
      imageUrl: 'https://www.goatsontheroad.com/wp-content/uploads/2020/12/how-to-create-a-freelance-website.jpg',
    },
    {
      id: 4,
      name: 'Project D',
      description: 'This is the description of Project D.',
      startDate: new Date('2023-04-01'),
      endDate: null, // Ongoing project
      status: 'In Progress',
      imageUrl: 'https://i0.wp.com/devdevshow.com/wp-content/uploads/2022/03/image-3.png?resize=1536%2C1269&ssl=1',
    },
  ];

  return (
    <div>
      
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
        {companyProjects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default CompanyProjects;
