
import SingleMember from './SingleMember';
export type members = {
      id: number,
      name: string,
      position: string,
      email: string,
      imageUrl: string
}
const CompanyMembers = () => {
      const CompanyMembers: members[] = [
            {
                  id: 1,
                  name: "John Doe",
                  position: "CEO",
                  email: "john@example.com",
                  imageUrl: "https://lawpreview.barbri.com/wp-content/uploads/2020/11/reviews-3-1.jpg",
            },
            {
                  id: 2,
                  name: "Jane Smith",
                  position: "CTO",
                  email: "jane@example.com",
                  imageUrl: "https://media.licdn.com/dms/image/C5612AQErXNJK8LsrrA/article-cover_image-shrink_600_2000/0/1589201037298?e=2147483647&v=beta&t=wyBgzsZlj-qkO5NPOtbXrtGsx5yWiV8lWrAsB_IsphQ",
            },
            {
                  id: 3,
                  name: "Bob Johnson",
                  position: "CFO",
                  email: "bob@example.com",
                  imageUrl: "https://mir-s3-cdn-cf.behance.net/user/276/422208548209.5f0513bc0dd4e.jpg",
            },
            {
                  id: 4,
                  name: "Alice Brown",
                  position: "Lead Developer",
                  email: "alice@example.com",
                  imageUrl: "https://www.kla.com/wp-content/uploads/image44-60.jpeg",
            },
      ];
      return (
            <div>

                  <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2 w-[90%] mx-auto mt-10'>
                        {CompanyMembers.map((member) => (
                              <SingleMember id={member.id}
                                    name={member.name}
                                    position={member.position}
                                    email={member.email}
                                    imageUrl={member.imageUrl}

                              />
                        ))}
                  </div>
            </div>

      );
};

export default CompanyMembers;