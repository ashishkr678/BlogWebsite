import React from 'react';
import frameImage from '../assets/frame.png';
import SignupForm from './SignupForm';

const Template = ({title, image, setIsLoggedIn}) => {
    return (
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
            
            <div className="w-11/12 max-w-[450px] mx-0 text-white">

                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] mb-4">
                    {title}
                </h1>

                <SignupForm setIsLoggedIn={setIsLoggedIn}/>

            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImage} 
                    alt='pattern'
                    width={558}
                    height={504}
                    loading='lazy'
                />

                <img src={image} 
                    alt='Students'
                    width={558}
                    height={490}
                    loading='lazy'
                    className="absolute -top-4 right-4 "
                />
            </div>

        </div>
    );
};

export default Template;