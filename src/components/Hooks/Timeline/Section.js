import React from 'react'

import {
	Container,
	YearContent,
	BodyContent,
	Section,
	Description,
} from 'vertical-timeline-component-react';

const SectionHooks = ({yearStart,title,subtitle,description,now}) => {
  return (
    <Container>
    <YearContent startDate={yearStart}/>
    <BodyContent>
      <Section title={title}>
        <Description variant="subtitle" text={subtitle} />
        <Description text={description} />
      </Section>
    </BodyContent>
  </Container>
  )
}

export default SectionHooks