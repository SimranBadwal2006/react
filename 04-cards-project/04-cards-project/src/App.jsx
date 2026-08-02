import Card from './components/card'


const App = () => {

  const jobOpenings = [
    {
      id: 1,
      logo: "https://pluspng.com/img-png/google-logo-png-open-2000.png",
      company: "Google",
      posted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      id: 2,
      logo: "https://tse2.mm.bing.net/th/id/OIP.kNKcDgiMi5llYWI0jcOE3QHaEK?r=0&pid=Api&P=0&h=180",
      company: "Microsoft",
      posted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Bengaluru, India",
    },
    {
      id: 3,
      logo: "https://tse2.mm.bing.net/th/id/OIP.xC-Syxu3AdZ6vytmAKV_oAHaFj?r=0&pid=Api&P=0&h=180",
      company: "Apple",
      posted: "1 week ago",
      post: "UI/UX Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Hyderabad, India",
    },
    {
      id: 4,
      logo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      company: "Meta",
      posted: "10 days ago",
      post: "React Developer",
      tag1: "Remote",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Pune, India",
    },
    {
      id: 5,
      logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      company: "Amazon",
      posted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Chennai, India",
    },
    {
      id: 6,
      logo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
      company: "Netflix",
      posted: "3 weeks ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Remote",
    },
    {
      id: 7,
      logo: "https://tse3.mm.bing.net/th/id/OIP.OWobVMrQ5dPygCw5Umq6zAHaFd?r=0&pid=Api&P=0&h=180",
      company: "NVIDIA",
      posted: "4 weeks ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$76/hr",
      location: "Bengaluru, India",
    },
    {
      id: 8,
      logo: "https://i.pinimg.com/1200x/62/3c/b6/623cb67a352ad783bfa394952dc56af2.jpg",
      company: "Adobe",
      posted: "6 weeks ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Noida, India",
    },
    {
      id: 9,
      logo: "https://tse1.mm.bing.net/th/id/OIP.5ghidMJV9MiyatcrVV-OMgHaHa?r=0&pid=Api&P=0&h=180",
      company: "Oracle",
      posted: "8 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$67/hr",
      location: "Gurugram, India",
    },
    {
      id: 10,
      logo: "https://up.yimg.com/ib/th/id/OIP.7wF76mX0WOm9KvCzd5JtGwHaEK?pid=Api&rs=1&c=1&qlt=95&w=181&h=102",
      company: "Salesforce",
      posted: "10 weeks ago",
      post: "Software Development Engineer",
      tag1: "Hybrid",
      tag2: "Mid Level",
      pay: "$63/hr",
      location: "Hyderabad, India",
    },
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        console.log(idx);
        return <div key={idx} >
          <Card key={idx} company={elem.company} datePosted={elem.posted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} logo={elem.logo} />
        </div>
      })}
    </div>
  )
}

export default App
