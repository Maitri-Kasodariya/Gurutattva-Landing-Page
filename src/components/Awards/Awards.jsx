import { React } from 'react'
import './Awards.css';

function Awards() {
  const awards = [
    {
      title: "Yog Sangam Patra",
      organization: "Ministry of Ayush, India",
      location: "New Delhi",
      year: "2025",
      description: "Honored for organising an event on International Yoga Day."
    },
    {
      title: "Global Peace Contributor",
      organization: "UNESCO",
      location: "Geneva",
      year: "2020",
      description: "Recognized for contributions toward mental wellness and global harmony."
    },
    {
      title: "Lifetime Achievement in Meditation",
      organization: "World Spiritual Forum",
      location: "Rishikesh",
      year: "2019",
      description: "Awarded for over 25 years of dedicated spiritual teaching and service."
    },
    {
      title: "Holistic Healing Certification",
      organization: "International Meditation Council",
      location: "Nepal",
      year: "2018",
      description: "Certified for integrating ancient techniques with modern holistic wellness."
    }
  ];

  return (
    <div className='Awards'>
      <h1>Awards and Recognitions</h1>
      <div className="award-list">
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            <h2>{award.title}</h2>
            <p><strong>Presented by:</strong> {award.organization}</p>
            <p><strong>Location:</strong> {award.location}</p>
            <p><strong>Year:</strong> {award.year}</p>
            <p className="description">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awards;
