function Inline() {
    const cardStyle = {
        border: '2px solid black',
        padding: '20px',
        width: '150px',
        borderRadius: '20px',
        textAlign: 'center',
        boxShadow: '2px 2px 2px 2px #e5d0d0ff'
    }
    const imgStyle = {
        height: "180px",
        width: '200px',
        marginLeft: '-30px'
    }
    const dis = {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
    }
    return (
        <div>
            <h1 style={{ color: 'red' }}>Inline Style in ReactJS</h1>
            <div style={dis}>
                <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <h4>Virat Kholi</h4>
                    <p>Indian Cricketer</p>
                </div>
                <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <h4>Virat Kholi</h4>
                    <p>Indian Cricketer</p>
                </div>
                <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <h4>Virat Kholi</h4>
                    <p>Indian Cricketer</p>
                </div>
                <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <h4>Virat Kholi</h4>
                    <p>Indian Cricketer</p>
                </div>
                <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <h4>Virat Kholi</h4>
                    <p>Indian Cricketer</p>
                </div>
                <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <h4>Virat Kholi</h4>
                    <p>Indian Cricketer</p>
                </div>
                <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <h4>Virat Kholi</h4>
                    <p>Indian Cricketer</p>
                </div>
                <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <h4>Virat Kholi</h4>
                    <p>Indian Cricketer</p>
                </div>
                <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <h4>Virat Kholi</h4>
                    <p>Indian Cricketer</p>
                </div>
            </div>
        </div>
    )
}
export default Inline;