import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Heading } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './Work.css';

function Work() {
  return (
    <Carousel
      nextIcon={<FaArrowRight />}
      prevIcon={<FaArrowLeft />}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gravatar.com/avatar/9fe92a893b3879a72ea0c451d504a3fb?s=512"
          alt="First slide"
        />
        <Carousel.Caption>
          <Accordion allowToggle>
            <AccordionItem>
                <AccordionButton>
                  <Heading as="h3">
                    Second slide label
                  </Heading>
                </AccordionButton>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                <Divider />
                hola que tal
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gravatar.com/avatar/9fe92a893b3879a72ea0c451d504a3fb?s=512"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gravatar.com/avatar/9fe92a893b3879a72ea0c451d504a3fb?s=512"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Work;
