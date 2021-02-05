import React, {useState} from "react";
import './MyProfilePage.css'


function MyProfilePage() {

    return (
        <>
            <img src="/img/profileimage.png" alt="Profile" className='profile-image'/>
            <h1>Elon, 27</h1>
            {/*<div className='center-hobbies'>*/}
            {/*    <div className='hobbies-items'>*/}
            {/*        <span className='hobby'>Hobby</span>*/}
            {/*        <span className='hobby'>Longer hobby</span>*/}
            {/*        <span className='hobby'>Even longer hobby</span>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className='my-profile-section'>
                <label htmlFor='bio' className='left-label'>About me</label>
                <textarea id='bio' className='bio-text' defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                <FirstBlockSelection />
                <SecondBlockSelection />
            </div>

        </>
    )
}
export default MyProfilePage;

function FirstBlockSelection() {
    const [show, setShow] = useState(false)

    function onToggleShow() {
        setShow(!show);
    }

    return(
        <div className='dropdown'>
            <div onClick={onToggleShow}>Main information</div>
            <div className={`info-container ${show ? 'dropdown-content-show': 'dropdown-content-hide'}`}>
                <div className='d-block'>
                    <div className='d-flex row-info'>
                        <div className='looking-for-div'>
                            <label htmlFor='looking-for' className='left-label'>Looking for</label>
                            <select id="looking-for" className='select looking-for-select'>
                                <option>Serious relationship</option>
                                <option>Nothing serious</option>
                            </select>
                        </div>
                        <div className='nationality-div'>
                            <label htmlFor='nationality' className='left-label'>Nationality</label>
                            <select id='nationality' className='select nationality-select'>
                                <option>Albania</option>
                                <option>Armenia</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row-info'>
                    <div className='radio-gender'>
                        <input id="radio-1" type="radio" name="radio" value="1"/>
                        <label htmlFor="radio-1" className='gender-label'>Male</label>
                        <input id="radio-2" type="radio" name="radio" value="2"/>
                        <label htmlFor="radio-2" className='gender-label'>Female</label>
                        <button className='button-other'>Other</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


function SecondBlockSelection() {

    const [show, setShow] = useState(false)

    function onToggleShow() {
        setShow(!show);
    }

    return(
        <div className='dropdown'>
            <div onClick={onToggleShow}>Secondary information</div>
            <div className={`info-container ${show ? 'dropdown-content-show': 'dropdown-content-hide'}`}>
                <div className='d-block'>
                    <div className='d-flex row-info'>
                        <div className='sport-div'>
                            <label htmlFor='sport' className='left-label'>Sport</label>
                            <select id="sport" className='select'>
                                <option>Doing often</option>
                                <option>Doing rarely</option>
                                <option>What is sport?</option>
                            </select>
                        </div>
                        <div className='education-div'>
                            <label htmlFor='education' className='left-label'>Education</label>
                            <select id="education" className='select'>
                                <option>Doing often</option>
                                <option>Doing rarely</option>
                                <option>What is education?</option>
                            </select>
                        </div>
                        <div className='pets-div'>
                            <label htmlFor='pets' className='left-label'>Pets</label>
                            <select id="pets" className='select'>
                                <option>Doing often</option>
                                <option>Doing rarely</option>
                                <option>What is sport?</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex row-info'>
                        <div className='alcohol-div'>
                            <label htmlFor='alcohol' className='left-label'>Alcohol</label>
                            <select id="alcohol" className='select'>
                                <option>Doing often</option>
                                <option>Doing rarely</option>
                                <option>What is education?</option>
                            </select>
                        </div>
                        <div className='smoking-div'>
                            <label htmlFor='smoking' className='left-label'>Smoking</label>
                            <select id="smoking" className='select'>
                                <option>Doing often</option>
                                <option>Doing rarely</option>
                                <option>What is education?</option>
                            </select>
                        </div>
                        <div className='children-div'>
                            <label htmlFor='children' className='left-label'>Children</label>
                            <select id="children" className='select'>
                                <option>Doing often</option>
                                <option>Doing rarely</option>
                                <option>What is education?</option>
                            </select>
                        </div>
                    </div>
                    <div className='height-div'>
                        <label htmlFor='height' className='center-label'>Height (in cm)</label>
                        <input id='height' type="number" className='height-input'/>
                    </div>
                </div>
            </div>
        </div>
    )
}