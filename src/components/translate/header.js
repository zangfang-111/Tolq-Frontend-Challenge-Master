import ProgressBar from "@ramonak/react-progress-bar";

import { Logo } from "../../assets";
import { useGetPostsQuery } from "../../services/api/slice";

function Progress() {
  const { data, error, isLoading } = useGetPostsQuery();

  if (error) {
    // should implement error notification
    return <div className="request-error">Request Error</div>
  } else if (isLoading) {
    // should implement loading animation
    return <div className="progress-loading">...loading</div>
  }

  return (
    <div className="translate-header__progress">
      <p>Progress</p>
      <ProgressBar
        completed={data.length}
        maxCompleted={100}
        bgColor="#57ab68"
        height="16px"
        labelSize="12px"
        completedClassName="progress-completed"
      />
    </div>
  );
};

function TranslateHeader() {
  return (
    <div className="translate-header">
      <a href='/'>
        <img src={Logo} alt='Tolq Logo' />
      </a>
      <div className="translate-header__text-wrapper">
        <h3>Markdown1.md</h3>
        <small>English - Spanish</small>
      </div>
      <Progress />
    </div>
  );
};

export default TranslateHeader;
