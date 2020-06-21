import React from 'react'
import { Section } from '../styled'
import { DesignCard, BlogCard, GalerryCard } from './Cards'

export default function Portfolio() {
    return (
        <Section>
            Hi, I'm Pau, a front end developer.
            <DesignCard />
            <BlogCard />
            <GalerryCard />
        </Section>
    )
}