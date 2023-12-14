import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CTAButton from '../Components/core/HomePage/Button';
import HighlightText from '../Components/core/HomePage/HighlightText';
import Banner from "../assets/Images/banner2.mp4"
import InstructorSection from '../Components/core/HomePage/InstructorSection';
import ExploreMore from '../Components/core/HomePage/ExploreMore';
import { useDispatch } from 'react-redux';
import { setProgress } from "../slices/loadingBarSlice"
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import CourseSlider from '../Components/core/Catalog/CourseSlider';
import { useEffect } from 'react';
import { useState } from 'react';
import RatingSlider from '../Components/core/Ratings/RatingSlider';


function Home() {
    const [CatalogPageData, setCatalogPageData] = useState(null);
    const categoryID = "65791508d206f44a24ff3d3f";

    useEffect(() => {
        const fetchCatalogPageData = async () => {

            const result = await getCatalogaPageData(categoryID, dispatch);
            setCatalogPageData(result);
            // console.log("page data",CatalogPageData);

        }
        if (categoryID) {
            fetchCatalogPageData();
        }
    }, [categoryID])
    const dispatch = useDispatch();
    return (
        <div>
            <div className=' mx-auto relative flex flex-col w-11/12 items-center justify-between text-white '>
                <Link onClick={() => { dispatch(setProgress(100)) }} to={"/signup"}>
                    <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold transition-all duration-200 hover: scale-95 w-fit max-w-maxContent'>
                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p><FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className='text-center text-3xl md:text-4xl font-semibold mt-7'>
                    Welcome to <HighlightText text={"Our English Course Platform"} />
                </div>
                <div className=' mt-4 w-[90%] text-left md:text-center text-sm md:text-lg font-bold text-richblack-300'>
                    Embark on a transformative journey to master the English language with our comprehensive and interactive online courses. Whether you're a beginner eager to start your linguistic journey or seeking to enhance your proficiency, our platform offers a diverse range of lessons tailored to various proficiency levels.
                </div>

                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"} >Study Now</CTAButton>
                </div>

                <div className='mx-3 my-12 shadow-blue-200 w-[70%] relative'>
                    <div className='grad2 -top-10 w-[800px]'></div>
                    <video className='video'
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>


                <div className=' mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
                    <h2 className='section_heading mb-6 md:text-3xl text-xl'>
                        Most Popular Courses
                    </h2>
                    <CourseSlider Courses={CatalogPageData?.selectedCourses} />
                </div>
                <ExploreMore />


            </div>
            <div className='hidden lg:block lg:h-[200px]'></div>


            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage_bg h-[310px]'>

                    <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                        <div className='h-[150px]'></div>
                        <div className='flex flex-row gap-7 text-white '>
                            <CTAButton active={true} linkto={"/catalog/Web Developement"}>
                                <div className='flex items-center gap-3' >
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>

                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div>
                                    Learn more
                                </div>
                            </CTAButton>
                        </div>

                    </div>


                </div>



                <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

                    <InstructorSection />

                    {/* Review Slider here */}
                </div>
                <div className=' mb-16 mt-3'>
                    <h2 className='text-center text-2xl md:text-4xl font-semibold mt-8 text-dark mb-5'>Reviews from other learners</h2>
                    <RatingSlider />
                </div>
            </div>
        </div>
    )
}

export default Home