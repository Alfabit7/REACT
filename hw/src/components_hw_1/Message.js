import '../style_hw_1/Message.scss';

function Message({ text }) {
    return (
        <>
            <h1 className="title">Основы {text} </h1>
            <a href="#" className="btn-flip" data-back="Back" data-front="Front"></a>
        </>
    );
}

export default Message;