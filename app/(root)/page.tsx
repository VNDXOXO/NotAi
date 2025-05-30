
import Images from "@/components/ui/images";
import PromptArea from "@/components/ui/promptArea";

export default function Home() {
  

  
  return (
    <div>
      {/* <Alert params={query}/> */}
      <h1 className="text-2xl tracking-tight">Not an Ai image Genereator</h1>
      <PromptArea/>
      <div className="">
        <Images/>
      </div>
      
      
    </div>
    
    
  );
}
