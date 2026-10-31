import { ArrowRight } from "lucide-react";
import Image from "next/image"
import dbConnect, { collectionNamesObj } from "../lib/dbConnect";
import Link from "next/link";


export default async function ServicesSection() {
    const data = await dbConnect(collectionNamesObj.servicesCollection).find({}).toArray();

    return (
        <div className="mt-6 text-center space-y-4 px-4">
            <p className="text-xl font-bold text-[#FF3811]">Service</p>
            <h2 className="font-bold text-4xl">Our Service Area</h2>
            <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className="grid grid-cols-12 gap-4 mt-4">
                {data.map((service) => (
                    <div key={service._id.toString()} className="card bg-base-100 shadow-sm col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full rounded-lg">
                        
                        <figure className="px-6 pt-6">
                            <Image className="w-full h-full object-fill rounded-lg"
                                src={service.img} alt=""
                                width={314}
                                height={208}></Image>
                        </figure>
                        <div className="card-body ml-4 ">
                            <h2 className="text-2xl font-bold">{service.title}</h2>
                            <div className="flex text-[#FF3811] items-center">
                                <p className="text-2xl ">Price: ${service.price}</p>
                                <Link href={`/services/${service._id}`}>
                                <ArrowRight /></Link>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}