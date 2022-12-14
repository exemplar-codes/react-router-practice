import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";

import LoadingSpinner from "../UI/LoadingSpinner";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "../comments/CommentsList";

import classes from "./Comments.module.css";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { quoteId } = useParams();

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments); // ignoring error for simplicity

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let comments;
  if (status === "pending")
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (status === "completed" && loadedComments && loadedComments.length) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (status === "completed" && (!loadedComments || !loadedComments.length))
    comments = <p className="centered">No comments yet</p>;

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
