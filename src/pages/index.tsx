import * as React from 'react'

import SEO from '../components/seo'

const App: React.FC = () => (
  <>
    <SEO title="Home Page" />
    <header className="flex justify-center items-center my-4">
      <h1 className="container text-4xl text-gray-700 text-center">
        <span>Starter for </span>
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="text-purple-700 font-bold cursor-pointer hover:underline">
            Gatsby
          </span>
        </a>
        <span>, </span>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="text-blue-600 font-bold cursor-pointer hover:underline">
            TypeScript
          </span>
        </a>
        <span> and </span>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="text-teal-500 font-bold cursor-pointer hover:underline">
            TailwindCSS
          </span>
        </a>
      </h1>
    </header>
    <main className="container xl:px-32 text-gray-700 text-xl">
      <div className="flex flex-col lg:flex-row justify-center items-start">
        <ul className="lg:w-1/2 p-4">
          <h3 className="font-bold text-2xl text-gray-600">Checklist</h3>
          <li>
            <span className="uppercase font-bold text-green-700 mr-2">
              [done]
            </span>
            <span className="font-bold">TypeScript</span>
            <span> and </span>
            <span className="font-bold">TSConfig</span>
            <span> set-up</span>
          </li>
          <li>
            <span className="uppercase font-bold text-green-700 mr-2">
              [done]
            </span>
            <span className="font-bold">Gatsby Plugins</span>
            <span> set-up</span>
          </li>
          <li>
            <span className="uppercase font-bold text-green-700 mr-2">
              [done]
            </span>
            <span className="font-bold">ESLint</span>
            <span> set-up to use </span>
            <span className="font-bold">Airbnb styleguide</span>
          </li>
          <li>
            <span className="uppercase font-bold text-green-700 mr-2">
              [done]
            </span>
            <span className="font-bold">TailwindCSS</span>
            <span> set-up and </span>
            <span className="font-bold">tailwind.config.js</span>
            <span> initialized</span>
          </li>
          <li>
            <span className="uppercase font-bold text-green-700 mr-2">
              [done]
            </span>
            <span className="font-bold">Purging</span>
            <span> set-up with </span>
            <span className="font-bold">PostCSS </span>
            <span> and </span>
            <span className="font-bold">PurgeCSS</span>
          </li>
          <li>
            <span className="uppercase font-bold text-green-700 mr-2">
              [done]
            </span>
            <span className="font-bold">SEO</span>
            <span> set-up</span>
          </li>
          <li>
            <span className="uppercase font-bold text-green-700 mr-2">
              [done]
            </span>
            <span className="font-bold">Scripts</span>
            <span> created</span>
          </li>
          <li>
            <span className="uppercase font-bold text-green-700 mr-2">
              [done]
            </span>
            <span className="font-bold">Folder Structure</span>
            <span> created</span>
          </li>
          <li>
            <span className="uppercase font-bold text-green-700 mr-2">
              [done]
            </span>
            <span className="font-bold">.gitignore</span>
            <span> created</span>
          </li>
          <li>
            <span className="uppercase font-bold text-blue-700 mr-2">
              [pending]
            </span>
            <span>Custom project modifications as per need</span>
          </li>
        </ul>
        <ul className="lg:w-1/2 p-4">
          <h3 className="font-bold text-2xl text-gray-600">Instructions</h3>
          <li>
            <span>Modify </span>
            <span className="font-bold">package.json</span>
            <span> fields as per your project needs.</span>
          </li>
          <li>
            <span>Modify </span>
            <span className="font-bold">.prettierrc</span>
            <span> as per your project needs.</span>
          </li>
          <li>
            <span>Generic </span>
            <span className="font-bold">tsconfig.json</span>
            <span> file has been set up, un-comment as per your needs.</span>
          </li>
          <li>
            <span>Files </span>
            <span className="font-bold">
              gatsby-browser.js, gatsby-config.js, gatsby-node.js, gatsby-ssr.js
            </span>
            <span> may need modifications.</span>
          </li>
          <li>
            <span>Instructions for setting up SEO can be found at </span>
            <a
              href="https://github.com/HelixW/gatsby-typescript-tailwind-starter/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline cursor-pointer"
            >
              https://github.com/HelixW/gatsby-typescript-tailwind-starter/issues
            </a>
          </li>
          <li>
            <span>Want a new feature? Request a new feature at </span>
            <a
              href="https://github.com/HelixW/gatsby-typescript-tailwind-starter/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline cursor-pointer"
            >
              https://github.com/HelixW/gatsby-typescript-tailwind-starter/issues
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl text-center font-bold my-4 py-8 px-12 sm:px-16 border-4 border-white rounded-lg text-white neon">
          Happy Hacking
        </h1>
      </div>
    </main>
  </>
)

export default App
