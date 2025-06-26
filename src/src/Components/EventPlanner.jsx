import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            {/*Section for describing the  purpose or overview the of the app*/}
            <section className="description">
                 {/*Description here*/}
                 <p>
                    Plan and organize  your event effortlessly with Event Planner.from
                    birthdays to corporate meetings, we've got you covered.
                 </p>
                 <button className="get-started-button">Get Started </button>
            </section>

              {/*Section to list or categorize  different types of event*/}
            <section className="events_categories">       
              <ul>
                    <h2>Social Events</h2>
                    <li>Birthday parties</li>
                    <li>Anniversary celebration</li>
                    <li>Wedding reception</li>
                    <li>Baby shower</li>
                    <li>Graduation parties</li>
                    <li>Family reunions</li>
                </ul>
                 {/*Entertainment based event types*/}
                    <ul>   
                     <h2>Entertainment Events</h2>
                     <li>Concerts</li>
                     <li>Music festivals</li>
                     <li>Films screenings</li>
                     <li>Comedy shows</li>
                     <li>Art exhibition</li>
                     <li>Cultural events</li>
                 </ul>
                  {/*Community-focused event types*/}
                  <ul>   
                     <h2>Community Events</h2>
                     <li>Fundraising events</li>
                     <li>Charity galas</li>
                     <li>Volunteer drives</li>
                     <li>Neighborhood block parties</li>
                     <li>Community festivals</li>
                     <li>Cultural celebration</li>
                 </ul>

            </section>

                {/*Section to highlight app features or functionalities*/}
             <section className="features">
             <h1>Features</h1>
              {/*list of key platform*/}
              <ul>
                <li>Easy event creation and management</li>
                <li>Customizable even templates</li>
                <li>Gues list management</li>
                <li>Real-time collaboration</li>
                <li>Reminders and notification</li>                
              </ul>
            </section>

             {/*Section to showcase user reviews  or testimonials*/}
              <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeze.Highly recommended!"</p>
                    <p className="author">-Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">-Jhon Smith</p>
                </div>          
            </section>


               {/*Section to  provide contact information or a contact form*/}
             <section className="contact">           
            <h2>Contact Us</h2>           
            {/*Contact Form*/}
            <form>
                {/*Name Input Field*/}
                <input type="type" placeholder="Name"/>
                {/*Email Input Field*/}
                <input type="email" placeholder="Email"/>
                {/*Message textare*/}
                <textarea placeholder="Message"></textarea>
                {/*Submit Button*/}
                <button className="submit-button">Send</button>
            </form>
            </section>
        </div>
    );
};

export default EventPlanner;
