import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Best Weather`,
      desc: `We offer best package.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Explore the World, Rain or Shine - Your Adventure Awaits!`,
   },
   {
      imgUrl: customizationImg,
      title: 'According Budget',
      desc: `Tour package according your budget.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList