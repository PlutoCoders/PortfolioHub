export default function Project({project}) {
    return (
        <div className={`project flex alignCenter justifyCenter flexColumn`}>
            <h3><a className={`mainColorLink mainColorLinkAlt`} href={project.url}>{project.name}</a></h3>
            <p style={{paddingLeft: 15, paddingRight: 15}}>{project.description}</p>

            {project.topics && project.topics.length > 0 && <div className={`projectTopics flex gap5 justifySpaceBetween alignCenter`}>
                {project.topics.map((topic, topicIndex) => {
                    return <div key={topicIndex} className={`topic`}>{topic}</div>
                })}
            </div>}
        </div>
    )
}