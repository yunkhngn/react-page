import React from 'react'
import MetaTags from 'react-meta-tags';

const MetaTag = (titlePage) => {
    return (
    <MetaTags>
        <title>{titlePage.titlePage + " | Khoa Nguyễn"}</title>
        
        <meta id="meta-description" name="description" content="Khoa Nguyen is a software engineer in Hanoi, Vietnam. He enjoys building software with Reactjs and dealing with algorithms and data structures." />
        <meta id="og-title" property="og:title" content={titlePage.titlePage + " | Khoa Nguyễn"} />
        <meta id="og-image" property="og:image" content="https://www.khoanguyen.dev/static/media/wall.32ce37cd.png" />
        <meta property="og:image:alt" content="A rainy day"/>
        <meta property="og:url" content={"https://www.khoanguyen.dev/" + titlePage.titlePage.toLowerCase().replace(/\s/g, '')}/>
        <meta property="og:type" content="website"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={"https://www.khoanguyen.dev/" + titlePage.titlePage.toLowerCase().replace(/\s/g, '')}/>
        <meta property="twitter:title" content={titlePage.titlePage + " | Khoa Nguyễn"}/>
        <meta property="twitter:description" content="Khoa Nguyen is a software engineer in Hanoi, Vietnam. He enjoys building software with Reactjs and dealing with algorithms and data structures."/>
        <meta property="twitter:image" content="https://www.khoanguyen.dev/static/media/wall.32ce37cd.png"/>
    </MetaTags>
  )
}

export default MetaTag