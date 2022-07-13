import { useEffect, useState } from "react";

import Textarea from "../common/Textarea";
import { useGetPostsQuery } from "../../services/api/slice";

function RenderRow({ item, onChangePrev, onChangeCur, onFocus }) {
  return (
    <div className="translate-body__text-input--row">
      <label>Key_{item.id}</label>
      <div className="translate-body__text-input--row__wrapper">
        <Textarea
          value={item.title}
          onChange={onChangePrev}
          onFocus={onFocus}
          id={item.id}
        />
        <Textarea
          value={item.body}
          onChange={onChangeCur}
          onFocus={onFocus}
          id={item.id}
        />
      </div>
    </div>
  );
};

function TranslateTextInput({ onFocus }) {
  const [posts, setPosts] = useState(null)
  const { data, error, isLoading } = useGetPostsQuery();

  useEffect(() => {
    if (data) setPosts(data)
  }, [data])
  
  function onChangePrev(id, e) {
    // should implement deep copy for updates field
    console.log(id, e.target.value);
  }

  function onChangeCur(id, e) {
    // should implement deep copy for updates field
    console.log(id, e.target.value);
  }

  if (error) {
    // should implement error notification
    return <div className="request-error">Request Error</div>
  } else if (isLoading || !posts) {
    // should implement loading animation
    return <div className="input-loading">...loading</div>
  }

  return (
    <div className="translate-body__text-input">
      {posts.map((item, i) => (
        <RenderRow
          key={i}
          item={item}
          onChangePrev={onChangePrev}
          onChangeCur={onChangeCur}
          onFocus={onFocus}
        />
      ))}
    </div>
  );
};

export default TranslateTextInput;
