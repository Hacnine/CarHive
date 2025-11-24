import { MdAccountBox, MdMan } from "react-icons/md";


const Comments = () => {
  return (
    <div className="flex flex-col border-t text-gray-300 pt-9 ">
       <h4 className=" font-open text-xl text-black pb-7">Comments (2)</h4>
        
        <div className="flex items-start gap-2 ">
        <MdAccountBox className="h-14 w-64 text-gray-400"/>
        <div className="space-y-3">
        <h5 className="text-sm font-open text-gray-800 ">Sami Muhammad</h5>
        <div className=" justify-start flex">
        <p className="text-green-400 pr-4  border-r border-gray-400 text-xs">25 October 2023</p>
        <p className="text-green-900 pl-4  text-xs">Reply</p>
        
       </div>
       <p className="text-sm text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae delectus tempora reiciendis, maiores omnis repellat esse fugiat, aliquid laboriosam distinctio mollitia aut eius, sed aspernatur? Facere quod rerum eius repudiandae.</p>

       <div className="flex items-start gap-2  border-t text-gray-300 pt-4">
        <MdAccountBox className="h-14 w-64 text-gray-400"/>
        <div className="space-y-3">
        <h5 className="text-sm font-open text-gray-800 ">Yasir Khan</h5>
        <div className=" justify-start flex">
        <p className="text-green-400 pr-4  border-r border-gray-400 text-xs">25 October 2023</p>
        <p className="text-green-900 pl-4  text-xs">Reply</p>
        
       </div>
       <p className="text-sm text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae delectus tempora reiciendis, maiores omnis repellat esse fugiat, aliquid laboriosam distinctio mollitia aut eius, sed aspernatur? Facere quod rerum eius repudiandae.</p>
       </div>
        </div>
       </div>

       
        </div>
       
       </div>
  )
}

export default Comments
