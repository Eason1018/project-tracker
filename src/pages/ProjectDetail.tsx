import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams(); // grabs the ":id" from the URL
  return <h2 className="text-lg font-medium">Project detail for {id}</h2>;
}
