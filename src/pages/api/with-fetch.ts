// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { StaticImageData } from "next/image";

import labrador from '@/assets/dogs/labrador.jpg'
import poodle from '@/assets/dogs/poodle.jpg'
import beagle from '@/assets/dogs/beagle.jpg'
import pastor from '@/assets/dogs/pastor.jpg'
import bulldog from '@/assets/dogs/bulldog.jpg'

type Data = {
    name: string,
    age: number,
    breed: string,
    veterinary_history: {
        vaccines: Array<string>,
        deworming: string,
        castration: boolean
    },
    image: StaticImageData
};

const dogs: Array<Data> = [
    {
        name: "Rex",
        age: 2,
        breed: "Labrador",
        veterinary_history: {
            vaccines: ["V8", "Anti-rábica"],
            deworming: "Em dia",
            castration: true
        },
        image: labrador
    },
    {
        name: "Bella",
        age: 3,
        breed: "Poodle",
        veterinary_history: {
            vaccines: ["V10", "Anti-rábica"],
            deworming: "Em dia",
            castration: false
        },
        image: poodle
    },
    {
        name: "Thor",
        age: 1,
        breed: "Bulldog",
        veterinary_history: {
            vaccines: ["V8"],
            deworming: "Em dia",
            castration: true
        },
        image: bulldog
    },
    {
        name: "Luna",
        age: 4,
        breed: "Beagle",
        veterinary_history: {
            vaccines: ["V10", "Anti-rábica"],
            deworming: "Em dia",
            castration: true
        },
        image: beagle
    },
    {
        name: "Max",
        age: 5,
        breed: "Pastor Alemão",
        veterinary_history: {
            vaccines: ["V8", "Anti-rábica"],
            deworming: "Em dia",
            castration: false
        },
        image: pastor
    }
]

// const randomSliceDogs = dogs.sort(() => Math.random() - 0.5).slice(0, 3);

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Data>>,
) {
    res.status(200).json(dogs);
}
