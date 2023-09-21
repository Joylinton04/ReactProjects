

const Box = ({project}) => {
  return (
    <div className="box">
        <div className="img-bg">
            <img src={project.src} />
        </div>
        <div className="layer layer1"></div>
        <div className="layer layer2"></div>
        <div className="content-bg">
            <div>
                <p>{project.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Box;