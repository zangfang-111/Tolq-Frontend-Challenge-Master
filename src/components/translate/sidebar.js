import { useState, useEffect } from "react";
import { useGetCommentsQuery } from "../../services/api/slice";

function TranslateSidebar({ selectedPost }) {
  const [renderData, setRenderData] = useState(null)
  const { data, error, isLoading } = useGetCommentsQuery();

  useEffect(() => {
    if (data) {
      const filtered = data.filter(i => i.id === selectedPost);
      setRenderData(filtered ? filtered[0] : null)
    }
  }, [data, selectedPost])

  if (error) {
    // should implement error notification
    return <div className="request-error">Request Error</div>
  } else if (isLoading || !renderData) {
    // should implement loading animation
    return <div className="side-loading">...loading</div>
  }

  return (
    <div className="translate-body__sidebar">
      <div className="translate-body__sidebar-id">
        <h3>ID:</h3>
        <p>{renderData.id}</p>
      </div>
      <div className="translate-body__sidebar-name">
        <h3>Name:</h3>
        <p>{renderData.name}</p>
      </div>
      <div className="translate-body__sidebar-desc">
        <h3>Description:</h3>
        <p>{renderData.body}</p>
      </div>
    </div>
  );
};

export default TranslateSidebar;
