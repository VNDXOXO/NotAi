import Images from "@/components/ui/images";
import PromptArea from "@/components/ui/promptArea";
import Footer from "@/components/ui/footer";
export const metadata = {
  title: "NotAi",
  description: "We dont Use Ai",
  
};
export default function Home() {
  return (
    <div>
        {/* <Alert params={query}/> */}
        <h1 className="text-4xl tracking-tight">Not an Ai image Genereator</h1>
        <PromptArea/>
        <div className="">
          <Images/>
        </div>
        <Footer />
    </div>

  );
}

