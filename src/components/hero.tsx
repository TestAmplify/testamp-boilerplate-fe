'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section className=' pb-8 relative'>
      {darkMode ? (
        <div className="bg-[url('/bg-pattern-img-dark.svg')] absolute w-full h-full">
          <div className='absolute inset-0 bg-gradient-to-b from-white/5 to-white/40'></div>
        </div>
      ) : (
        <div className="bg-[url('/bg-pattern.svg')] absolute w-full h-full">
          <div className='absolute inset-0 bg-gradient-to-b from-white/20 to-white/80'></div>
        </div>
      )}

      <div className='h-full py-8 md:py-[5.3rem]'>
        <div className='container flex-col -space-y-12 md:space-y-0 flex md:flex-row md:justify-between md:items-center gap-20'>
          <div className='w-full md:w-2/3  lg:justify-start relative pt-10 lg:pt-20'>
            <div className='flex items-center w-full mx-auto max-w-[16.5rem] md:ml-0 md:max-w-[17.3rem] border border-gray-400 rounded-[1.5rem] '>
              <div className='p-[0.1rem] flex items-center'>
                <span className='rounded-2xl bg-primary text-gray-300 text-xs py-[0.45rem] px-[0.5rem] lg:px-[0.7rem] dark:bg-[#142D84]'>
                  What&apos;s New?
                </span>
                <div className='flex gap-2'>
                  <span className='text-xs ml-2 flex items-center'>
                    Get schooled with AI
                  </span>

                  <Image
                    src='/arrow-hero.svg'
                    alt='arrow-hero'
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <div className='py-4'>
              <h1 className='text-xl md:text-3xl text-center md:text-start lg:text-4xl font-medium tracking-tight'>
                <span className='mr-1 md:mr-0 md:block'>Lorem Ipsum</span>
                <span className='md:block'>Lorem Ipsum</span>
                <span className='md:block'>Lorem ipsum ipsum dolor sit.</span>
              </h1>
            </div>

            <p className='text-sm text-muted-foreground text-center md:text-start dark:text-white/80 font-[500]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              rerum odit incidunt fuga doloribus accusantium inventore
              consequuntur nihil voluptates nulla, magni illo autem asperiores
              quia nisi officiis explicabo rem mollitia.
            </p>

            <div className='flex mt-5 lg:mt-6 justify-center md:justify-start flex-row items-center space-x-1 md:space-x-3 mb-10'>
              <div>
                <Link href='/signup' className={`w-full md:w-1/3 inline-block`}>
                  <Button
                    variant='primary'
                    size='lg'
                    className='px-6 py-1 sm:py-2 lg:px-[2.1rem] font-semibold'
                  >
                    Get Started
                  </Button>
                </Link>
              </div>

              <div>
                <Link href='/login'>
                  <Button className='space-x-1 hover:underline hover:text-primary dark:hover:text-[#0E204E] dark:text-white'>
                    {darkMode ? (
                      <Image
                        src='/play-button-dark.svg'
                        alt='play button'
                        width={30}
                        height={30}
                        priority
                      />
                    ) : (
                      <Image
                        src='/play-button.svg'
                        alt='play button'
                        width={30}
                        height={30}
                        priority
                      />
                    )}
                    <span>See How it works</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className='h-full md:w-2/3 z-10 ml-auto'>
            {darkMode ? (
              <Image
                src='/placeholder.jpg'
                alt='hero image'
                width={500}
                height={500}
                priority
              />
            ) : (
              <Image
                src='/placeholder.jpg'
                alt='hero image'
                width={500}
                height={500}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
