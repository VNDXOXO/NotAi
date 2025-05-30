import { Card,CardHeader,CardContent} from '@/components/ui/card'
import Image from 'next/image';
type CardJson = {
  title: string;
  image_link: string;
};

async function page ({
  searchParams,
}: {
  searchParams: { query?: string };
}){
    const query =  searchParams?.query;
    const baseAPI=process.env.API_IMAGE_ENDPOINT;
    const aspectRatio=process.env.API_ASPECT;
    const cardjson:CardJson[]=[];
    const apiUrl=`${baseAPI}?${query}?${aspectRatio}`;
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
        <h1 className='text-2xl tracking-tight'>Generated results for: {query}</h1>
        <div className="grid sm:grid-cols-1 tablet:grid-cols-1 tablet-lg:grid-cols-3 tablet-lg:px-0 desktop:grid-cols-3 desktop:px-20 gap-5 mt-7">
         {cardjson.map((card:{image_link :string; title:string},index) => (
            <Card key={index}>
              <CardHeader>
                {/* <CardTitle>{card.title}</CardTitle> 
                 <CardDescription>Card Description</CardDescription>  */}
              </CardHeader>
              <CardContent className='flex justify-center'>
                <Image src={card.image_link} alt="" className="rounded-lg" width={320} height={240}></Image>
              </CardContent>
            </Card>  
        ))}       
      </div>
    </div>
    
  )
}

export default page