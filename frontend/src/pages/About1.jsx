/* This example requires Tailwind CSS v2.0+ */
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material'


export const Team = [
    {
        id: 1,
        name: "James Christian Aidoo",
        linkedIn: "https://www.linkedin.com/in/ghjimchriss",
        facebook: " https://www.facebook.com/ghjimchriss.",
        twitter: "https://twitter.com/ghjimchriss",
        github: "https://github.com/ghjimchris/ALX-project",
        description: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
    },
    {
        id: 2,
        name: "Owuraku Buabeng",
        linkedIn: "https://www.linkedin.com/in/owuraku-buabeng-a514081b0/",
        facebook: "",
        twitter: "https://twitter.com/KuukuBuabeng",
        github: "https://github.com/ghjimchris/ALX-project",
        description: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
    },
]

export default function About() {
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
                {
                    Team.map((tm) => (
                        <div key={tm.id}>
                            <h2 className="text-2xl text-center font-bold text-gray-900 sm:text-3xl sm:tracking-tight">{tm.name}</h2>
                            <div className="mt-3">
                                <p className="text-lg text-center text-gray-500">{tm.description}</p>
                            </div>
                            <div className="mt-9">
                                <div className='flex space-x-2 m-4 items-center justify-center'>
                                    <div className="socialIcon">
                                        <Link to={tm.facebook}>
                                            <Facebook />
                                        </Link>
                                    </div>
                                    <div className="socialIcon">
                                        <Link to={tm.github}>
                                            <GitHub />
                                        </Link>
                                    </div>
                                    <div className="socialIcon">
                                        <Link to={tm.twitter}>
                                            <Twitter />
                                        </Link>
                                    </div>
                                    <div className="socialIcon">
                                        <Link to={tm.linkedIn}>
                                            <LinkedIn />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    </div>
    )
}


{
    Team.map((tm) => {

    })
}



{/* <div className="bg-white">
    <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                James
                </h2>
                <div className="mt-3">
                    <p className="text-lg text-gray-500">
                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                        lacus arcu.
                    </p>
                </div>
                <div className="mt-9">
                    <div className='flex space-x-2 m-4 items-center justify-center'>
                        <div className="socialIcon">
                            <Link to={tm.facebook}>
                                <Facebook />
                            </Link>
                        </div>
                        <div className="socialIcon">
                            <Link to={tm.github}>
                                <GitHub />
                            </Link>
                        </div>
                        <div className="socialIcon">
                            <Link to={tm.twitter}>
                                <Twitter />
                            </Link>
                        </div>
                        <div className="socialIcon">
                            <Link to={tm.facebook}>
                                <Google />
                            </Link>
                        </div>
                        <div className="socialIcon">
                            <Link to={tm.linkedIn}>
                                <LinkedIn />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div> */}