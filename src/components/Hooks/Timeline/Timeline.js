import React from 'react'
import SectionHooks from './Section';
import {
	Timeline
} from 'vertical-timeline-component-react';
import { useThemeState } from "../../../store";

const Light = {
    yearColor: '#405b73',
    lineColor: '#d0cdc4',
    dotColor: '#262626',
    borderDotColor: '#d0cdc4',
    titleColor: '#405b73',
    subtitleColor: '#bf9765',
    textColor: '#262626',
};

const Dark = {
    yearColor: '#ADC0D1',
    lineColor: '#d0cdc4',
    dotColor: '#262626',
    borderDotColor: '#d0cdc4',
    titleColor: '#ADC0D1',
    subtitleColor: '#D9C2A5',
    textColor: '#BFBFBF',
};

const TimelineHook = ({ExperienceRoad}) => {
    const [state] = useThemeState();
    const theme = state === 'light'
  return (
    <Timeline theme={theme ? Dark : Light} dateFormat='only-number' lang="en">
        {ExperienceRoad.map((item) => {
            return (
                <SectionHooks
                    key={item.id}
                    yearStart={item.yearStart}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                />
            )
        })}
      </Timeline>
  )
}

export default TimelineHook