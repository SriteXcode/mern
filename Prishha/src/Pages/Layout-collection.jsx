import react from "react";
import Collection from "../assets/Api/Collectionapi";
import {useNavigate} from 'react-router-dom';
import { IKImage } from 'imagekitio-react';


export const LayoutCollection = () => {

    const Navigate = useNavigate();
  const urlEndpoint="https://ik.imagekit.io/nx2mu5rdoc";


    return (


        <>
            <main>

            {/* <IKImage
        urlEndpoint={urlEndpoint} 
        path="default-image.jpg"
      /> */}

            {/* <IKImage
            urlEndpoint={urlEndpoint}
            path="/StarFace/img1.jpeg"
            transformation={[{height:300,
                width:400,
                // resize: {
                //     mode: 'fit', // Resize mode: fit, fill, or stretch
                //   },
                }]}
                /> */}

                {/* <img urlEndpoint={urlEndpoint}
            path="default-image.jpg" alt="jnfajwbfkakfbjvcbadifgfyusj" /> */}
           

                <h2 className="border-4">
                    Absolutly Stunning
                </h2>
                <h1>LAYOUT COLLECTION</h1>
                <span> <hr width={'40%'} style={{ border: '2px solid red', margin: "0 auto" }} /> </span>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam illo voluptate, eligendi eum a nihil porro minus perferendis architecto dolore? Eius, qui sequi dolor molestias quasi temporibus architecto corrupti eos consequatur officiis? Nesciunt rerum ex odit esse veritatis magnam delectus, officia consequuntur voluptate veniam alias repellendus ducimus facere suscipit minus?
                </p>

                <div className="flex">
                    {Collection.map((curElem, index) => {
                        const {id,image,alt, link,discription} = curElem;
                        return (
                        <div onClick={()=> Navigate(`${link}`)}y key={index} className="border-2 group hover:border-rose-800">
                        {/* <img className="cursor-pointer"  src={image} alt={`${alt}${id}`}/> */}
                        <IKImage
                           urlEndpoint={urlEndpoint}
                           path={`/StarFace/${image}`}
                           transformation={[
                             {
                               height: 300,
                               width: 400, 
                             },
                           ]}
                           lqip={{ active: true, quality: 20 }}
                           loading="lazy"
                        />
                            
                            <h3 className="cursor-pointer border-4 group-hover:border-rose-600" >{discription}</h3>
                        </div>);
                    })}
                </div>

            </main>
        </>
    );

};