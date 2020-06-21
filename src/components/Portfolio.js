import React from 'react'
import { Section } from '../styled'
import { DesignCard, BlogCard, GalerryCard } from './Cards'

export default function Portfolio() {
    return (
        <Section>
            <DesignCard />
            <BlogCard />
            <GalerryCard />
        </Section>
    )
}