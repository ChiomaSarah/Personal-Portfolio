
import { ProjectCard } from "./ProjectCard";



const Projects = () => {
  const projectList = [
    {
      href: "https://sohcahtoa-frontend-assessment.vercel.app/login",
      src: "https://i.ibb.co/SZVMBZ3/Sohcahtoa.png",
      alt: "Sohcahtoa",
      title: "Sohcahtoa - Assessment"
    },
    {
      href: "https://dev-blog-web.vercel.app/",
      src: "https://i.ibb.co/rKFZ6FdJ/Dev-Blog.png",
      alt: "Dev Blog",
      title: "Dev Blog"
    },
    {
      href: "https://weather-navigator.vercel.app/",
      src: "https://i.ibb.co/rRdTTpBM/Weather-Navigator.png",
      alt: "Weather Navigator",
      title: "Weather Navigator"
    },
    {
      href: "https://calculator--app.vercel.app/",
      src: "https://i.ibb.co/4ZTkwC95/Calculator.png",
      alt: "Calculator",
      title: "Calculator"
    },
    {
      href: "https://credpal-landing.vercel.app/",
      src: "https://i.ibb.co/4wyX74zC/Cred-Pal-Landing.png",
      alt: "CredPal Landing Page",
      title: "Cloned: CredPal Landing"
    },
    {
      href: "https://osuji-sarah-lendsqr-fe-test.vercel.app/",
      src: "https://i.ibb.co/zVrbvmv8/Lendsqr-Landing.png",
      alt: "Lendsqr Landing Page",
      title: "Cloned: Lendsqr Landing"
    },
    {
      href: "https://le-travaille-app.netlify.app/",
      src: "https://i.ibb.co/6Rhtf8dY/Le-Travaille-New.png",
      alt: "Le-Travaille",
      title: "Le-Travaille"
    },
    {
      href: "https://koko-play.netlify.app/",
      src: "https://i.ibb.co/LgPpCds/koko-play-screen.png",
      alt: "KOKO.play",
      title: "KOKO.play"
    },
    {
      href: "https://mern-bookstore-app.vercel.app/",
      src: "https://i.ibb.co/TcyKymc/MERN-Book-Store-App.jpg",
      alt: "Authenticated Book Store",
      title: "Auth Book Store (MERN)"
    },
    {
      href: "https://pern-bookstoreapp.up.railway.app/",
      src: "https://i.ibb.co/GMLyp1t/PERN-Book-Store-App.jpg",
      alt: "Book Store",
      title: "Book Store (PERN)"
    },
    {
      href: "https://chiomasarah.github.io/Membership-Form",
      src: "https://i.ibb.co/xhXgnHg/Membership-Form.jpg",
      alt: "Membership Form",
      title: "Membership Form"
    },
    {
      href: "https://codepen.io/Exquisite-Sarah/full/LYbrwgy?editors=1100",
      src: "https://i.ibb.co/qYKsLRt/image.png",
      alt: "Cloned Webpage",
      title: "Cloned: Udemy Landing"
    },
    {
      href: "https://codepen.io/Exquisite-Sarah/full/XWjKNZB",
      src: "https://i.ibb.co/7Js35SW/image.png",
      alt: "Cloned Webpage",
      title: "Cloned: Exile Lifestyle"
    },
    {
      href: "https://codepen.io/Exquisite-Sarah/full/wvwdPab",
      src: "https://i.ibb.co/Wshj0hF/image.png",
      alt: "Technical Documentation Page",
      title: "Technical Documentation"
    },
    {
      href: "https://codepen.io/Exquisite-Sarah/full/oNNjZbx",
      src: "https://i.ibb.co/55v7gmq/image.png",
      alt: "Product Landing Page",
      title: "Product Landing Page"
    },
    {
      href: "https://codepen.io/Exquisite-Sarah/full/PoYOYRb",
      src: "https://i.ibb.co/28xtLKJ/image.png",
      alt: "Survey Form",
      title: "Survey Form"
    },
    {
      href: "https://codepen.io/Exquisite-Sarah/full/jgeVOO",
      src: "https://i.ibb.co/4KL3ZQc/image.png",
      alt: "Tribute Page",
      title: "Tribute Page"
    }];

  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent mb-6">
            Peep my projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} total={projectList.length} />
          ))}
        </div>
      </div>
    </section>
  );
};



export default Projects;
