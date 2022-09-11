import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import { Navigate, useNavigate } from 'react-router-dom';
const Cost = ({pricingRef}) => {
    const navigate = useNavigate()
    return (
        <div className="w-screen min-h-screen py-20 bg-baby_sky" ref={pricingRef}>
            <h1 className="text-6xl font-bold text-center mx-56">
                Take the next step and <span className="text-baby_pink">invest in a better you</span>
            </h1>
            <div className="w-full px-20 mt-20 flex justify-between space-x-20 items-center">
                <div className="border-2 border-gray-100 w-[400px] flex flex-col items-center space-y-4 py-10 rounded-3xl shadow-xl bg-baby_gray justify-between h-[420px]">
                    <div>
                        <h1 className="text-baby_pink text-xl font-bold text-center">MONTHLY</h1>
                        <h1 className="text-black font-bold text-4xl text-center mt-3"><span className="text-md relative -top-2 mr-2">$</span>39 / month</h1>
                        <h1 className="text-center text-4xl text-gray-800">-</h1>
                        <h1 className="text-center px-20 text-xl font-light">You're ready to upskill and advance your career</h1>
                    </div>
                    <button className='baby-btn' onClick={()=>navigate("/payment" , {state : {amount : 39 , time : "monthly"}})}>START LEARNING NOW</button>
                </div>
                <div className=" w-[400px] flex flex-col items-center  rounded-3xl shadow-xl bg-baby_gray h-[480px]">
                    <div className="w-full bg-baby_pink text-white text-xl flex justify-center rounded-tr-3xl rounded-tl-3xl p-3">
                        Save 40% a year (that's $189) vs. monthly
                    </div>
                    <div className="w-full h-full border-2 border-baby_pink rounded-br-3xl rounded-bl-3xl  flex flex-col items-center justify-between">
                        <h1 className="text-baby_pink text-xl font-bold text-center">ANNUAL</h1>
                        <h1 className="text-black font-bold text-4xl text-center mt-3"><span className="text-md relative -top-2 mr-2">$</span>279 / year</h1>
                        <h1 className="text-lg font-bold text-center mt-1 text-gray-800">$23 / month</h1>
                        <h1 className="text-center text-4xl text-gray-800">-</h1>
                        <h1 className="text-center px-10 text-xl font-light">You're committed to getting hired and starting a career in tech</h1>
                        <button className='baby-btn mb-6' onClick={()=>navigate("/payment" , {state : {amount : 279 , time : "year"}})}>START LEARNING NOW</button>
                    </div>
                </div>
                <div className="border-2 border-gray-100 w-[400px] flex flex-col items-center space-y-4 py-10 rounded-3xl shadow-xl bg-baby_gray h-[420px]">
                    <h1 className="text-baby_pink text-xl font-bold text-center">LIFETIME</h1>
                    <h1 className="text-black font-bold text-4xl text-center mt-3"><span className="text-md relative -top-2 mr-2">$</span>999 </h1>
                    <h1 className="text-center text-2xl text-gray-800">Only pay once, ever</h1>
                    <h1 className="text-center text-4xl text-gray-800">-</h1>
                    <h1 className="text-center px-20 text-xl font-light">You're serious about advancing your career and never getting left behind</h1>
                    <button className='baby-btn' onClick={()=>navigate("/payment" , {state : {amount :999 , time : "yearly"}})}>START LEARNING NOW</button>
                </div>
            </div>
            <div className='flex flex-col items-center w-screen py-20 bg-baby_sky'>
                <h1 className="text-center text-baby_pink"><KeyboardArrowDownIcon fontSize="large" /></h1>
                <h1 className="text-5xl text-center font-bold ">Every ZTM membership includes:</h1>
                <div className="grid grid-cols-3 w-full gap-9  mt-7 py-10 px-28">
                    <div className="flex space-x-5 items-center">
                        <span className="h-8 flex justify-center items-center p-1 bg-baby_pink rounded-full text-white ">
                            <DoneIcon />
                        </span>
                        <div className="text-2xl font-light">
                            Unlimited access to all courses, workshops, and career paths
                        </div>
                    </div>

                    <div className="flex space-x-5 items-center">
                        <span className="h-8 flex justify-center items-center p-1 bg-baby_pink rounded-full text-white ">
                            <DoneIcon />
                        </span>
                        <div className="text-2xl font-light">
                            Invite to private Discord with 300,000+ members
                        </div>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <span className="h-8 flex justify-center items-center p-1 bg-baby_pink rounded-full text-white ">
                            <DoneIcon />
                        </span>
                        <div className="text-2xl font-light">
                            Access to private Linkedin networking group
                        </div>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <span className="h-8 flex justify-center items-center p-1 bg-baby_pink rounded-full text-white ">
                            <DoneIcon />
                        </span>
                        <div className="text-2xl font-light">
                            Custom ZTM course completion certificates
                        </div>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <span className="h-8 flex justify-center items-center p-1 bg-baby_pink rounded-full text-white ">
                            <DoneIcon />
                        </span>
                        <div className="text-2xl font-light">
                            Download all lessons for offline learning
                        </div>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <span className="h-8 flex justify-center items-center p-1 bg-baby_pink rounded-full text-white ">
                            <DoneIcon />
                        </span>
                        <div className="text-2xl font-light">
                            Unlimited, priority access to all future courses, content, and features
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex space-x-4 items-center mt-10">
                        <svg className="" width="150" height="150" viewBox="0 0 113 138" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.04918 13.5734C6.55032 13.5734 4.52459 15.5991 4.52459 18.098V128.95C4.52459 131.449 6.55032 133.475 9.04918 133.475H104.066C106.564 133.475 108.59 131.449 108.59 128.95V18.098C108.59 15.5992 106.564 13.5734 104.066 13.5734H88.0485V9.04883H104.066C109.063 9.04883 113.115 13.1003 113.115 18.098V128.95C113.115 133.948 109.063 138 104.066 138H9.04918C4.05146 138 0 133.948 0 128.95V18.098C0 13.1003 4.05146 9.04883 9.04918 9.04883H26.1521V13.5734H9.04918Z" fill="#636363"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.3115 24.8849C11.3115 22.3861 13.3372 20.3604 15.8361 20.3604H26.8782V24.8849L15.8361 24.8849V122.164H97.2787V24.8849H86.2365V20.3604H97.2787C99.7776 20.3604 101.803 22.3861 101.803 24.8849V122.164C101.803 124.662 99.7776 126.688 97.2787 126.688H15.8361C13.3372 126.688 11.3115 124.662 11.3115 122.164V24.8849Z" fill="#636363"></path><path d="M51.9592 59.5337C52.7434 61.3375 53.1356 63.4158 53.1356 65.7686C53.1356 67.8861 52.7827 69.8468 52.0768 71.6506C51.1357 74.1602 49.5476 76.1209 47.3124 77.5325C45.1165 78.9442 42.5088 79.65 39.4894 79.65C36.5092 79.65 33.8819 78.905 31.6076 77.4149C29.3724 75.9248 27.7647 73.9053 26.7844 71.3565C26.2354 69.8272 25.9217 68.1802 25.8432 66.4156C25.8432 65.9451 26.0785 65.7098 26.5491 65.7098H33.4898C33.9604 65.7098 34.1956 65.9451 34.1956 66.4156C34.3525 67.7096 34.5682 68.6704 34.8427 69.2978C35.1956 70.3173 35.7642 71.1212 36.5484 71.7094C37.3719 72.2584 38.3326 72.5329 39.4306 72.5329C41.6265 72.5329 43.1362 71.5721 43.9597 69.6507C44.5087 68.4743 44.7832 67.1018 44.7832 65.5333C44.7832 63.6903 44.4891 62.1806 43.9009 61.0042C42.999 59.1612 41.4893 58.2397 39.3718 58.2397C38.9404 58.2397 38.4895 58.3769 38.0189 58.6514C37.5484 58.8867 36.9798 59.2396 36.3131 59.7102C36.1563 59.8278 35.9994 59.8866 35.8426 59.8866C35.6073 59.8866 35.4309 59.769 35.3132 59.5337L31.8429 54.6517C31.7644 54.534 31.7252 54.3968 31.7252 54.2399C31.7252 54.0047 31.8036 53.8086 31.9605 53.6517L41.3128 45.4758C41.3912 45.3974 41.4109 45.319 41.3716 45.2405C41.3716 45.1621 41.3128 45.1229 41.1952 45.1229H27.3726C27.1765 45.1229 27 45.0641 26.8432 44.9464C26.7255 44.7896 26.6667 44.6131 26.6667 44.4171V38.7115C26.6667 38.5155 26.7255 38.3586 26.8432 38.241C27 38.0841 27.1765 38.0057 27.3726 38.0057H51.9004C52.0964 38.0057 52.2533 38.0841 52.3709 38.241C52.5278 38.3586 52.6062 38.5155 52.6062 38.7115V45.1817C52.6062 45.4954 52.469 45.7895 52.1945 46.064L44.4891 53.1224C44.4107 53.2008 44.3714 53.2792 44.3714 53.3577C44.4107 53.4361 44.5087 53.4753 44.6655 53.4753C48.0771 54.1419 50.5083 56.1614 51.9592 59.5337Z" fill="#636363"></path><path d="M72.3719 79.8265C68.0585 79.8265 64.6469 78.6305 62.1373 76.2385C59.6276 73.8073 58.3728 70.5134 58.3728 66.3568V50.8284C58.3728 46.7502 59.6276 43.5152 62.1373 41.1232C64.6469 38.7312 68.0585 37.5352 72.3719 37.5352C76.6853 37.5352 80.0969 38.7312 82.6065 41.1232C85.1554 43.5152 86.4298 46.7502 86.4298 50.8284V66.3568C86.4298 70.5134 85.1554 73.8073 82.6065 76.2385C80.0969 78.6305 76.6853 79.8265 72.3719 79.8265ZM72.3719 72.7093C74.1365 72.7093 75.5286 72.1799 76.5481 71.1212C77.6069 70.0232 78.1362 68.5723 78.1362 66.7685V50.5931C78.1362 48.7893 77.6069 47.358 76.5481 46.2993C75.5286 45.2013 74.1365 44.6523 72.3719 44.6523C70.6465 44.6523 69.2545 45.2013 68.1957 46.2993C67.1762 47.358 66.6664 48.7893 66.6664 50.5931V66.7685C66.6664 68.5723 67.1762 70.0232 68.1957 71.1212C69.2545 72.1799 70.6465 72.7093 72.3719 72.7093Z" fill="#636363"></path><path d="M26.6992 110.852C26.6087 110.852 26.5273 110.824 26.4549 110.77C26.4006 110.698 26.3734 110.616 26.3734 110.526V92.1741C26.3734 92.0836 26.4006 92.0112 26.4549 91.9569C26.5273 91.8845 26.6087 91.8483 26.6992 91.8483H33.4861C34.8435 91.8483 36.0289 92.0927 37.0424 92.5813C38.074 93.0519 38.8703 93.7215 39.4314 94.5902C39.9924 95.459 40.273 96.4634 40.273 97.6036V105.096C40.273 106.237 39.9924 107.241 39.4314 108.11C38.8703 108.978 38.074 109.657 37.0424 110.146C36.0289 110.616 34.8435 110.852 33.4861 110.852H26.6992ZM30.2012 107.431C30.2012 107.522 30.2465 107.567 30.337 107.567H33.6218C34.4543 107.567 35.124 107.286 35.6307 106.725C36.1556 106.164 36.4271 105.413 36.4452 104.472V98.228C36.4452 97.2869 36.1827 96.5358 35.6579 95.9748C35.1511 95.4137 34.4634 95.1332 33.5947 95.1332H30.337C30.2465 95.1332 30.2012 95.1784 30.2012 95.2689V107.431Z" fill="#636363"></path><path d="M54.2018 110.852C54.0208 110.852 53.9031 110.761 53.8489 110.58L53.0344 107.92C52.9982 107.847 52.953 107.811 52.8987 107.811H46.2204C46.1661 107.811 46.1209 107.847 46.0847 107.92L45.2974 110.58C45.2431 110.761 45.1254 110.852 44.9445 110.852H41.4967C41.3881 110.852 41.3067 110.824 41.2524 110.77C41.1981 110.698 41.189 110.598 41.2252 110.472L47.0891 92.1198C47.1434 91.9388 47.261 91.8483 47.442 91.8483H51.7042C51.8852 91.8483 52.0028 91.9388 52.0571 92.1198L57.921 110.472C57.9391 110.508 57.9481 110.553 57.9481 110.607C57.9481 110.77 57.8486 110.852 57.6495 110.852H54.2018ZM47.062 104.689C47.0439 104.798 47.0801 104.852 47.1706 104.852H51.9485C52.0571 104.852 52.0933 104.798 52.0571 104.689L49.6138 96.6263C49.5957 96.5539 49.5686 96.5268 49.5324 96.5449C49.4962 96.5449 49.469 96.572 49.4509 96.6263L47.062 104.689Z" fill="#636363"></path><path d="M63.0792 110.824C62.9887 110.824 62.9073 110.797 62.8349 110.743C62.7806 110.671 62.7535 110.589 62.7535 110.499V103.63C62.7535 103.558 62.7444 103.504 62.7263 103.467L57.1339 92.2284C57.0977 92.156 57.0796 92.1017 57.0796 92.0655C57.0796 91.9207 57.1792 91.8483 57.3782 91.8483H60.7988C60.9798 91.8483 61.1065 91.9298 61.1789 92.0927L64.5723 99.3139C64.6266 99.4225 64.6809 99.4225 64.7352 99.3139L68.1287 92.0927C68.2011 91.9298 68.3278 91.8483 68.5087 91.8483H71.9836C72.1103 91.8483 72.1918 91.8845 72.2279 91.9569C72.2822 92.0112 72.2822 92.1017 72.2279 92.2284L66.5813 103.467C66.5632 103.504 66.5541 103.558 66.5541 103.63V110.499C66.5541 110.589 66.5179 110.671 66.4455 110.743C66.3912 110.797 66.3188 110.824 66.2283 110.824H63.0792Z" fill="#636363"></path><path d="M80.4235 111.069C78.9757 111.069 77.7088 110.843 76.6229 110.39C75.537 109.92 74.6954 109.259 74.0982 108.408C73.519 107.54 73.2294 106.535 73.2294 105.395V104.798C73.2294 104.707 73.2566 104.635 73.3109 104.581C73.3833 104.508 73.4647 104.472 73.5552 104.472H76.65C76.7405 104.472 76.8129 104.508 76.8672 104.581C76.9396 104.635 76.9758 104.707 76.9758 104.798V105.205C76.9758 105.929 77.3106 106.544 77.9803 107.051C78.6499 107.54 79.5548 107.784 80.695 107.784C81.6542 107.784 82.3691 107.585 82.8397 107.187C83.3102 106.77 83.5455 106.264 83.5455 105.666C83.5455 105.232 83.4007 104.87 83.1111 104.581C82.8216 104.273 82.4234 104.01 81.9166 103.793C81.428 103.558 80.6407 103.241 79.5548 102.843C78.3422 102.427 77.3106 102.002 76.46 101.567C75.6275 101.133 74.9216 100.545 74.3425 99.8026C73.7814 99.0424 73.5009 98.1104 73.5009 97.0064C73.5009 95.9205 73.7814 94.9703 74.3425 94.1559C74.9035 93.3415 75.6818 92.7171 76.6772 92.2827C77.6726 91.8483 78.8218 91.6312 80.1249 91.6312C81.5004 91.6312 82.722 91.8755 83.7898 92.3641C84.8757 92.8528 85.7173 93.5405 86.3146 94.4274C86.9299 95.2961 87.2376 96.3096 87.2376 97.4679V97.8751C87.2376 97.9656 87.2014 98.047 87.129 98.1194C87.0747 98.1737 87.0023 98.2009 86.9118 98.2009H83.7898C83.6993 98.2009 83.6179 98.1737 83.5455 98.1194C83.4912 98.047 83.4641 97.9656 83.4641 97.8751V97.6579C83.4641 96.8978 83.1473 96.2553 82.5139 95.7304C81.8985 95.1875 81.0479 94.916 79.962 94.916C79.1114 94.916 78.4418 95.097 77.9531 95.459C77.4826 95.8209 77.2473 96.3186 77.2473 96.9521C77.2473 97.4045 77.383 97.7846 77.6545 98.0923C77.9441 98.4 78.3603 98.6805 78.9033 98.9338C79.4643 99.1691 80.324 99.4949 81.4823 99.9112C82.7673 100.382 83.7717 100.798 84.4957 101.16C85.2377 101.522 85.8983 102.065 86.4774 102.789C87.0747 103.495 87.3733 104.418 87.3733 105.558C87.3733 107.259 86.7489 108.607 85.5001 109.603C84.2513 110.58 82.5591 111.069 80.4235 111.069Z" fill="#636363"></path><path fillRule="evenodd" clipRule="evenodd" d="M31.6721 24.8852V6.78689C31.6721 5.53745 30.6593 4.52459 29.4098 4.52459C28.1604 4.52459 27.1475 5.53745 27.1475 6.78689V24.8852C27.1475 26.1347 28.1604 27.1475 29.4098 27.1475C30.6593 27.1475 31.6721 26.1347 31.6721 24.8852ZM29.4098 0C25.6615 0 22.623 3.03859 22.623 6.78689V24.8852C22.623 28.6335 25.6615 31.6721 29.4098 31.6721C33.1581 31.6721 36.1967 28.6335 36.1967 24.8852V6.78689C36.1967 3.03859 33.1581 0 29.4098 0Z" fill="#636363"></path><path fillRule="evenodd" clipRule="evenodd" d="M85.9672 24.8852V6.78689C85.9672 5.53745 84.9543 4.52459 83.7049 4.52459C82.4555 4.52459 81.4426 5.53745 81.4426 6.78689V24.8852C81.4426 26.1347 82.4555 27.1475 83.7049 27.1475C84.9543 27.1475 85.9672 26.1347 85.9672 24.8852ZM83.7049 0C79.9566 0 76.918 3.03859 76.918 6.78689V24.8852C76.918 28.6335 79.9566 31.6721 83.7049 31.6721C87.4532 31.6721 90.4918 28.6335 90.4918 24.8852V6.78689C90.4918 3.03859 87.4532 0 83.7049 0Z" fill="#636363"></path><path fillRule="evenodd" clipRule="evenodd" d="M79.1803 13.5734H33.9344V9.04883H79.1803V13.5734Z" fill="#636363"></path><path fillRule="evenodd" clipRule="evenodd" d="M79.1803 24.8849H33.9344V20.3604H79.1803V24.8849Z" fill="#636363"></path></svg>
                        <div className="flex flex-col space-y-3">
                            <span className="text-gray-600 text-lg font-bold">100% RISK FREE</span>
                            <span className="text-black font-bold text-xl">
                                We know you'll love ZTM. That's why we provide a no hassle, 30-day money back guarantee.
                            </span>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Cost