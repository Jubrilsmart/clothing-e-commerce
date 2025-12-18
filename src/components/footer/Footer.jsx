import React from 'react'
import Banner from '../../assets/footer.jpg'
import footerLogo from '../../assets/Logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
}

const footerLink = [
    {
        title: 'Home',
        link: '/#'
    },
    {
        title: 'About',
        link: '/#about'
    },
    {
        title: 'Contact',
        link: '/#contact'
    },
    {
        title: 'Blog',
        link: '/Blog#'
    },
    {
        title: 'Home',
        link: '/#'
    },
    
]

function Footer() {
  return (
    <div style={BannerImg} className='text-white mb-20'>
        <div className='container'>
            <div className='grid sm:grid-cols-3 py-44 pt-5'> 
                {/* company detail */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                        <img className='max-w-[50px]' src={footerLogo} alt="" />
                        Shopsy</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet corporis iusto veritatis.</p>
                </div>
                {/* footer link */}
                <div>
                    <div className='grid grid-cols-2 sm:grid-col'>
                        <div>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul>
                                {footerLink.map((link) => (
                                    <li key={link.title} className='cursor-pointer hover:text-[var(--primary)] hover:translate-x-1 duration-300 text-gray-200'>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                    {/* social links */} 
                    <div>
                        <div className='flex gap-6'>
                            <a href="#">
                                <FaInstagram className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl'/>
                            </a>
                        </div>
                        <div  className='space-y-4'>
                            <div className='flex items-center gap-3 mt-4'>
                                <FaLocationArrow />
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaMobileAlt />
                                <p>+234 9060245245</p>
                            </div>
                        </div>
                    </div>
                
            </div>
           
        </div>
    </div>
  )
}

export default Footer