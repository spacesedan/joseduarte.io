export default function ProjectCard() {
  type Project = {
    title: string;
    purpose: string;
    challenges: string;
    img: string;
    githubLink: string;
    liveLink: string;
    date: Date;
  };

  return (
    <div className='projectcard'>
      <h5 className='text-2xl font-bold pb-5'>Project Title</h5>
      <p className='pt-5 text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        perferendis numquam nemo, quidem mollitia voluptatem voluptates
        doloremque earum omnis soluta quasi animi necessitatibus ducimus,
        aspernatur, sed facilis. Nam, animi. Officiis.
      </p>
    </div>
  );
}
