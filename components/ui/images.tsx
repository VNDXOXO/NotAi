import React from 'react'
import { prompts } from '../prompts';
import { Card,CardHeader,CardContent,CardTitle } from './card';
import * as motion from "motion/react-client"

type CardJson = {
  title: string;
  image_link: string;
};
 function Images(){
    const baseAPI=process.env.API_IMAGE_ENDPOINT;
    const aspectRatio=process.env.API_ASPECT;
    const cardjson:CardJson[]=[];
    for (let j = 0; j < prompts.length; j++) {
        cardjson.push({
            title:prompts[j].title,
            image_link:prompts[j].image_link
        });
        
    }
    // async function genImage(){
    //     for (let i = 0; i < prompts.length; i++) {
    //         const apiUrl=`${baseAPI}?${prompts[i]}?${aspectRatio}`
    //         console.log('fetching from 🔥',apiUrl);
    //         const response = await fetch (`${baseAPI}?${prompts[i]}?${aspectRatio}`);
    //         const data=await response.json();
    //         {console.log('IMGURL',data.image_link)}
    //         data.title=prompts[i];
    //         cardjson.push(data);
    //     }
    // }
    // await genImage();
    
  return (
     <div className="card-grid mt-7">
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
          <Card className="" >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              {/* <CardDescription>Card Description</CardDescription>  */}
            </CardHeader>
            <CardContent>
              <img src={card.image_link} alt="" className="rounded-lg desktop:w-80"/>
            </CardContent>
          </Card>  
          </motion.div>
        ))}      
      

    
          
      </div>

  )
}

export default Images