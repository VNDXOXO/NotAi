
import Images from "@/components/ui/images";
import PromptArea from "@/components/ui/promptArea";

export default async function Home({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams.query;

  
  return (
    <div>
      {/* <Alert params={query}/> */}
      <h1 className="text-2xl tracking-tight">Not an Ai image Genereator</h1>
      <PromptArea query={query}/>
      <div className="">
        <Images/>
      </div>
      
      
    </div>
    
    
  );
}
