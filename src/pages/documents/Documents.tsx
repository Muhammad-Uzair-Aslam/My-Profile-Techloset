import DocumentsCard from "../../components/documentsCard/DocumentsCard";
import CnicFront from '../../assets/front.jpeg'
import CnicBack from '../../assets/back.jpg'
export default function Documents() {
  return (
    <div className="flex flex-col py-10 gap-5 md:flex-row">
        <DocumentsCard src={CnicFront} alt="CNIC front"/>
        <DocumentsCard src={CnicBack} alt="CNIC Back"/>
    </div>
  )
}
