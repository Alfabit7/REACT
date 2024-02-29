import { useState } from "react";
import './commentsList.css'

function CommentsList() {
    const initialComments = [
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ];
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState('');

    const deleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };


    const addComment = () => {
        if (newComment && newComment.trim() !== '') {
            // ищем максимальный id  в комментариях 
            const lastCommentId = comments.reduce((maxId, comment) => Math.max(maxId, comment.id), 0) + 1;
            setComments([...comments, { id: lastCommentId, text: newComment.trim() }]);
            setNewComment('');
        }
    };


    const getUserComment = (e) => {
        setNewComment(e.target.value)
    }

    return (
        <div className="comments">
            {comments.map((comment) => (
                <div className={`comment comment_${comment.id}`} key={comment.id}>
                    <p>ID: {comment.id} Comment: {comment.text}</p>
                    <button className="comment_btn" onClick={() => deleteComment(comment.id)}>Удалить комментарий</button>
                </div>
            ))}
            {/* Добавить отзыв */}
            <input className="addComment" type="text" value={newComment} onChange={getUserComment}></input>
            <button className="comment_btn" onClick={addComment}>Добавить комментарий</button>
        </div>
    );
}

export default CommentsList;


