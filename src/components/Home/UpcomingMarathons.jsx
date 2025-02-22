import EventCardImg from "../EventCard/EventCardImg";
import SectionTitle from "../shared/SectionTitle";
import sunrise from "../../assets/sunrise.jpg";
import foresttrail from "../../assets/foresttrail.jpg";
import islandrun from "../../assets/islandrun.png";
import lakeside from "../../assets/lakeside.png";
import cityrush from "../../assets/cityrush.png";
import snowrun from "../../assets/snowrun.png";

const UpcomingMarathons = () => {
    const marathons = [
        {
            _id: "1",
            image: sunrise,
            title: "Golden Sunrise Run",
            description: "Start your day with an energizing sunrise run.",
            location: "Oceanview, FL",
            marathonStartDate: "2025-03-20T00:00:00.000Z",
            startRegistrationDate: "2025-01-15T00:00:00.000Z",
            endRegistrationDate: "2025-03-10T00:00:00.000Z",
            runningDistance: "10km",
            totalRegistrationCount: 150,
        },
        {
            _id: "2",
            image: foresttrail,
            title: "Mystic Forest Run",
            description: "Run through enchanting forest trails with fresh air.",
            location: "Evergreen Woods, OR",
            marathonStartDate: "2025-04-25T00:00:00.000Z",
            startRegistrationDate: "2025-02-20T00:00:00.000Z",
            endRegistrationDate: "2025-04-15T00:00:00.000Z",
            runningDistance: "14km",
            totalRegistrationCount: 190,
        },
        {
            _id: "3",
            image: islandrun,
            title: "Island Escape Marathon",
            description: "Enjoy breathtaking coastal views on this island run.",
            location: "Paradise Isle, HI",
            marathonStartDate: "2025-05-30T00:00:00.000Z",
            startRegistrationDate: "2025-03-10T00:00:00.000Z",
            endRegistrationDate: "2025-05-20T00:00:00.000Z",
            runningDistance: "20km",
            totalRegistrationCount: 210,
        },
        {
            _id: "4",
            image: lakeside,
            title: "Lakeside Sprint",
            description: "Run along the peaceful and scenic lakeshore.",
            location: "Blue Lake, MN",
            marathonStartDate: "2025-06-18T00:00:00.000Z",
            startRegistrationDate: "2025-04-15T00:00:00.000Z",
            endRegistrationDate: "2025-06-05T00:00:00.000Z",
            runningDistance: "12km",
            totalRegistrationCount: 230,
        },
        {
            _id: "5",
            image: cityrush,
            title: "City Rush Marathon",
            description: "Feel the city’s energy as you race through urban streets.",
            location: "Downtown, TX",
            marathonStartDate: "2025-07-22T00:00:00.000Z",
            startRegistrationDate: "2025-05-10T00:00:00.000Z",
            endRegistrationDate: "2025-07-10T00:00:00.000Z",
            runningDistance: "25km",
            totalRegistrationCount: 270,
        },
        {
            _id: "6",
            image: snowrun,
            title: "Snowy Peaks Run",
            description: "Challenge yourself with this exhilarating snow-covered trail.",
            location: "Aspen Heights, CO",
            marathonStartDate: "2025-08-29T00:00:00.000Z",
            startRegistrationDate: "2025-06-15T00:00:00.000Z",
            endRegistrationDate: "2025-08-15T00:00:00.000Z",
            runningDistance: "18km",
            totalRegistrationCount: 250,
        },
    ];
    
    return (
        <section className="mt-10 md:mt-16 max-w-7xl mx-auto px-4">
            <SectionTitle title="Upcoming Marathons" subtitle="Join Our Upcoming Marathon Events" />
            <EventCardImg marathons={marathons} />
        </section>
    );
};

export default UpcomingMarathons;
