import { DocumentCardProps } from "../../types/types"
export default function DocumentsCard({src,alt}:DocumentCardProps) {
  return (
    <div  className="md:w-1/2  shadow-md shadow-gray-600 p-3">
        <div className="text-center">
              <img src={src} alt={alt} width={500} height={200}/>
        </div>
    </div>
  )
}
