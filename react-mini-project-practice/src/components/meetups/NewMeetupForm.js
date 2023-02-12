import { useRef } from 'react';

import classes from './NewMeetupForm.module.css';
import Card from '../userInterface/Card';

function NewMeetupFrom(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const eneteredTitle = titleInputRef.current.value;
        const eneteredImage = imageInputRef.current.value;
        const eneteredAddress = addressInputRef.current.value;
        const eneteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: eneteredTitle,
            image: eneteredImage,
            address: eneteredAddress,
            description: eneteredDescription,
        };

        props.onAddMeetup(meetupData)

    }



    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>

                <div className={classes.control}>
                    <label htmlFor="title">Meetup title</label>
                    <input type="text" required id='title' ref={titleInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Meetup image</label>
                    <input type="url" required id='image' ref={imageInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id='address' ref={addressInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
                </div>

                <div className={classes.actions}>
                    <button>
                        Add Meetup
                    </button>
                </div>

            </form>
        </Card>
    )
}

export default NewMeetupFrom;