import React from 'react'

const Footer = ({theme}) => {
  return (
    

<footer class="bg-[#27282F] ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="" class="flex items-center">
                  <img src="code.png" class="h-12 me-3" alt="Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> </span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-2">
              <div className='flex flex-col justify-start items-end'>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium flex flex-col justify-start items-end">
                      <li class="mb-4">
                          <text type='number'>+918770100421</text>
                      </li>
                      <li>
                          <a href="mailto:sanidhya626@gmail.com" class="hover:underline">sanidhya626@gmail.com</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Socials</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://www.linkedin.com/in/sanidhya-sharma-b1a51b198/" class="hover:underline ">Linked In</a>
                      </li>
                      <li>
                          <a href="https://github.com/sanidhya004" class="hover:underline">Github</a>
                      </li>
                  </ul>
              </div>
              
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://www.youtube.com/watch?v=7r77SocMOIA" class="hover:underline">May the force be with you</a>
          </span>
          
      </div>
    </div>
</footer>

  )
}

export default Footer