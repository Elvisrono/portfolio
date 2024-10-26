import React from 'react'
import elvoh from '../../assets/images/elvoh.jpg'

const Hero = () => {
  return (
    <section className='container md:pt-16  pt-4  min-h-screen' id='home'>
        <div className='w-full md:basis-2/3'>
            <p 
                data-aos='fade-right'
                data-aos-duration='1500'
                className='text-headingColor font-[600] md:text-[26px] text-[20px]'
            
            >
                Hello welcome
            </p>
            <h1
                className='text-headingColor font-[800] text-[1.5rem] sm:text-[38px] leading-[35px] sm:leading-[46px] mt-3' 
            
            > 
                I,m Elvis Rono <br />
                Software Engineer
            </h1>

            <p className='flex gap-2 text-headingColor mt-6 font-[500] text-[15px] sm:text-[18px] leading-7 sm:pl-0 sm:pr-10'>
                <span>
                    <i class='ri-apps-2-line'></i>
                </span>
                I'm a seasoned, certified software Engeener.
            </p>

            <div className='flex items-center gap-7 mt-7'>
                <a href="#contact">
                    <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-3 px-6 rounded-[9px]'>
                        <i class='ri-mail-line'></i>Hire me
                    </button>
                </a>
                <a href="path/to/your/resume.pdf"
                    download
                    className='text-smallTextColor font-[600] text-[19px] border border-solid border-smallTextColor py-2 px-5 rounded-[9px]'
                >
                    See Portfolio
                </a>
            </div>
            <div className='flex items-center gap-9 mt-6'>
                <span className='text-smallTextColor text-[19px] font-[600]'>
                    Connect with me
                </span>
                <span>
                    <a href="https://github.com/Elvisrono"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='GitHub'
                        className='text-smallTextColor text-[30px] font-[600]'
                    
                    >
                        <i class= 'ri-github-fill'></i>
                        <span className='sr-only'>Github</span>
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/elvisrono/"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'
                        className='text-smallTextColor text-[30px] font-[600]'
                    
                    >
                        <i class='ri-linkedin-line'></i>
                        <span className='sr-only'>LinkedIn</span>
                    </a>
                </span>
            </div>
        </div>

        <div className='basis-1/3 mt-10 sm:mt-0'>
            <figure className='flex items-center justify-center'>
                <img className='rounded-full' src={elvoh} alt="rono" />
            </figure>
        </div>
    </section>
  )
}

export default Hero
