import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';

function NewMeetupsPage() {

    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-mini-project-practice-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', { replace: true }); // navigate to the root path
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>

    );
}

export default NewMeetupsPage;