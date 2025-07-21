import styles from "./Testimonials.module.scss";
import Heading from "../Heading/Heading";

const testimonialsData = [
  {
    id: 1,
    userImage: "/images/users/user1.jpg",
    userName: "Marcus, 24",
    userText:
      "I found this weird gadget on Getiow that nobody had ever seen before. Now everyone at work asks me where I get my stuff. It's like having a secret weapon for standing out.",
  },
  {
    id: 2,
    userImage: "/images/users/user2.jpg",
    userName: "Alex, 27",
    userText:
      "Gave my girlfriend a gift I found on Getiow and she literally said 'Where the hell did you get that?' Best reaction ever. My taste level just went through the roof.",
  },
  {
    id: 3,
    userImage: "/images/users/user3.jpg",
    userName: "David, 22",
    userText:
      "I used to blend into the background at parties. Now I pull out something from Getiow and suddenly I'm the guy everyone wants to talk to. It's crazy how the right objects change everything.",
  },
  {
    id: 4,
    userImage: "/images/users/user4.jpg",
    userName: "Luis, 29",
    userText:
      "Getiow finds stuff I didn't even know existed. Every purchase feels like discovering a treasure. My friends think I have some secret insider knowledge about cool products.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.testimonials}>
        <div className={styles.titleBox}>
          <Heading type="h2">What our customers say</Heading>
          <p>
            Our customers love us! Here are some of the things they have to say
            about our products and service. We take pride in providing
            exceptional quality and customer satisfaction, and we are thrilled
            to share their feedback with you.
          </p>
        </div>

        <div className={styles.testimonialsBox}>
          <ul>
            {testimonialsData.map((testimonial) => (
              <li key={testimonial.id}>
                <Testimonial
                  key={testimonial.id}
                  userImage={testimonial.userImage}
                  userName={testimonial.userName}
                  userText={testimonial.userText}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonial({ userImage, userName, userText }) {
  return (
    <div className={styles.testimonial}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">
        <path d="M79 144.11c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L103.1 50.31C75.18 62.56 56.9 76.59 43.81 95.82c-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79zm152 0c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L255.1 50.31c-27.92 12.25-46.2 26.28-59.29 45.51-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79z"></path>
      </svg>

      <p>{userText}</p>

      <div className={styles.userInfo}>
        <img src={userImage} alt={userName} />
        <span>{userName}</span>
      </div>
    </div>
  );
}

export default Testimonials;
