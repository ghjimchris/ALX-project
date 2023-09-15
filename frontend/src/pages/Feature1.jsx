/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'

export const ProjectFeatures = [
    { 
      id: 1, 
      name: `User-Friendly Interface`, 
      description: `Our user-friendly interface makes navigating the system a breeze for all healthcare professionals. With an intuitive layout and easy-to-use design, you can access patient records, update information, and manage appointments effortlessly. Say goodbye to steep learning curves and hello to increased efficiency.`
    },
    { 
      id: 2, 
      name: `Secure Electronic Health Records (EHR)`, 
      description: `Security is paramount when it comes to healthcare records. Our system provides robust data protection mechanisms, ensuring the confidentiality and integrity of patient information. It offers role-based access control, audit trails, and encryption to safeguard sensitive data, keeping you compliant with healthcare regulations.`
    },
    { 
      id: 3, 
      name: `Digital Records Management`, 
      description: `You can then organize, search, and access these records at your fingertips, reducing the reliance on physical paperwork and ensuring quick retrieval of patient information.The Digital Records Management feature not only saves time and storage space but also enhances data accuracy and accessibility.`
    },
]

export default function Feature() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">All-in-one platform</h2>
          <p className="mt-4 text-lg text-gray-500">
          Efficient digital solution for
storing, accessing, and managing comprehensive health records
          </p>
        </div>
        <div className="mt-12 space-y-10 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {ProjectFeatures.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
