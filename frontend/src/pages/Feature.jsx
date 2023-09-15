/* This example requires Tailwind CSS v2.0+ */
import {
  LockClosedIcon,
  
} from '@heroicons/react/24/outline'

import { Speed, Accessibility } from '@mui/icons-material'

const features = [
  {
    id: 1, 
    name: `User-Friendly Interface`, 
    description: `Our user-friendly interface makes navigating the system a breeze for all healthcare professionals. With an intuitive layout and easy-to-use design, you can access patient records, update information, and manage appointments effortlessly. Say goodbye to steep learning curves and hello to increased efficiency.`,
    icon: Accessibility,
  },
  {
    id: 2, 
    name: `Secure Electronic Health Records (EHR)`, 
    description: `Security is paramount when it comes to healthcare records. Our system provides robust data protection mechanisms, ensuring the confidentiality and integrity of patient information. It offers role-based access control, audit trails, and encryption to safeguard sensitive data, keeping you compliant with healthcare regulations.`,
    icon: LockClosedIcon,
  },
  {
    id: 3, 
    name: `Digital Records Management`, 
    description: `You can then organize, search, and access these records at your fingertips, reducing the reliance on physical paperwork and ensuring quick retrieval of patient information.The Digital Records Management feature not only saves time and storage space but also enhances data accuracy and accessibility.`,
    icon: Speed,
  },
]

export default function Example() {
  return (
    <div className="relative bg-white py-12 sm:py-24 lg:py-12">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-[#20B486]">Efficiently Retrieve Patient Data</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to manage healthcare
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
        Unlocking HealthTech Excellence: Features that Care, Innovate, and Empower.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-[#20B486] p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
