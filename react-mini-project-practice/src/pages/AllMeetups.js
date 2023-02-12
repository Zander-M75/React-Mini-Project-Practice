import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: require('../images/MSGRangers.jpeg'),
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: require('../images/dbzkame.jpg'),
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },
    {
        id: 'm3',
        title: 'This is a third meetup',
        image: require('../images/minecraft.jpeg'),
        address: 'Some address 15, 12345 Some City',
        description: 'This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!'

    }
]


function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    );
}

export default AllMeetupsPage;