import { getPages, getProjects } from "@/sanity/sanity-utils";

const Navo = async () => {
  const pages = getPages()
  
  return (
      <div>
          <p>Navigation should be here!</p>
          {/* {pages.map(page) => (
            <p>{page.title}</p>
          )} */}
      </div>
   );
}

export default Navo;
