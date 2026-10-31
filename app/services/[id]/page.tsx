import dbConnect, { collectionNamesObj } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function ServiceDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const p = await params;
  const data = await dbConnect(collectionNamesObj.servicesCollection).findOne({ _id: new ObjectId(p.id) })

  if(!data){
    return <div>Service not found</div>
  }
  return <div className="mt-8 space-y-8 px-4 max-w-7xl mx-auto">
    <section className="flex justify-center">
      <figure className="relative w-full overflow-hidden rounded-lg">
        <Image
        className="w-full h-75 object-cover"
          src={"/assets/images/checkout/checkout.png"}
          alt="banner"
          width={1137}
          height={300}>
        </Image>
        {/* Gradiant Overlay */}
        <div className="absolute inset-0 rounded-lg top-0 bg-[linear-gradient(90deg,#151515_0%,rgba(21,21,21,0)_100%)]">
          <div className="w-full h-full flex items-center ps-16">
            <div>
              <h2 className="text-white font-bold text-4xl">Service Details</h2>
            </div>
          </div>
        </div>
      </figure>
    </section>
    <section className="mt-20">
      <div className="space-y-4">
        <Image
      className="rounded-lg" 
      alt="" 
      src={data.img}
      unoptimized 
      width={752}
       height={400}></Image>
       <h2 className="font-bold text-3xl">{data.title}</h2>
       <p>{data.description}</p>
      </div>
    </section>
  </div>;
}
