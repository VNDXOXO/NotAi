import { Card,CardHeader,CardContent} from '@/components/ui/card'
import Image from 'next/image';
import * as motion from "motion/react-client"
import Footer from '@/components/ui/footer';

type CardJson = {
  title: string;
  image_link: string;
};

async function page ({ searchParams }: { searchParams: Promise<{ query?: string }> }){
    const query =  (await searchParams).query;
    const baseAPI=process.env.API_IMAGE_ENDPOINT;
    const aspectRatio=process.env.API_ASPECT;
    const cardjson:CardJson[]=[];
    const apiUrl=`${baseAPI}?prompt=${(query)}${aspectRatio}`;
    for (let i = 0; i < 3; i++) {
        const randomSeed = Math.random();
        const response = await fetch(`${apiUrl}&seed=${randomSeed}`);
        const data=await response.json();
        {console.log('IMGURL',data.image_link)}
        data.title=query;
        cardjson.push(data);
        
    }
    

  return (
    <div>
        <h1 className='text-4xl tracking-tight'>Generated results for: {query}</h1>
        <div className="grid sm:grid-cols-1 tablet:grid-cols-1 tablet-lg:grid-cols-3 tablet-lg:px-0 desktop:grid-cols-3 desktop:px-20 gap-5 mt-7">
         {cardjson.map((card:{image_link :string; title:string},index) => (
          <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                          duration: 0.4,
                          scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 },
                      }}
                      key={index}>
              <Card>
                <CardHeader>
                  {/* <CardTitle>{card.title}</CardTitle> 
                  <CardDescription>Card Description</CardDescription>  */}
                </CardHeader>
                <CardContent className='flex justify-center'>
                  <Image src={card.image_link} alt="" className="rounded-lg" width={320} height={240}></Image>
                </CardContent>
              </Card>  
            </motion.div>
            
        ))}       
      </div>
      {cardjson.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}      
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.4,                         
          }}
        >
        <Footer />
        </motion.div>
      )}

    </div>
    
    
    
  )
}

export default page