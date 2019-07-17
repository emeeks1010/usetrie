import * as React from "react";

import Demo from "./Demo";

function RedditPage() {
  const URL = `https://www.reddit.com/r/reactjs/.json?limit=30`;
  const [words, setWords] = React.useState([]);
  const wordsCache = React.useMemo(() => words, [words]);

  React.useEffect(() => {
    async function getWords() {
      const posts = await fetch(URL).then(_ => _.json());

      setWords(
        posts.data.children.map(({ data: post }) => ({
          id: post.name,
          text: post.title,
          url: post.url
        }))
      );
    }

    getWords();
  }, []);

  return <Demo title="👻 Reddit Array Demo" words={wordsCache} />;
}

export default RedditPage;
