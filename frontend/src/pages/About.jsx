import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { Link } from 'react-router-dom';



export const Team = [
    {
        id: 1,
        name: "James Christian Aidoo",
        imageUrl: "https://media.licdn.com/dms/image/D4D03AQHHwjVayMUwyA/profile-displayphoto-shrink_200_200/0/1692821352121?e=1699488000&v=beta&t=PSWoCLsjLuSU3K2z1UkmlETIypUIvCEXcnO9m1FiQiI",
        role: "Backend Developer",
        linkedIn: "https://www.linkedin.com/in/ghjimchriss",
        facebook: " https://www.facebook.com/ghjimchriss.",
        twitter: "https://twitter.com/ghjimchriss",
        github: "https://github.com/ghjimchris/ALX-project",
        description: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
    },
    {
        id: 2,
        name: "Owuraku Buabeng",
        imageUrl: "https://media.licdn.com/dms/image/C4D03AQF1KcbCZv8g5g/profile-displayphoto-shrink_200_200/0/1591881943961?e=1699488000&v=beta&t=REhp8jturaBt_3M9j0r36ZQImEse7WuFGPJgBpDJFrc",
        role: "Frontend Developer",
        linkedIn: "https://www.linkedin.com/in/owuraku-buabeng-a514081b0/",
        facebook: "",
        twitter: "https://twitter.com/KuukuBuabeng",
        github: "https://github.com/ghjimchris/ALX-project",
        description: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
    },
];
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Team Members</h2>
              <p className="text-xl text-gray-500">
              Meet our dedicated team of experts driving innovation and excellence in Healthcare solutions.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
            >
              {Team.map((person) => (
                // <li key={person.name}>
                //   <div className="space-y-4">
                //     <img className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src={person.imageUrl} alt="" />
                //     <div className="space-y-2">
                //       <div className="text-xs font-medium lg:text-sm">
                //         <h3>{person.name}</h3>
                //         <p className="text-bg-[#20B486]">{person.role}</p>
                //       </div>
                //     </div>
                //   </div>
                // </li>

                <li
                key={person.id}
                className="col-span-3 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
              >
                <div className="flex flex-1 flex-col p-8">
                  <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-sm text-gray-500">{person.title}</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        {person.role}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <Link
                        to={person.facebook}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                      >
                        <Facebook className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">Post</span>
                      </Link>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <Link
                        to={person.github}
                        className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                      >
                        <GitHub className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">Commit</span>
                      </Link>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <Link
                        to={person.twitter}
                        className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                      >
                        <Twitter className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">Tweet</span>
                      </Link>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <Link
                        to={person.linkedIn}
                        className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                      >
                        <LinkedIn className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">Connect</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              ))}
            </ul>

            <div className='mt-4'><Link to={Team[0].github}>Click to follow project on Github</Link></div>
          </div>
        </div>
      </div>
    )
  }
  