import React from 'react'
import { prompts } from '../prompts';
import { Card,CardHeader,CardContent,CardTitle } from './card';
type CardJson = {
  title: string;
  image_link: string;
};
async function Images(){
    let baseAPI=process.env.API_IMAGE_ENDPOINT;
    let aspectRatio=process.env.API_ASPECT;
    let cardjson:CardJson[]=[];
    for (let j = 0; j < prompts.length; j++) {
        cardjson.push({
            title:prompts[j].title,
            image_link:prompts[j].image_link
        });
        
    }
    async function genImage(){
        for (let i = 0; i < prompts.length; i++) {
            const apiUrl=`${baseAPI}?${prompts[i]}?${aspectRatio}`
            console.log('fetching from 🔥',apiUrl);
            const response = await fetch (`${baseAPI}?${prompts[i]}?${aspectRatio}`);
            const data=await response.json();
            {console.log('IMGURL',data.image_link)}
            data.title=prompts[i];
            cardjson.push(data);
        }
    }
    // await genImage();
    
  return (
    
    <div className="card-grid mt-7">
         {cardjson.map((card:{image_link :string; title:string},index) => (
            <Card className="" key={index}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                {/* <CardDescription>Card Description</CardDescription>  */}
              </CardHeader>
              <CardContent>
                <img src={card.image_link} alt="" className="rounded-lg desktop:w-80"/>
              </CardContent>
            </Card>  
            // <div key={index}>
            //   <img src={card.image_link} alt="" className="rounded-lg"/>
            // </div>
        ))}       
      </div>

  )
}

export default Images