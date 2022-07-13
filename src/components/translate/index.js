import { useState } from "react";

import TranslateHeader from "./header";
import TranslateToolBar from "./toolbar";
import TranslateTextInput from "./textinput";
import TranslateSidebar from "./sidebar";

import { useDispatch } from "react-redux";
import { setPost } from "../../services/reducers/post";

function Translate() {
  const [selectedPost, setSelected] = useState(1);
  const dispatch = useDispatch();

  function onFocus(id) {
    dispatch(setPost(id));
    setSelected(id);
  }

  return (
    <div className="translate-layout">
      <TranslateHeader />
      <TranslateToolBar />
      <div className="translate-body">
        <TranslateTextInput onFocus={onFocus} />
        <TranslateSidebar selectedPost={selectedPost} />
      </div>
    </div>
  );
}

export default Translate;
