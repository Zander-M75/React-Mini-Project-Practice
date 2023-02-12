const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_the_United_States_%281902%E2%80%931994%29.svg/1200px-Flag_of_the_United_States_%281902%E2%80%931994%29.svg.png',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_the_United_States_%281902%E2%80%931994%29.svg/1200px-Flag_of_the_United_States_%281902%E2%80%931994%29.svg.png',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },
    {
        id: 'm3',
        title: 'This is a third meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_the_United_States_%281902%E2%80%931994%29.svg/1200px-Flag_of_the_United_States_%281902%E2%80%931994%29.svg.png',
        address: 'Some address 15, 12345 Some City',
        description: 'This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!'

    }
]


function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups</h1>
            <ul>
                {DUMMY_DATA.map((meetup) => {
                    return <li key={meetup.id}>{meetup.title}</li>;
                })}
            </ul>
        </section>
    );
}

export default AllMeetupsPage;