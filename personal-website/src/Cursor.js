

const Cursor = ({refCursor}) => {
  return (
    <div id='cursor' 
        style={{backgroundColor: '#0096ff', 
        width: '15px', 
        height: '15px', 
        borderRadius: '50%', 
        position: 'absolute',
        zIndex: '111'
    }} ref={refCursor}></div>
  )
}

export default Cursor;